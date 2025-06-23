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
        <div class="row align-items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <img class="img-fluid mb-4 mb-md-0" src="/src/assets/images/illustration/solution.svg" alt="">
          </div>
          <div class="col-12 col-md-6 text-center text-sm-left">
            <h3 class="mb-4">Nous en faisons un peu plus</h3>
            <p class="text-muted font-size-lg mb-4"> Le PNUD, à travers son Laboratoire d’Accélération, appuie le
              ministère de l’Enseignement Supérieur et Universitaire (ESU) pour la mise en place d’un système centralisé
              de contrôle des diplômes. Ce système a pour objectif de permettre la vérification rigoureuse des dossiers
              des étudiants finalistes à travers tout le territoire national.</p><a href="#"
              class="btn btn-subtle-primary">En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
