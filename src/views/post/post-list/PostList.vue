<template>
  <div class="q-pa-md">
    <q-table
      :dark="isDarkMode"
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="id"
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
          <q-td auto-width>
            <q-btn size="sm" color="primary" round icon="visibility" />
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" color="primary" round icon="edit" />
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" color="primary" round icon="delete" />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="add"
          label="Create"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
  <!-- <div class="q-pa-md">
    <q-table :rows="rows" :columns="posts" row-key="id">
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="plus"
          label="Create"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div> -->
</template>

<script src="./post-list" />

<style></style>
