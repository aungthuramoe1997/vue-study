<template>
  <div class="q-px-md q-py-xs">
    <!-- show success or error -->
    <q-banner
      v-if="commonState.error"
      class="text-white q-mb-sm"
      :class="commonState.error ? 'bg-red' : 'bg-positive'"
    >
      show success or error
    </q-banner>
    <!-- for user view -->
    <div v-if="user.role === 'user'">
      <q-card
        class="my-card text-white q-mt-sm"
        :class="isDarkMode && 'bg-dark'"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        v-for="post in posts"
        :key="post.id"
      >
        <q-card-section>
          <div class="text-h6">{{ post.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ post.body }}
        </q-card-section>
      </q-card>
    </div>
    <!-- for admin view -->
    <q-table
      :dark="isDarkMode"
      :rows="posts"
      :columns="columns"
      row-key="id"
      v-else
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width />
          <q-th auto-width />
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width @click="showDialog({ edit: true }, props.row)">
            <q-btn size="sm" color="primary" round icon="edit" />
          </q-td>
          <q-td auto-width>
            <q-btn
              @click="showDialog({ delete: true }, props.row)"
              size="sm"
              color="negative"
              round
              icon="delete"
            />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-btn
          color="positive"
          icon-right="add"
          label="Create"
          no-caps
          @click="showDialog({ edit: false })"
        />
      </template>
    </q-table>
    <!-- dialog -->
    <q-dialog v-model="show" transition-show="rotate" transition-hide="rotate">
      <q-card
        class="my-card"
        style="min-width: 300px; min-height: 350px"
        :class="isDarkMode && 'bg-dark'"
      >
        <q-card-section class="text-white" :class="!isDarkMode && 'bg-primary'">
          <div class="text-h6">
            {{ isEdit ? "Update Post" : "Create Post" }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md q-mt-md">
            <q-input
              :dark="isDarkMode"
              outlined
              v-model="title"
              label="Post Title *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Post title is required',
              ]"
            />

            <q-input
              outlined
              class="standout"
              :dark="isDarkMode"
              type="text"
              v-model="body"
              label="Post Body *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Post body is required',
              ]"
            />
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            outline
            unelevated
            v-close-popup
            color="primary"
            label="Close"
          />
          <q-btn
            v-if="!isEdit"
            @click="createPost"
            outline
            unelevated
            color="primary"
            label="Create"
          />
          <q-btn
            v-if="isEdit"
            @click="updatePost"
            outline
            unelevated
            color="primary"
            label="Update"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- delete dialog -->
    <q-dialog
      v-model="showDelete"
      transition-show="rotate"
      transition-hide="rotate"
      persistent
    >
      <q-card class="my-card" :class="isDarkMode && 'bg-dark text-white'">
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to delete ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="negative" @click="deletePost" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script src="./post-list.js" />

<style></style>
