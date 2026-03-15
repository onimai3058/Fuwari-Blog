import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "IKUN_3058のBlog",
	subtitle: "IKUN_3058",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/images/blog-img.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "By BlueArchive", // Credit text to be displayed
			url: "https://bluearchive-cn.com/", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 3, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "番组计划",
			url: "/bangumi/",
			external: false,
		},
		{
			name: "GitHub",
			url: "https://github.com/ikun3058",
			external: true,
		},
		{
			name: "BiliBili",
			url: "https://space.bilibili.com/3546773381450643",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/IKUN_3058.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "IKUN_3058",
	bio: "愿你历尽千帆，归来仍是少年。",
	links: [
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:ikun3058@131124.xyz",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/ikun3058",
		},
		{
			name: "BiliBili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546773381450643",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
