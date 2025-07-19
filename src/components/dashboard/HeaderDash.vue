<script setup>
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()

const props = defineProps({
  msg: {
    type: String,
    required: false,  // Change to false or remove required
    default: ''       // Add a default value
  },
  userData: {
    type: Object,
    required: true,
    default: () => ({
      firstName: '',
      name: '',
      email: ''
    })
  }
})

// Add this to debug the incoming userData
watch(() => props.userData, (newValue) => {
  console.log('userData in HeaderDash:', newValue)
}, { immediate: true, deep: true })

function logout() {
  localStorage.removeItem('token')
  router.push('/sign-in')
}
</script>

<template>
  <header id="Header" class="app-header app-header-dark">
      <div class="top-bar">
        <div class="top-bar-brand ">
          <button class="hamburger hamburger-squeeze mr-2" type="button" data-toggle="aside-menu"
            aria-label="toggle aside menu"><span class="hamburger-box"><span
                class="hamburger-inner"></span></span></button>
          <router-link to="/">
            <h2>ESU</h2>
          </router-link>
        </div>
        <div class="top-bar-list">
          <div class="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
            <button class="hamburger hamburger-squeeze" type="button" data-toggle="aside" aria-label="toggle menu"><span
                class="hamburger-box"><span class="hamburger-inner"></span></span></button> <!-- /toggle menu -->
          </div>

          <div class="top-bar-item top-bar-item-full">
            <form class="top-bar-search">
              <div class="input-group input-group-search dropdown">
                <div class="input-group-prepend">
                  <span class="input-group-text"><span class="oi oi-magnifying-glass"></span></span>
                </div>
                <input type="text" class="form-control" data-toggle="dropdown" aria-label="Search"
                  placeholder="Recherche">
              </div>
            </form>
          </div>
          <div class="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
            <div class="dropdown d-none d-md-flex">
              <button class="btn-account" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><span class="user-avatar user-avatar-md"><img
                    src="/assets/images/avatars/profile.jpg" alt=""></span> 
                <span class="account-summary pr-lg-4 d-none d-lg-block">
                  <span class="account-name">{{ userData.firstName }} {{ userData.name }}</span> 
                  <span class="account-description">{{ userData.email || 'incognito@esu.cd' }}</span>
                </span>
              </button>
              <div class="dropdown-menu">
                <div class="dropdown-arrow d-lg-none" x-arrow=""></div>
                <div class="dropdown-arrow ml-3 d-none d-lg-block"></div>
                <h6 class="dropdown-header d-none d-md-block d-lg-none">{{ userData.firstName }} {{ userData.name }}</h6><router-link class="dropdown-item"
                  to="/profile"><span class="dropdown-icon oi oi-person"></span> Profile</router-link>
                  <button class="dropdown-item" @click="logout">
                    <span class="dropdown-icon oi oi-account-logout"></span> Déconnexion
                  </button>
                <div class="dropdown-divider"></div><router-link class="dropdown-item" to="#">Aide</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
