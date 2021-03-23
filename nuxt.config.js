import smConfig from "./sm.json";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
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
          "We design purpose-led products, services and cultures that will drive your transformation.",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Stance",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "We design purpose-led products, services and cultures that will drive your transformation.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content:  "https://stance.design/social-share.png",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://stance.design",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://stance.design",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "We design purpose-led products, services and cultures that will drive your transformation.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:  "https://stance.design/social-share.png",
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
      ssr: false,
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
    "@nuxtjs/google-analytics"
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
    ["nuxt-sm"],
    ["vue-screen/nuxt"],
  ],

  generate: {
    fallback: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
  },

  storybook: {
    stories: ["~/slices/**/*.stories.js"],
  },

  ignore: ["**/*.stories.js"],

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

  googleAnalytics: {
    id: 'UA-152783995-1'
  }
};

