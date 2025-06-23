<template>
<main class="auth">
      <header id="auth-header" class="auth-header"
            style="background-image: url(/src/assets/images/illustration/img-1.png);">
            <h1 style="display: flex; flex-direction: column;">
                <span>Enseignement Supérieur et Universitaire</span>
                <router-link to="/" style="text-decoration: none; color: white;">ESU</router-link>
            </h1>
        <p>Avez-vous déjà un compte? <router-link to="/sign-in">Se connecter</router-link>
        </p>
      </header>
      <form class="auth-form" @submit.prevent="handleLogup">
        <div class="form-group">
          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus=""> <label for="inputEmail">johndoe@gmail.com</label>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-label-group">
            <input type="text" id="inputUsername" class="form-control" placeholder="Noms" required=""> <label for="inputUser">John Doe</label>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-label-group">
            <input type="number" id="inputNumber" class="form-control" placeholder="Phone" required=""> <label for="inputNum">0891234567</label>
          </div>
        </div>

        <div class="form-group">
          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required=""> <label for="inputPassword">Mot de passe</label>
          </div>
        </div>

        <div class="form-group">
          <div class="form-label-group">
            <input type="password2" id="inputPassword2" class="form-control" placeholder="Mot de passe" required=""> <label for="inputPassword2">Confirmer mot de passe</label>
          </div>
        </div>
        
        <div class="form-group">
          <button class="btn btn-lg btn-primary btn-block" type="submit">S'inscrire</button>
        </div>
        
        <div class="form-group">
          <div class="custom-control custom-control-inline custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="newsletter"> <label class="custom-control-label" for="newsletter">Mémoriser</label>
          </div>
        </div>
         <p class="text-center text-muted mb-0">En créant un compte, vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a>.</p>
      </form>
      <footer class="auth-footer">© 2025 Beyin LazQuir.</footer>
    </main>

</template>

<script setup>
import { ref } from 'vue';

const inputUsername = ref('');
const inputEmail = ref('');
const inputNumber = ref('');
const inputPassword = ref('');

function handleLogup() {
  // Logique de connexion ici
  console.log("Nom d'utilisateur:", inputUsername.value);
  console.log("Email", inputEmail.value);
  console.log("Numéro de téléphone", inputNumber.value);
  console.log("Mot de passe:", inputPassword.value);
}
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>

</style>
