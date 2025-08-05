<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>

  <div class="min-h-screen flex flex-col bg-emerald-50">
  
    <Navbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  
  </div>

</template>
