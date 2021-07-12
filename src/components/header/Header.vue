<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleDrawer"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar version {{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const leftDrawerOpen = computed(() => {
      return store.state.commonModule.drawerState;
    });
    console.log(leftDrawerOpen.value);
    const toggleDrawer = () => {
      store.dispatch("commonModule/toggleSidebar", !leftDrawerOpen.value);
    };
    return {
      leftDrawerOpen,
      toggleDrawer,
    };
  },
};
</script>

<style></style>
