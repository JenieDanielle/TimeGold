<script setup>
import { onMounted } from 'vue'
import FooterComponent from './components/FooterComponent.vue'
// import NavComponent from './components/NavComponent.vue' 

onMounted(() => {
  console.log('App montado com sucesso')
})
</script>

<template>
    <header>
      <NavComponent />
    </header>

    <main class="flex-1 mt-15"> <router-view />
    </main>

    <footer>
      <FooterComponent />
    </footer>
</template>
