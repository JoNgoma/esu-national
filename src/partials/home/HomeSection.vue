<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleAuthRedirect() {
  const isAuthenticated = !!localStorage.getItem('token') // ou 'jwt_token'
  if (isAuthenticated) {
    router.push('/dashboard') // ou `{ name: 'dashboard' }`
  } else {
    router.push('/sign-in')
  }
}

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="py-5">
    <div class="container container-fluid-xl">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 order-md-2" data-aos="fade-left">
          <img class="img-fluid img-float-md-6 mb-5 mb-md-0" src="/assets/images/illustration/launch.svg" alt="">
        </div>
        <div class="col-12 col-md-6 order-md-1" data-aos="fade-in">
          <div class="col-fix pl-xl-3 ml-auto text-center text-sm-left">
            <h1 class="display-4 enable-responsive-font-size mb-4">
              <strong>Enseignement Supérieur et Universitaire</strong>
            </h1>
            <p class="lead text-muted mb-5">
              Offrez-vous une expérience numérique moderne au service de l'<strong>enseignement supérieur</strong>.
              Simplifiez la gestion académique et améliorez la productivité de vos projets universitaires.
            </p>
            <button @click="handleAuthRedirect" class="btn btn-lg btn-primary d-block d-sm-inline-block mr-sm-2 my-3"
              data-aos="zoom-in" data-aos-delay="200">
              Se connecter<i class="fas fa-angle-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
