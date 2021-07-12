<template>
  <div v-if="!loginStatus">
    <Login />
  </div>

  <q-layout v-else view="lHh Lpr lFf" :class="isDarkMode && 'bg-dark'">
    <q-header elevated class="glossy" :class="isDarkMode && 'bg-dark'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar version {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="isDarkMode && 'bg-dark text-white'"
    >
      <q-list>
        <q-item-label class="text-center" header>Quasar Study</q-item-label>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="dark_mode" />
          </q-item-section>
          <q-item-section>
            <q-toggle
              size="xl"
              v-model="isDarkMode"
              @click="changeMode"
              checked-icon="dark_mode"
              unchecked-icon="wb_sunny"
            />
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'Weather' }" exact>
          <q-item-section avatar>
            <q-icon name="cloud" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Weather</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'Posts' }" exact>
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Posts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'Todos' }" exact>
          <q-item-section avatar>
            <q-icon name="task" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'Users' }" exact>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <div>
      <MainContent />
    </div>
  </q-layout>
</template>

<script>
import MainContent from "./views/main-content/MainContent.vue";
import Login from "./views/auth/Login.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "LayoutDefault",
  setup() {
    const store = useStore();
    let loginStatus = computed(() => {
      return store.state.userModule.isLoggin;
    });
    let isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });
    const changeMode = () => {
      console.log(isDarkMode.value);
      store.dispatch("userModule/changeMode", !isDarkMode.value);
    };
    return {
      leftDrawerOpen: ref(false),
      loginStatus,
      isDarkMode,
      changeMode,
    };
  },
  components: {
    MainContent,
    Login,
  },
};
</script>
