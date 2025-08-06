<template>
  <div class="flex items-center justify-center flex-col h-dvh">
    <div class="relative border border-border rounded-sm w-[500px] h-[250px] mx-auto">
      <div 
        v-for="tooltip in tooltips"
        :key="tooltip.content"
        :class="tooltip.placement"
      >
        <TheTooltip :option="tooltip">
          <template #trigger>
            <button class="z-10 font-normal border border-border py-[0.3rem] px-[0.6rem] text-sm text-text-primary rounded-sm hover:bg-primary-bg hover:text-primary hover:border-primary transition duration-300 ease-in-out">
              {{ tooltip.trigger }}
            </button>
          </template>
        </TheTooltip>
      </div>
    </div>

    <div class="mt-[2rem] flex items-center gap-[0.5rem] border border-border rounded-sm w-[500px] p-[1rem] mx-auto">
      <div 
        v-for="tooltip in customTooltips"
        :key="tooltip.id"
      >
        <TheTooltip :option="tooltip">
          <template #trigger>
            <button class="z-10 font-normal border border-border py-[0.3rem] px-[0.6rem] text-sm text-text-primary rounded-sm hover:bg-primary-bg hover:text-primary hover:border-primary transition duration-300 ease-in-out">
              {{ tooltip.content }}
            </button>
          </template>
        </TheTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipOptions } from '~/typescript/app';

/// ///////////////////////////////////////////////////////////////////////////////////////// static
const tooltips: TooltipOptions[] = [
  {
    content: 'top left prompt info',
    placement: 'absolute top-[2rem] left-[9rem]',
    effect: 'dark',
    trigger: 'top-start',
    id: 1
  },
  {
    content: 'top center prompt info',
    placement: 'absolute top-[2rem] left-[14rem]',
    effect: 'dark',
    trigger: 'top',
    id: 2
  },
  {
    content: 'top right prompt info',
    placement: 'absolute top-[2rem] left-[17rem]',
    effect: 'dark',
    trigger: 'top-end',
    id: 3
  },
  {
    content: 'right top prompt info',
    placement: 'absolute right-[2rem] top-[4rem]',
    effect: 'dark',
    trigger: 'right-start',
    id: 4
  },
  {
    content: 'right center prompt info',
    placement: 'absolute right-[2rem] top-[6.5rem]',
    effect: 'dark',
    trigger: 'right',
    id: 5
  },
  {
    content: 'right bottom prompt info',
    placement: 'absolute right-[2rem] top-[9rem]',
    effect: 'dark',
    trigger: 'right-end',
    id: 6
  },
  {
    content: 'bottom left prompt info',
    placement: 'absolute bottom-[1.5rem] left-[7rem]',
    effect: 'dark',
    trigger: 'bottom-start',
    id: 7
  },
  {
    content: 'bottom center prompt info',
    placement: 'absolute bottom-[1.5rem] left-[13.5rem]',
    effect: 'dark',
    trigger: 'bottom',
    id: 8
  },
  {
    content: 'bottom right prompt info',
    placement: 'absolute bottom-[1.5rem] left-[18rem]',
    effect: 'dark',
    trigger: 'bottom-end',
    id: 9
  },
  {
    content: 'left top prompt info',
    placement: 'absolute left-[2rem] top-[4rem]',
    effect: 'dark',
    trigger: 'left-start',
    id: 10
  },
  {
    content: 'left center prompt info',
    placement: 'absolute left-[2rem] top-[6.5rem]',
    effect: 'dark',
    trigger: 'left',
    id: 11
  },
  {
    content: 'left bottom prompt info',
    placement: 'absolute left-[2rem] top-[9rem]',
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
