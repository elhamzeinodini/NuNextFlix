<template>
  <ClientOnly>
    <nav>
      <img src="/public/logo.svg" alt="logo" />

      <select v-model="langCode">
        <option v-for="lang in langs" :key="lang.id" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
    </nav>
  </ClientOnly>
</template>

<script setup lang="ts">
const i18n = useI18n();

const config = useRuntimeConfig();

/// ////////////////////////////////////////////////////////////////////////////////////////////////// type
type LangCode = "en" | "ar" | "fa" | "de";

interface Lang {
  id: number;
  name: string;
  code: LangCode;
}

/// ////////////////////////////////////////////////////////////////////////////////////////////////// computed
const langs = computed(() => {
  return [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Arabic", code: "ar" },
    { id: 3, name: "Persian", code: "fa" },
    { id: 4, name: "German", code: "de" },
  ] as Lang[];
});

/// ////////////////////////////////////////////////////////////////////////////////////////////////// states
const langCode = ref("en");

/// ////////////////////////////////////////////////////////////////////////////////////////////////// methods
const handleSwitchLang = (langCode: string) => {
  i18n.locale.value = langCode;

  const cookieLocale = useCookie(config.public.i18nLocal);
  cookieLocale.value = i18n.locale.value;
};

/// ////////////////////////////////////////////////////////////////////////////////////////////////// watcher
watch(langCode, (newVal) => {
  if (newVal) handleSwitchLang(newVal);
});

/// ////////////////////////////////////////////////////////////////////////////////////////////////// hooks
onMounted(() => {
  langCode.value = i18n.locale.value;
});
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
