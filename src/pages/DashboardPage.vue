<script setup>
import AssideDash from '@/components/dashboard/AssideDash.vue';
import HeaderDash from '@/components/dashboard/HeaderDash.vue';
import FooterDash from '@/components/dashboard/FooterDash.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'  // Add this import
import axios from 'axios'

const router = useRouter()
const userData = ref({
  firstName: '',
  name: '',
  email: ''
})

const educativeData = ref([])
const provinceData = ref([])
const token = localStorage.getItem('token')
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

async function fetchUserData() {
  try {
    const userEmail = localStorage.getItem('userEmail')
    const response = await axios.get(`${apiBaseUrl}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.data.member && response.data.member.length > 0) {
      const authenticatedUser = response.data.member.find(user => user.email === userEmail)
      if (authenticatedUser) {
        userData.value = authenticatedUser
      }
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

async function fetchEducative() {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/educative_systemes`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.data.member && response.data.member.length > 0) {
      educativeData.value = response.data.member
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

async function fetchProvince() {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/provinces`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.data.member && response.data.member.length > 0) {
      provinceData.value = response.data.member
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}
let paceScript = null;

onMounted(async () => {
  await Promise.all([
    fetchUserData(),
    fetchEducative(),
    fetchProvince() 
  ])

  // Crée une nouvelle balise script
  paceScript = document.createElement('script');
  paceScript.src = '/assets/vendor/pace-progress/pace.min.js';
  paceScript.async = true;
  paceScript.id = 'pace-script';

  document.body.appendChild(paceScript);
});

onUnmounted(() => {
  // Retire le script lorsque le composant est détruit
  if (paceScript) {
    document.body.removeChild(paceScript);
  }
  // Pace.js ajoute des éléments au body, il faut aussi les nettoyer
  const paceElements = document.querySelectorAll('.pace');
  paceElements.forEach(el => el.remove());
});

</script>

<template>
<div class="app">
  <HeaderDash :userData msg="Dashboard"/>
  <AssideDash/>
  <router-view :userData="userData" :educativeData="educativeData" :provinceData="provinceData" />
  <FooterDash/>
</div>
</template>

<!-- <style scoped>
@media (min-width: 1024px) {
}
</style> -->
