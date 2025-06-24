<script setup>
import AssideDash from '@/components/dashboard/AssideDash.vue';
import HeaderDash from '@/components/dashboard/HeaderDash.vue';
import FooterDash from '@/components/dashboard/FooterDash.vue';
import { onMounted, onUnmounted } from 'vue';

let paceScript = null;

onMounted(() => {
  // Crée une nouvelle balise script
  paceScript = document.createElement('script');
  paceScript.src = '/assets/vendor/pace-progress/pace.min.js';
  paceScript.async = true;
  paceScript.id = 'pace-script'; // Ajoute un ID pour le retrouver facilement

  // Ajoute le script au body
  document.body.appendChild(paceScript);
});

onUnmounted(() => {
  // Retire le script lorsque le composant est détruit
  if (paceScript) {
    document.body.removeChild(paceScript);
  }
  // Pace.js ajoute des éléments au body, il faut aussi les nettoyer
  const paceElements = document.querySelectorAll('.pace');
  paceElements.forEach(el => el.remove());
});

</script>

<template>
<div class="app">
  <HeaderDash/>
  <AssideDash/>
  <router-view />
  <FooterDash/>
</div>
</template>

<!-- <style scoped>
@media (min-width: 1024px) {
}
</style> -->
