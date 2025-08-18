<template>
  <div :class="['notification', `notification-${id}`, position]">
    <div class="left">
      <slot />
    </div>

    <button v-if="showCloseBtn" @click="handleCloseNotification">
      <i class="icon-square-x" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Position } from "~/typescript";

const { $gsap } = useNuxtApp();

/// /////////////////////////////////////////////////////////////////////////////////////// defineModel
const visible = defineModel<boolean>();

/// /////////////////////////////////////////////////////////////////////////////////////// types
interface Props {
  autoClose?: boolean;
  position: Position;
  showCloseBtn?: boolean;
  id: number;
}

/// /////////////////////////////////////////////////////////////////////////////////////// props
const props = withDefaults(defineProps<Props>(), {
  autoClose: false,
  showCloseBtn: true,
});

/// /////////////////////////////////////////////////////////////////////////////////////// methods
const handleCloseNotification = () => {
  $gsap.to(`.notification-${props.id}`, {
    opacity: 0,
    duration: 0.4,
    ease: "power3.in",
  });

  visible.value = false;
};

const autoClose = computed(() => {
  return props.autoClose;
});

/// /////////////////////////////////////////////////////////////////////////////////////// watchers
watch(visible, (newVal) => {
  if (newVal) {
    $gsap.to(`.notification-${props.id}`, {
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    if (autoClose.value) {
      const debounced = debounce(handleCloseNotification, 1000);
      debounced();
    }
  }
});
</script>

<style lang="scss">
@import "~/assets/scss/components/notification.scss";
</style>
