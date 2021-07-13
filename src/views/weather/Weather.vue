<template>
  <div v-if="Object.entries(weather).length > 0" class="q-mt-lg q-mx-md">
    <q-input
      outlined
      v-model="searchKeyword"
      label="Search City"
      :dark="isDarkMode"
    >
      <template v-slot:append>
        <q-icon
          v-if="searchKeyword.length > 0"
          name="close"
          @click="clearSearch"
          class="cursor-pointer"
        />
        <q-icon name="search" @click="searchCity" />
      </template>
    </q-input>
  </div>
  <div v-if="Object.entries(weather).length > 0" class="q-pa-md">
    <div
      class="row justify-center rounded my-card text-white"
      :class="isDarkMode && 'bg-grey-9'"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <div class="col-4 text-center">
        <div class="text-h6">
          {{ weather.name }}
        </div>
      </div>
      <div class="col-4 text-center">
        <img :src="weatherICON" />
        <p>{{ weather.weather[0].main }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="text-h6">{{ weather.main.temp }}&#8451;</div>
      </div>
    </div>
  </div>
  <q-banner v-if="commonState.error" class="text-white bg-red q-mx-md">
    {{ searchKeyword }} city is not found.
  </q-banner>
</template>

<script src="./weather.js" />

<style></style>
