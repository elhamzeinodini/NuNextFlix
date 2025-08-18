export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  modules: ["@nuxt/icon"],

  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/app/variables.scss";`,
        },
      },
    },
  },
});
