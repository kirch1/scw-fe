<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="flex justify-center p-6">
    <div class="grow max-w-screen-lg">
      <RouterView />
    </div>
  </main>
  
</template>
