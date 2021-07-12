<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 400px">
    <q-form @submit="login" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Email is required']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Password is required']"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script src="./login" />

<style></style>
