export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  imports: {
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },

  runtimeConfig: {
    public: {
      i18nLocal: "I18N_LOCAL",
    },
  },
});
