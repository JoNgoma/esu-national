<template>
<main class="auth">
        <header id="auth-header" class="auth-header"
            style="background-image: url(/src/assets/images/illustration/img-1.png);">
            <h1 style="display: flex; flex-direction: column;">
                <span>Enseignement Supérieur et Universitaire</span>
                <router-link  to="/" style="text-decoration: none; color: white;">ESU</router-link>
            </h1>
            <p>
                Avez vous un compte? <router-link to="/sign-up">S'incrire</router-link>
            </p>
        </header>

        <form class="auth-form" @submit.prevent="handleLogin">

            <div class="form-group">
                <div class="form-label-group">
                    <input type="text" id="inputEmail" class="form-control" placeholder="Username" autofocus="" v-model="username" required> <label
                        for="inputUser">johndoe@gmail.com</label>
                </div>
            </div>
            <div class="form-group">
                <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required> <label
                        for="inputPassword">Mot de passe</label>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
            </div>
            <div class="form-group">
                <div class="custom-control custom-control-inline custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="remember-me"> <label
                        class="custom-control-label" for="remember-me">Mémoriser</label>
                </div>
            </div>
            <div class="text-end  pt-3">
                <a href="/frontend/views/auth/forget-pwd.html" class="link">Mot de passe oublié?</a>
            </div>
        </form>

        <footer class="auth-footer">© 2025 Beyin LazQuir.</footer>
    </main>

</template>

<script setup>
import { ref } from 'vue';

const inputEmail = ref('');
const inputPassword = ref('');

function handleLogin() {
  // Logique de connexion ici
  console.log("E-mail", inputEmail.value);
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
