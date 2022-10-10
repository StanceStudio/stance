import smConfig from "./sm.json";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Stance",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Stance design products, services, brands and ways of working that create lasting value for business and society.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Stance",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Stance design products, services, brands and ways of working that create lasting value for business and society.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://stance.design/social-share.png",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://stance.design",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://stance.design",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          " Stance design products, services, brands and ways of working that create lasting value for business and society.",
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://stance.design/social-share.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/fonts.css", "@/assets/css/tailwind.css"],

  loading: { color: "#292929", throttle: 0 },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/prismicLinks",
      mode: "client",
    },
    {
      src: "~/plugins/backgroundVideo",
      mode: "client",
    },
    {
      src: "~/plugins/vue-gtag",
      mode: "client",
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
    "@nuxtjs/google-fonts",
    "nuxt-lazysizes",
    "@nuxt/image",
    // "@nuxtjs/google-analytics",
    "@/modules/sitemapRouteGenerator",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: smConfig.apiEndpoint || "",
        disableGenerator: false,
        linkResolver: "@/plugins/link-resolver",
        htmlSerializer: "@/plugins/html-serializer",
        // apiOptions: {
        //   routes: [{
        //     type: "page",
        //     path: "/:uid"
        //   }]
        // }
      },
    ],
    ["vue-screen/nuxt"],
    ["@nuxtjs/sitemap"],
  ],

  generate: {
    fallback: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone"],
    postcss: {
      plugins: {
        "postcss-nested": {},
      },
    },
  },

  image: {
    provider: "prismic",
    prismic: {},
  },

  googleFonts: {
    display: "swap",
    families: {
      Manrope: [400, 500, 600, 700],
    },
  },

  screen: {
    extend: "tailwind",
  },

  lazySizes: {
    plugins: {
      unveilhooks: true,
    },
  },

  // googleAnalytics: {
  //   id: "UA-152783995-1",
  // },

  sitemap: {
    hostname: "https://stance.design",
  },
};
