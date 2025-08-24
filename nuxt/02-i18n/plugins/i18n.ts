import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import ar from "@/locales/ar.json";
import fa from "@/locales/fa.json";

export default defineNuxtPlugin(({ $config, vueApp }) => {
  const config = useRuntimeConfig();
  const savedLocale = useCookie(config.public.i18nLocal);

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: savedLocale.value || "en",
    messages: { en, de, fa, ar },
  });

  vueApp.use(i18n);

  return {
    provide: {
      i18Plugin: i18n,
    },
  };
});
