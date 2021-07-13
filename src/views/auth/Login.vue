<template>
  <div class="q-pa-md q-mx-auto q-mt-lg" style="max-width: 400px">
    <div class="text-center">
      <span class="text-h3 text-weight-medium text-light-blue">Login</span>
    </div>

    <q-form @submit="login" class="q-gutter-md q-mt-md">
      <q-input
        outlined
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Email is required']"
      />

      <q-input
        outlined
        class="standout"
        type="password"
        v-model="password"
        label="Password *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Password is required']"
      />
      <div class="text-center">
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script src="./login.js" />

<style></style>
