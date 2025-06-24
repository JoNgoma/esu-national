<script setup>
import FooterHome from '@/components/home/FooterHome.vue';
import HeaderHome from '@/components/home/HeaderHome.vue';
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
    <HeaderHome />
  <main>
    <HomeSection />
    <MeritSection />
    <PnudSection />
    <ProvinceSection />
    <TestinonialSection />
    <CallActionSection />
  </main>
  <FooterHome />
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
