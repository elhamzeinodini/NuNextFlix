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
  switch (placement) {
    case 'top':
      return 'absolute top-[1.8rem] left-[40%]'
    case 'top-end':
      return 'absolute top-[1.8rem] left-[60%]'
    case 'top-start':
      return 'absolute top-[1.8rem] left-[30%]'
    case 'bottom':
      return 'absolute -top-[0.35rem] left-[2rem]'
    case 'bottom-end':
      return 'absolute -top-[0.35rem] left-[4.5rem]'
    case 'bottom-start':
      return 'absolute -top-[0.35rem] left-[0.5rem]'
    case 'right':
      return 'absolute right-[10rem] top-[0.5rem]'
    case 'right-end':
      return 'absolute right-[10rem] top-[0.9rem]'
    case 'right-start':
      return 'absolute right-[10rem] top-[0.2rem]'
    case 'left':
      return 'absolute left-[10rem] top-[0.6rem]'
    case 'left-end':
      return 'absolute left-[10rem] top-[0.9rem]'
    case 'left-start':
      return 'absolute left-[10rem] top-[0.3rem]'
    default:
      return null
  }
}


const getPlacement = (placement: TooltipPlacement) => {
  switch (placement) {
    case 'top':
    case 'top-end':
    case 'top-start':
      return 'absolute -top-[2.4rem] left-[-3rem]' 
    case 'right':
    case 'right-end':
    case 'right-start':
      return 'absolute -right-[10.5rem] top-[0.2rem]'  
    case 'bottom':
    case 'bottom-end':
    case 'bottom-start':
      return 'mt-[0.5rem]'  
    case 'left':
    case 'left-end':
    case 'left-start':
      return 'absolute -left-[10.5rem] -top-[0.1rem]' 
    default:
      return null 
  }
}

const getArrow = (placement: TooltipPlacement) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return 'border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent'

    case 'bottom':
    case 'bottom-end':
    case 'bottom-start':
      return 'border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6'

    case 'right':
    case 'right-end':
    case 'right-start':
      return 'border-t-6 border-b-6 border-r-6 border-t-transparent border-b-transparent'

    case 'left':
    case 'left-end':
    case 'left-start':
      return 'border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent'
    default:
      return null
  }
}
</script>