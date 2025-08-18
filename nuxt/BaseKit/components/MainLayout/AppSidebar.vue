<template>
  <aside>
    <div
      v-for="item in sidebarItems"
      :key="item.id"
      class="section"
    >
      <h2>{{ item.parent }}</h2>

      <ul>
        <li v-for="child in item.children" 
            :key="child.id" 
            :class="child.link === route.name?.toString() && 'active'"
        >
          <NuxtLink :to="{ name: child.link }">
            <span>{{ child.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()

import { sidebarItems } from '~/assets/statics/app';
</script>

<style lang="scss" scoped>
@import '/assets/scss/components/sidebar.scss';
</style>