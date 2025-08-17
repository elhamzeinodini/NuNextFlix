<template>
  <div class="the-notification">
    <div class="left">
      <slot />
    </div>

    <button @click="emit('close')">x</button>
  </div>
</template>

<script setup lang="ts">
/// /////////////////////////////////////////////////////////////////////////////////////// emits
const emit = defineEmits(["close"]);

/// /////////////////////////////////////////////////////////////////////////////////////// types
type Type = "primary" | "success" | "warning" | "info" | "danger";

type Position = "top-right" | "bottom-right" | "bottom-left" | "top-left";

interface Props {
  autoClose: boolean;
  type: Type;
  position: Position;
  showCloseBtn: boolean;
}

/// /////////////////////////////////////////////////////////////////////////////////////// props
const props = withDefaults(defineProps<Props>(), {
  autoClose: false,
  showCloseBtn: true,
});
</script>
