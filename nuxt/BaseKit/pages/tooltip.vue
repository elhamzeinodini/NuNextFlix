<template>
  <div class="tooltip-page">
    <div class="tooltips">
      <div class="top">
        <TheTooltip v-for="tooltip in tooltips" :key="tooltip.content" :option="tooltip">
          <template #trigger>
            <button>
              {{ tooltip.trigger }}
            </button>
          </template>
        </TheTooltip>
      </div>

      <div class="bottom">
        <TheTooltip v-for="tooltip in customTooltips" :key="tooltip.id" :option="tooltip">
          <template #trigger>
            <button class="">
              {{ tooltip.content }}
            </button>
          </template>
        </TheTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions } from '~/typescript';


/// ///////////////////////////////////////////////////////////////////////////////////////// static
const tooltips: TooltipOptions[] = [
  {
    content: 'top left prompt info',
    effect: 'dark',
    trigger: 'top-start',
    id: 1
  },
  {
    content: 'top center prompt info',
    effect: 'dark',
    trigger: 'top',
    id: 2
  },
  {
    content: 'top right prompt info',
    effect: 'dark',
    trigger: 'top-end',
    id: 3
  },
  {
    content: 'right top prompt info',
    effect: 'dark',
    trigger: 'right-start',
    id: 4
  },
  {
    content: 'right center prompt info',
    effect: 'dark',
    trigger: 'right',
    id: 5
  },
  {
    content: 'right bottom prompt info',
    effect: 'dark',
    trigger: 'right-end',
    id: 6
  },
  {
    content: 'bottom left prompt info',
    effect: 'dark',
    trigger: 'bottom-start',
    id: 7
  },
  {
    content: 'bottom center prompt info',
    effect: 'dark',
    trigger: 'bottom',
    id: 8
  },
  {
    content: 'bottom right prompt info',
    effect: 'dark',
    trigger: 'bottom-end',
    id: 9
  },
  {
    content: 'left top prompt info',
    effect: 'dark',
    trigger: 'left-start',
    id: 10
  },
  {
    content: 'left center prompt info',
    effect: 'dark',
    trigger: 'left',
    id: 11
  },
  {
    content: 'left bottom prompt info',
    effect: 'dark',
    trigger: 'left-end',
    id: 12
  }
]

const customTooltips: TooltipOptions[] = [
  {
    id: 1,
    content: 'Dark',
    trigger: 'bottom',
    effect: 'dark'
  },
  {
    id: 2,
    content: 'Light',
    trigger: 'top',
    effect: 'light'
  }
]
</script>


<style lang="scss" scoped>
@import '/assets/scss/pages/tooltip-page.scss';
</style>