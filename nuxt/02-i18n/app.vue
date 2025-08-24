<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

/// //////////////////////////////////////////////////////////////////////////////////////// computed
const isRtl = computed(() => {
  return locale.value === "fa" || locale.value === "ar";
});

const htmlDIR = computed(() => {
  return isRtl.value ? "rtl" : "ltr";
});

/// //////////////////////////////////////////////////////////////////////////////////////// page setting
useHead({
  htmlAttrs: {
    dir: () => htmlDIR.value,
    lang: () => locale.value,
  },
});
</script>
