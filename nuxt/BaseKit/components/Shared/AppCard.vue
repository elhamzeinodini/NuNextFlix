<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  border: 1px solid $clr-border;
  padding: $gap-lg;
  border-radius: $medium-border-radius;
}
</style>
