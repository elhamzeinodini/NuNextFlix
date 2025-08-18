<template>
  <div class="notification-page">
    <AppCard>
      <div v-for="item in notifications" :key="item.id">
        <TheNotification
          v-if="notificationStates[item.id]"
          v-model="notificationStates[item.id].isVisible"
          class="notify"
          :id="item.id"
          :position="item.position"
        >
          <div class="top">
            <i :class="item.icon" />
            <b class="title">{{ item.title }}</b>
          </div>

          <span class="subtitle">
            {{ item.subtitle }}
          </span>
        </TheNotification>

        <button
          class="btn"
          @click="notificationStates[item.id] = { isVisible: true }"
        >
          {{ item.position }}
        </button>
      </div>
    </AppCard>

    <AppCard class="auto-close">
      <TheNotification
        v-model="showAutoCloseNotification"
        :auto-close="true"
        :show-close-btn="false"
        :id="autoCloseNotificationId"
        position="top-right"
        class="notify"
      >
        <div class="top">
          <i class="icon-ruler" />
          <b class="title">Top Left</b>
        </div>

        <span class="subtitle"> This is a dummy subtitle </span>
      </TheNotification>

      <button class="btn" @click="showAutoCloseNotification = true">
        Automatic Close
      </button>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import { TheNotification } from "#components";
import type { Position } from "~/typescript";

/// ///////////////////////////////////////////////////////////////////////////////// states
const notificationStates = reactive<{
  [key: string]: { isVisible: boolean };
}>({});

const showAutoCloseNotification = ref(false);

/// ///////////////////////////////////////////////////////////////////////////////// interface
interface Notification {
  id: number;
  position: Position;
  title: string;
  subtitle: string;
  icon: string;
}

/// ///////////////////////////////////////////////////////////////////////////////// computed
const notifications = computed(() => {
  const details: Notification[] = [
    {
      id: 0,
      position: "top-right",
      title: "Top Right",
      subtitle: "This is a message that does not automatically close",
      icon: "icon-square-check",
    },
    {
      id: 1,
      position: "top-left",
      title: "Top Left",
      subtitle: "This is a message that does not automatically close",
      icon: "icon-sort-descending",
    },
    {
      id: 2,
      position: "bottom-left",
      title: "Bottom Left",
      subtitle: "This is a message that does not automatically close",
      icon: "icon-trees",
    },
    {
      id: 3,
      position: "bottom-right",
      title: "Bottom Right",
      subtitle: "This is a message that does not automatically close",
      icon: "icon-wallpaper",
    },
  ];

  return details;
});

const autoCloseNotificationId = computed(() => {
  return notifications.value?.length + 1;
});

/// ///////////////////////////////////////////////////////////////////////////////// methods
const populateState = () => {
  for (let i = 0; i < notifications.value.length; i++) {
    notificationStates[i] = { isVisible: false };
  }

  return notificationStates;
};

/// ///////////////////////////////////////////////////////////////////////////////// hooks
onMounted(() => {
  populateState();
});
</script>

<style lang="scss">
@import "~/assets/scss/pages/notification-page.scss";
</style>
