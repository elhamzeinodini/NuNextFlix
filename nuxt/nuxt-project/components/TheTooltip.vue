<template>
  <div class="border border-gray-300 text-gray-300 rounded w-[5rem] flex justify-center align-center" 
       @mouseover="showTooltipContent = true"
       @mouseleave="showTooltipContent = false"
  >
    <div class="trigger">
      <slot name="trigger" />
    </div>

    <div 
      v-if="showTooltipContent"
      class="tooltip-content">
      <span>{{ option.content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions } from '~/typescript/app';

defineProps<{
  option: TooltipOptions
}>()

const showTooltipContent = ref(false)
</script>