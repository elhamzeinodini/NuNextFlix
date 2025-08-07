export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/app/variables.scss";`,
        }
      }
    }
  }
})
