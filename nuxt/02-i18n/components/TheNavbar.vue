<template>
  <nav>
    <img src="/logo.svg" alt="logo" />

    <div>{{ i18n.locale.value }}</div>

    <select v-model="i18n.locale.value">
      <option v-for="lang in langs" :key="lang.id" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </nav>
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

/// ////////////////////////////////////////////////////////////////////////////////////////////////// methods
const handleSwitchLang = () => {
  const cookieLocale = useCookie(config.public.i18nLocal);
  cookieLocale.value = i18n.locale.value;
};

/// ////////////////////////////////////////////////////////////////////////////////////////////////// watcher
watch(
  () => i18n.locale.value,
  (newVal) => {
    if (newVal) handleSwitchLang();
  }
);
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
