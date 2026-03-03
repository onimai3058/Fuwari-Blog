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

// 新增：转换 ../img/ 相对路径为绝对 URL 的核心函数
function convertRelativeImgToAbsolute(html: string, siteUrl: string) {
  // 确保站点 URL 末尾无斜杠，避免路径重复（如 https://xxx.com//img）
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");
  // 匹配所有 ../img/ 开头的图片路径，替换为绝对路径
  return html.replace(
    /<img[^>]+src="\.\.\/img\/([^"]+)"/g,
    (match, imgPath) => {
      const absoluteSrc = `${cleanSiteUrl}/img/${imgPath}`;
      return match.replace(`../img/${imgPath}`, absoluteSrc);
    }
  );
}

export async function GET(context: APIContext) {
	const blog = await getSortedPosts();
  // 提取站点根 URL（优先用配置的 site，兜底用默认地址）
  const siteUrl = context.site?.toString() ?? "https://fuwari.vercel.app";

	return rss({
		title: siteConfig.title,
		description: siteConfig.subtitle || "No description",
		site: siteUrl,
		items: blog.map((post) => {
			const content =
				typeof post.body === "string" ? post.body : String(post.body || "");
			const cleanedContent = stripInvalidXmlChars(content);
      
      // 1. 渲染 Markdown 为 HTML（包含原始相对路径图片）
      let renderedHtml = parser.render(cleanedContent);
      // 2. 关键：转换图片相对路径为绝对 URL
      renderedHtml = convertRelativeImgToAbsolute(renderedHtml, siteUrl);
      // 3. 清理 HTML（保留 img 标签）
      const sanitizedHtml = sanitizeHtml(renderedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        // 新增：显式允许 img 标签的 src/alt 属性，确保图片正常显示
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
				content: sanitizedHtml, // 替换为处理后的 HTML
			};
		}),
		customData: `<language>${siteConfig.lang}</language>`,
	});
}
