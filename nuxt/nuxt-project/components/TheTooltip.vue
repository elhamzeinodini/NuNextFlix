<template>
  <div 
    @mouseover="showTooltipContent = true"
    @mouseleave="showTooltipContent = false"
  >
    <div class="trigger">
      <slot name="trigger" />
    </div>

    <div 
      v-if="showTooltipContent"
      role="tooltip"
      :class="['z-30 absolute text-sm p-[0.3rem] w-[10rem] text-center rounded-sm', getPlacement(option.trigger), props.option.effect === 'dark' ? 'bg-text-primary text-on-primary' : 'text-primary bg-on-primary']"
    >
      <div :class="['w-0 h-0', getArrow(option.trigger), getArrowPlacement(option.trigger), props.option.effect === 'dark' ? 'border-text-primary' : 'border-on-primary']" />

      <span>{{ option.content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions, TooltipPlacement } from '~/typescript/app';

/// ///////////////////////////////////////////////////////////////////////////////////////// prop
const props = defineProps<{
  option: TooltipOptions
}>()

/// ///////////////////////////////////////////////////////////////////////////////////////// states
const showTooltipContent = ref(false)


/// ///////////////////////////////////////////////////////////////////////////////////////// methods
const getArrowPlacement = (placement: TooltipPlacement) => {
  const positionMap = {
    top: 'absolute top-[1.8rem] left-[40%]',
    'top-end': 'absolute top-[1.8rem] left-[60%]',
    'top-start': 'absolute top-[1.8rem] left-[30%]',
    bottom: 'absolute -top-[0.35rem] left-[2rem]',
    'bottom-end': 'absolute -top-[0.35rem] left-[4.5rem]',
    'bottom-start': 'absolute -top-[0.35rem] left-[0.5rem]',
    right: 'absolute right-[10rem] top-[0.5rem]',
    'right-end': 'absolute right-[10rem] top-[0.9rem]',
    'right-start': 'absolute right-[10rem] top-[0.2rem]',
    left: 'absolute left-[10rem] top-[0.6rem]',
    'left-end': 'absolute left-[10rem] top-[0.9rem]',
    'left-start': 'absolute left-[10rem] top-[0.3rem]',
  }

  return positionMap[placement] ?? ''
}


const getPlacement = (placement: TooltipPlacement) => {
  const positionMap = {
    top: 'absolute -top-[2.4rem] left-[-3rem]',
    'top-end': 'absolute -top-[2.4rem] left-[-3rem]',
    'top-start': 'absolute -top-[2.4rem] left-[-3rem]',
    right: 'absolute -right-[10.5rem] top-[0.2rem]',
    'right-end': 'absolute -right-[10.5rem] top-[0.2rem]',
    'right-start': 'absolute -right-[10.5rem] top-[0.2rem]',
    bottom: 'mt-[0.5rem]',
    'bottom-end': 'mt-[0.5rem]',
    'bottom-start': 'mt-[0.5rem]',
    left: 'absolute -left-[10.5rem] -top-[0.1rem]',
    'left-end': 'absolute -left-[10.5rem] -top-[0.1rem]',
    'left-start': 'absolute -left-[10.5rem] -top-[0.1rem]',
  }

  return positionMap[placement] ?? ''
}

const getArrow = (placement: TooltipPlacement) => {
  const topArrow = 'border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent'
  const bottomArrow = 'border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6'
  const rightArrow = 'border-t-6 border-b-6 border-r-6 border-t-transparent border-b-transparent'
  const leftArrow = 'border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent'

  if (placement.includes('top')) return topArrow
  else if (placement.includes('right')) return rightArrow
  else if (placement.includes('bottom')) return bottomArrow
  else return leftArrow
}
</script>