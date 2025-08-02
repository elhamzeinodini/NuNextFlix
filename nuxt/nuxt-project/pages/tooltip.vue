<template>
  <div class="flex">
    <div v-for="option in options" :key="option.content">
      <TheTooltip :option="option">
        <template #trigger>
          <button>{{ option.trigger }}</button>
        </template>
      </TheTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions } from '~/typescript/app';

const options: TooltipOptions[] = [
  {
    content: 'top tooltip',
    placement: 'top',
    effect: 'dark',
    trigger: 'top',
    id: 1
  },
  {
    content: 'right tooltip',
    placement: 'right',
    effect: 'dark',
    trigger: 'right',
    id: 2
  },
  {
    content: 'bottom tooltip',
    placement: 'bottom',
    effect: 'dark',
    trigger: 'bottom',
    id: 3
  },
  {
    content: 'left tooltip',
    placement: 'left',
    effect: 'dark',
    trigger: 'left',
    id: 4
  }
]
</script>