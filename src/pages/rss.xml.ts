import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import sanitizeHtml from "sanitize-html";
import { siteConfig } from "@/config";
import { url } from "@utils/url-utils";

// 清理 XML 非法字符（保留原有逻辑）
function stripInvalidXmlChars(str: string): string {
  return str.replace(
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
    "",
  );
}

export async function GET(context: APIContext) {
  // 1. 获取博客文章（用 getCollection 替代 getSortedPosts，避免工具函数兼容问题）
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  // 2. 固定你的站点域名（必须和实际部署一致）
  const siteUrl = "https://131124.xyz";

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || "No description",
    site: siteUrl,
    // 3. 关键：用 Promise.all 异步渲染文章，获取带真实资源路径的 HTML
    items: await Promise.all(
      posts.map(async (post) => {
        // 核心：通过 Astro 原生 render 方法渲染文章内容
        // 这里的 Content 已经包含 Astro 处理后的图片真实路径（_astro/哈希名.webp）
        const { Content } = await post.render();
        // 渲染为完整 HTML 字符串
        const renderedHtml = await Content();
        
        // 4. 清理内容（保留 img 标签和 src/alt 属性）
        const cleanHtml = sanitizeHtml(stripInvalidXmlChars(renderedHtml), {
          allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "img", "p", "h1", "h2", "h3", "h4", "ul", "li", "ol",
          ],
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ["src", "alt", "width", "height"], // 必须保留 src 属性
          },
          // 禁止过滤任何 img 标签的 src 属性
          exclusiveFilter: (frame) => 
            frame.tag === "img" && frame.attribs.src?.startsWith("/_astro/"),
        });

        return {
          title: post.data.title,
          pubDate: post.data.published,
          description: post.data.description || cleanHtml.substring(0, 150),
          link: `${siteUrl}/posts/${post.slug}/`, // 绝对路径链接
          content: cleanHtml, // 最终带真实图片路径的内容
        };
      })
    ),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}