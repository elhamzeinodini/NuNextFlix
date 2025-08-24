<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="home-page">
    <TheNavbar />

    <span>{{ t("hey") }}</span>
  </div>
</template>

<style lang="scss">
.home-page {
  span {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
