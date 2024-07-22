<template>
  <q-page padding>
    <q-btn class="q-btn--outline" to="/forum">Go To Forum</q-btn>
    <q-btn @click="fetchMessage">Fetch Message</q-btn>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { api } from 'boot/axios';

// Define options for the component
defineOptions({
  name: 'IndexPage'
});

// Define the message ref
const message = ref('');

// Function to fetch the message from API
const fetchMessage = async () => {
  try {
    const response = await api.get('/forumList');
    console.log(response)
    message.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
