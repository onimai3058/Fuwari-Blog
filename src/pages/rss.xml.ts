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

// 核心修复：仅针对 _astro 目录下的图片进行绝对路径转换
function convertAstroImgToAbsolute(html: string, siteUrl: string): string {
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");
  // 匹配所有 src 包含 "_astro/" 的图片标签
  return html.replace(
    /<img([^>]+)src="([^"]*_astro\/[^"]+)"([^>]*)>/g,
    (match, before, src, after) => {
      let absoluteSrc = src;
      // 如果不是 http 开头，说明是相对路径，需要拼接
      if (!src.startsWith("http://") &&!src.startsWith("https://")) {
        if (src.startsWith("/")) {
          // 以 / 开头，直接拼接域名
          absoluteSrc = `${cleanSiteUrl}${src}`;
        } else {
          // 其他情况，确保前面有 /
          absoluteSrc = `${cleanSiteUrl}/${src.replace(/^\.\//, "")}`;
        }
      }
      return `<img${before}src="${absoluteSrc}"${after}>`;
    }
  );
}

export async function GET(context: APIContext) {
	const blog = await getSortedPosts();
  // 确保获取到正确的站点 URL
  const siteUrl = context.site?.toString()?? "https://fuwari.vercel.app";

	return rss({
		title: siteConfig.title,
		description: siteConfig.subtitle || "No description",
		site: siteUrl,
		items: blog.map((post) => {
			const content =
				typeof post.body === "string"? post.body : String(post.body || "");
			const cleanedContent = stripInvalidXmlChars(content);
      
      // 1. 渲染 Markdown
      let renderedHtml = parser.render(cleanedContent);
      // 2. 只转换 _astro 目录下的图片路径
      renderedHtml = convertAstroImgToAbsolute(renderedHtml, siteUrl);
      // 3. 清理 HTML 并保留图片标签
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