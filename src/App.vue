<template>
  <div v-if="!loginStatus">
    <Login />
  </div>

  <q-layout v-else view="lHh Lpr lFf" :class="isDarkMode && 'bg-black'">
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

        <q-toolbar-title> {{ title }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="isDarkMode && 'bg-dark text-white'"
    >
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">{{ user.name }}</div>
          <div>{{ user.email }}</div>
        </div>
      </q-img>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon :name="isDarkMode ? 'dark_mode' : 'wb_sunny'" />
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
          <q-item>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section @click="logout">
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <div>
      <MainContent />
      <div class="text-center" v-show="commonState.loading">
        <q-spinner-dots color="blue" size="5.5em" />
      </div>
    </div>
  </q-layout>
</template>

<script src="./app.js" />
