import rss from "@astrojs/rss";
import { getSortedPosts } from "@utils/content-utils";
import { url } from "@utils/url-utils";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { siteConfig } from "@/config";

const parser = new MarkdownIt();

function stripInvalidXmlChars(str: string): string {
	return str.replace(
		// biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
		"",
	);
}

// 修复：通用路径处理，支持 Astro 构建后的 _astro 哈希路径
function convertRelativeImgToAbsolute(html: string, siteUrl: string) {
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");
  // 匹配所有 img 标签的 src 属性，无论路径格式
  return html.replace(
    /<img([^>]+)src="([^"]+)"([^>]*)>/g,
    (match, before, src, after) => {
      let absoluteSrc = src;
      // 仅处理非 http/https 开头的路径
      if (!src.startsWith("http://") &&!src.startsWith("https://")) {
        if (src.startsWith("/")) {
          // 以 / 开头的绝对路径（如 /_astro/...）
          absoluteSrc = `${cleanSiteUrl}${src}`;
        } else if (src.startsWith("../")) {
          // 以../ 开头的相对路径
          absoluteSrc = `${cleanSiteUrl}/${src.replace("../", "")}`;
        } else if (src.startsWith("./")) {
          // 以./ 开头的相对路径
          absoluteSrc = `${cleanSiteUrl}/${src.replace("./", "")}`;
        } else {
          // 其他普通相对路径（如 _astro/...）
          absoluteSrc = `${cleanSiteUrl}/${src}`;
        }
      }
      return `<img${before}src="${absoluteSrc}"${after}>`;
    }
  );
}

export async function GET(context: APIContext) {
	const blog = await getSortedPosts();
  const siteUrl = context.site?.toString()?? "https://fuwari.vercel.app";

	return rss({
		title: siteConfig.title,
		description: siteConfig.subtitle || "No description",
		site: siteUrl,
		items: blog.map((post) => {
			const content =
				typeof post.body === "string"? post.body : String(post.body || "");
			const cleanedContent = stripInvalidXmlChars(content);
      
      let renderedHtml = parser.render(cleanedContent);
      renderedHtml = convertRelativeImgToAbsolute(renderedHtml, siteUrl);
      const sanitizedHtml = sanitizeHtml(renderedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: {
         ...sanitizeHtml.defaults.allowedAttributes,
          img: ["src", "alt", "width", "height"],
        },
      });

			return {
				title: post.data.title,
				pubDate: post.data.published,
				description: post.data.description || "",
				link: url(`/posts/${post.slug}/`),
				content: sanitizedHtml,
			};
		}),
		customData: `<language>${siteConfig.lang}</language>`,
	});
}