<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

function toggleTheme() {
  const currentSkin = localStorage.getItem('skin') || 'default';
  const newSkin = currentSkin === 'dark' ? 'default' : 'dark';
  localStorage.setItem('skin', newSkin);

  const defaultSheet = document.querySelector('link[data-skin="default"]');
  const darkSheet = document.querySelector('link[data-skin="dark"]');

  if (newSkin === 'dark') {
    if (defaultSheet) {
        defaultSheet.setAttribute('disabled', 'true');
        defaultSheet.setAttribute('rel', '');
    }
    if (darkSheet) {
        darkSheet.removeAttribute('disabled');
        darkSheet.setAttribute('rel', 'stylesheet');
    }
  } else {
    if (darkSheet) {
        darkSheet.setAttribute('disabled', 'true');
        darkSheet.setAttribute('rel', '');
    }
    if (defaultSheet) {
        defaultSheet.removeAttribute('disabled');
        defaultSheet.setAttribute('rel', 'stylesheet');
    }
  }
  // Force le re-rendu si nécessaire, bien que le changement de CSS devrait suffire
  window.location.reload();
}
</script>

<template>
  <aside id="Aside" class="app-aside app-aside-expand-md app-aside-light">
      <div class="aside-content">
        <header class="aside-header d-block d-md-none">
          <button class="btn-account" type="button" data-toggle="collapse" data-target="#dropdown-aside"><span
              class="user-avatar user-avatar-lg"><img src="/assets/images/avatars/profile.jpg" alt=""></span> <span
              class="account-icon"><span class="fa fa-caret-down fa-lg"></span></span> <span
              class="account-summary"><span class="account-name">Josué Ngoma</span> <span
                class="account-description">DévéloppeurWeb</span></span></button>
          <div id="dropdown-aside" class="dropdown-aside collapse">
            <div class="pb-3">
              <a class="dropdown-item" href="user-profile.html"><span class="dropdown-icon oi oi-person"></span>
                Profile</a> <a class="dropdown-item" href="auth-signin-v1.html"><span
                  class="dropdown-icon oi oi-account-logout"></span> Logout</a>
              <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Help Center</a> <a
                class="dropdown-item" href="#">Ask Forum</a> <a class="dropdown-item" href="#">Keyboard Shortcuts</a>
            </div>
          </div>
        </header>

        <div class="aside-menu overflow-hidden">
          <nav id="stacked-menu" class="stacked-menu">
            <ul class="menu">
              <li class="menu-item">
                <router-link :to="{name : 'dashboard'}" class="menu-link"><span class="menu-icon fas fa-home"></span>
                  <span class="menu-text">Dashboard</span></router-link>
              </li>
              <li class="menu-item has-child">
                <router-link to="" class="menu-link"><span class="menu-icon oi oi-pencil"></span> <span
                    class="menu-text">Formulaire</span></router-link>
                <ul class="menu">
                  <li class="menu-item">
                    <router-link :to="{ name: 'new-univ' }" class="menu-link">Nouvelle université</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{name : 'new-education'}" class="menu-link">Système éducatif</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'new-fac-dom' }" class="menu-link">Faculté (Domaine)</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'new-dep-fil' }" class="menu-link">Département (Filière)</router-link>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <router-link to="/dashboard/collections" class="menu-link"><span
                    class="menu-icon oi oi-list-rich"></span> <span class="menu-text">Collections</span></router-link>
              </li>

              <li class="menu-header">Interfaces </li>

              <li class="menu-item has-child">
                <a href="#" class="menu-link"><span class="menu-icon oi oi-person"></span> <span
                    class="menu-text">User</span></a>
                <ul class="menu">
                  <li class="menu-item">
                    <a href="user-profile.html" class="menu-link">Profile</a>
                  </li>
                  <li class="menu-item">
                    <a href="user-activities.html" class="menu-link">Taches</a>
                  </li>
                  <li class="menu-item">
                    <a href="user-teams.html" class="menu-link">Membre</a>
                  </li>
                  <li class="menu-item">
                    <a href="user-profile-settings.html" class="menu-link">Paramètre</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <footer class="aside-footer border-top p-2">
          <button class="btn btn-light btn-block text-primary" @click="toggleTheme">
              <span class="d-compact-menu-none">Thême sombre</span> <i class="fas fa-moon ml-1"></i>
          </button>
        </footer>
      </div>
    </aside>
</template>

<style scoped>
.router-link-exact-active .menu-icon, 
.router-link-exact-active .menu-text {
  color: #007bff; 
}

@media (min-width: 1024px) {

}
</style>
