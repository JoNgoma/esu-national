<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
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
                    src="/assets/images/avatars/profile.jpg" alt=""></span> <span
                  class="account-summary pr-lg-4 d-none d-lg-block"><span class="account-name">Josué Ngoma</span> <span
                    class="account-description">Développeur Web</span></span></button> <!-- .dropdown-menu -->
              <div class="dropdown-menu">
                <div class="dropdown-arrow d-lg-none" x-arrow=""></div>
                <div class="dropdown-arrow ml-3 d-none d-lg-block"></div>
                <h6 class="dropdown-header d-none d-md-block d-lg-none">Josué Ngoma</h6><router-link class="dropdown-item"
                  to="/profile"><span class="dropdown-icon oi oi-person"></span> Profile</router-link> <router-link
                  class="dropdown-item" to="/sign-in"><span
                    class="dropdown-icon oi oi-account-logout"></span> Deconnexion</router-link>
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
