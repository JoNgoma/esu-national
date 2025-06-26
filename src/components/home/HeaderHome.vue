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
  <nav class="navbar navbar-expand-lg navbar-light py-4" data-aos="fade-in">
    <div class="container">
      <button
        class="hamburger hamburger-squeeze hamburger-light d-flex d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>
      <h1 style="display: flex; flex-direction: column">
        <router-link to="/" style="text-decoration: none">ESU</router-link>
      </h1>
      <button
        @click="handleAuthRedirect"
        class="navbar-btn btn btn-subtle-primary ml-auto order-lg-2"
      >
        Se connecter
      </button>
      <div class="navbar-collapse collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mr-lg-3 active">
            <a class="nav-link py-2" href="#">Home</a>
          </li>
          <li class="nav-item mr-lg-3">
            <a class="nav-link py-2" href="#">Objectifs</a>
          </li>
          <li class="nav-item mr-lg-3">
            <a class="nav-link py-2" href="#">Provinces</a>
          </li>
          <li class="nav-item mr-lg-3">
            <a class="nav-link py-2" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
