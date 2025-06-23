<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="py-5">
      <div class="container">
        <div class="row text-center text-md-left">
          <div class="col-6 col-md-3 py-4" data-aos="fade-up" data-aos-delay="0">
            <img class="mb-4" src="/src/assets/images/illustration/lab.svg" alt="" height="72">
            <h2 class="lead">Toujours accécible</h2>
          </div>
          <div class="col-6 col-md-3 py-4" data-aos="fade-up" data-aos-delay="100">
            <img class="mb-4" src="/src/assets/images/illustration/easy-config.svg" alt="" height="72">
            <h2 class="lead">Ingéniosité</h2>
          </div>
          <div class="col-6 col-md-3 py-4" data-aos="fade-up" data-aos-delay="200">
            <img class="mb-4" src="/src/assets/images/illustration/scale.svg" alt="" height="72">
            <h2 class="lead">Stable et fiable</h2>
          </div>
          <div class="col-6 col-md-3 py-4" data-aos="fade-up" data-aos-delay="300">
            <img class="mb-4" src="/src/assets/images/illustration/support.svg" alt="" height="72">
            <h2 class="lead">Excellent Support</h2>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
