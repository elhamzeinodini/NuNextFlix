<template>
  <div @mouseover="showTooltipContent = true" @mouseleave="showTooltipContent = false" class="tooltip">
    <div class="trigger">
      <slot name="trigger" />
    </div>

    <div v-if="showTooltipContent" role="tooltip" class="item">
      <div :class="props.option.trigger" />

      <span>{{ option.content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions } from '~/typescript';


/// ///////////////////////////////////////////////////////////////////////////////////////// prop
const props = defineProps<{
  option: TooltipOptions
}>()

/// ///////////////////////////////////////////////////////////////////////////////////////// states
const showTooltipContent = ref(false)
</script>

<style lang="scss" scoped>
@import '/assets/scss/components/tooltip.scss';
</style>