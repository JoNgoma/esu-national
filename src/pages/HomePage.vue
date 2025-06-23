<script setup>
import FooterHome from '@/partials/FooterHome.vue';
import CallActionSection from '@/partials/home/CallActionSection.vue';
import HomeSection from '@/partials/home/HomeSection.vue';
import MeritSection from '@/partials/home/MeritSection.vue';
import PnudSection from '@/partials/home/PnudSection.vue';
import ProvinceSection from '@/partials/home/ProvinceSection.vue';
import TestinonialSection from '@/partials/home/TestinonialSection.vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>

  <main>
    <HomeSection />
    <MeritSection />
    <PnudSection />
    <ProvinceSection />
    <TestinonialSection />
    <CallActionSection />
    <FooterHome />
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
