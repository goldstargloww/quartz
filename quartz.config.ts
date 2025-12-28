import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "starglowwOS",
    pageTitleSuffix: " 〈🌠〉",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "goldstargloww.github.io/quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fredoka",
        body: "Fredoka",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          text: "#53596C",
          subtext1: "#9483AC",
          subtext0: "#A58BAA",
 
          base: "#FFF8F8",
          depth1: "#FDEDED",
          depth0: "#F0DBDB",
 
          red: "#F45B70",
          orange: "#FF8E61",
          yellow: "#EECF68",
          green: "#53E08B",
          cyan: "#54CDC7",
          blue: "#488DE6",
          purple: "#8E5EDE",
 
          accent: "#E5C155",
          highlight: "#54CDC7",
          textHighlight: "#54CDC7",
        },
        darkMode: {
          text: "#FFF2DAFF",
          subtext1: "#CFA39BFF",
          subtext0: "#816161FF",
 
          base: "#2C243FFF",
          depth1: "#231E2CFF",
          depth0: "#1C1925FF",
 
          red: "#F0576B",
          orange: "#F99973",
          yellow: "#F0E395",
          green: "#7BD39E",
          cyan: "#6CBFB5",
          blue: "#7AA9E6",
          purple: "#A987DE",
 
          accent: "#E5C155",
          highlight: "#E5C155",
          textHighlight: "#E5C155",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
