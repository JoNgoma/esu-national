<template>
  <main class="app-main">
    <div class="wrapper">
      <div class="page has-sidebar has-sidebar-expand-xl">
        <div class="page-inner">
          <header class="page-title-bar">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active">
                  <router-link :to="{ name: 'dashboard' }">
                    <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Dashboard
                  </router-link>
                </li>
              </ol>
            </nav>
            <h1 class="page-title">Nouvelle Fiche</h1>
          </header>

          <div class="page-section">
            <div id="base-style" class="card">
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <!-- Système éducatif -->
                  <legend>Système Educatif</legend>
                  <div class="form-group">
                    <label class="d-block">Choisissez le système éducatif attendu</label>
                    <div class="custom-control custom-control-inline custom-radio">
                      <input type="radio" class="custom-control-input" id="lmdRadio" value="LMD" v-model="selectedSystem"/>
                      <label class="custom-control-label" for="lmdRadio">LMD</label>
                    </div>
                    <div class="custom-control custom-control-inline custom-radio">
                      <input type="radio" class="custom-control-input" id="pademRadio" value="PADEM" v-model="selectedSystem"/>
                      <label class="custom-control-label" for="pademRadio">PADEM</label>
                    </div>
                  </div>

                  <!-- Coordonnées établissement -->
                  <div id="floating-label" class="card">
                    <div class="card-body">
                      <fieldset>
                        <legend>Coordonnées de l'établissement</legend>

                        <!-- Province -->
                        <div class="form-group">
                          <div class="form-label-group">
                            <select class="custom-select" v-model="formData.province" @change="onProvinceChange" required>
                              <option value="">Sélectionner...</option>
                              <option v-for="prov in provinces" :key="prov['@id']" :value="prov['@id']">{{ prov.name }}</option>
                            </select>
                            <label>Provinces</label>
                          </div>
                        </div>

                        <!-- Université -->
                        <div class="form-group" v-if="universities.length">
                          <div class="form-label-group">
                            <select class="custom-select" v-model="formData.university" @change="onUniversityChange" required>
                              <option value="">Sélectionner une université...</option>
                              <option v-for="uni in universities" :key="uni['@id']" :value="uni['@id']">{{ uni.name }}</option>
                            </select>
                            <label>Universités</label>
                          </div>
                        </div>

                        <!-- Faculté (LMD) ou Domaine (PADEM) -->
                        <div class="form-group" v-if="facs.length">
                          <div class="form-label-group">
                            <select class="custom-select" v-model="formData.faculteOrDomain" @change="onFacOrDomainChange" required>
                              <option value="">{{ selectionnerFacDom }}</option>
                              <option v-for="fac in facs" :key="fac['@id']" :value="fac['@id']">{{ fac.name }}</option>
                            </select>
                            <label>{{ labelNameFacDom }}</label>
                          </div>
                        </div>

                        <!-- Département (LMD) ou Spinneret (PADEM) -->
                        <div class="form-group" v-if="spinnerets.length">
                          <div class="form-label-group">
                            <select class="custom-select" v-model="formData.spinneret" required>
                              <option value="">Sélectionner...</option>
                              <option v-for="spin in spinnerets" :key="spin['@id']" :value="spin['@id']">{{ spin.name }}</option>
                            </select>
                            <label>{{ selectedSystem === 'LMD' ? 'Départements' : 'Filières' }}</label>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <!-- Coordonnées étudiant -->
                    <div class="card-body border-top">
                      <fieldset>
                        <legend>Coordonnées de l'étudiant</legend>
                        <div class="form-group"><div class="form-label-group"><input type="text" class="form-control" v-model="formData.firstName" required /><label>Prénom</label></div></div>
                        <div class="form-group"><div class="form-label-group"><input type="text" class="form-control" v-model="formData.name" required /><label>Nom</label></div></div>
                        <div class="form-group"><div class="form-label-group"><input type="text" class="form-control" v-model="formData.lastName" required /><label>Postnom</label></div></div>
                        <div class="form-group"><div class="form-label-group"><input type="text" class="form-control" v-model="formData.numDiplome" required /><label>Numéro du diplôme</label></div></div>
                        <div class="form-group"><div class="form-label-group"><input type="text" class="form-control" v-model="formData.scolastic" required /><label>École terminale</label></div></div>
                        <div class="form-group"><label>Adresse</label><textarea class="form-control" v-model="formData.adress" rows="3"></textarea></div>
                      </fieldset>
                    </div>

                    <!-- Promos & Mentions -->
                    <div class="card-body border-top" v-if="filteredPromos.length && filteredMentions.length">
                      <fieldset>
                        <legend>Promotions & Mentions</legend>
                        <div v-for="promo in filteredPromos" :key="promo['@id']" class="form-group">
                          <label>{{ promo.name }}</label>
                          <div class="d-flex">
                            <!-- Mention -->
                            <select class="custom-select mr-2" v-model="promoMentions[promo['@id']].mention">
                              <option value="">Sélectionner une mention...</option>
                              <option v-for="mention in filteredMentions" :key="mention['@id']" :value="mention['@id']">{{ mention.name }}</option>
                            </select>
                            <!-- Année académique -->
                            <select class="custom-select" v-model="promoMentions[promo['@id']].academicYear">
                              <option value="">Sélectionner une année académique...</option>
                              <option v-for="year in academicYears" :key="year" :value="year">{{ year }}</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <!-- Boutons -->
                  <div class="form-actions d-flex justify-content-end mt-3">
                    <button class="btn btn-primary" type="submit" :disabled="loading">{{ loading ? 'Enregistrement...' : 'Soumettre' }}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="page-sidebar page-sidebar-fixed">
          <header class="sidebar-header d-xl-none"><ol class="breadcrumb mb-0"><li class="breadcrumb-item"><a class="prevent-default" href="#" onclick="Looper.toggleSidebar()"><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Back</a></li></ol></header>
          <nav id="nav-content" class="nav flex-column mt-4"><a href="#base-style" class="nav-link smooth-scroll">Ajouter une Université</a></nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const selectedSystem = ref('LMD')

// form principal
const formData = ref({
  firstName: '',
  name: '',
  lastName: '',
  numDiplome: '',
  scolastic: '',
  province: '',
  university: '',
  faculteOrDomain: '',
  spinneret: '',
  matricule: '',
  adress: '',
  isMindInstitution: true,
  isMindController: true,
  isMindSecretariate: true,
  isMindCommission: true
})

// selections promos & mentions
const promos = ref([])
const mentions = ref([])
const promoMentions = ref({}) // { promoId: { mention: '', academicYear: '' } }

// Options dynamiques
const provinces = ref([])
const universities = ref([])
const facs = ref([])
const spinnerets = ref([])

// libellés dynamiques
const selectionnerFacDom = computed(() =>
  selectedSystem.value === 'PADEM' ? 'Sélectionner une faculté' : 'Sélectionner un domaine'
)
const labelNameFacDom = computed(() =>
  selectedSystem.value === 'PADEM' ? 'Facultés académiques' : 'Domaines académiques'
)

// filtrage promos/mentions selon le système
const filteredPromos = computed(() =>
  promos.value.filter(p => p.systeme === (selectedSystem.value === 'LMD' ? '/api/educative_systemes/2' : '/api/educative_systemes/1'))
)
const filteredMentions = computed(() =>
  mentions.value.filter(m => m.systeme === (selectedSystem.value === 'LMD' ? '/api/educative_systemes/2' : '/api/educative_systemes/1'))
)

// années académiques
const academicYears = computed(() => {
  const years = []
  const current = new Date().getFullYear()
  for (let start = 2000; start <= current; start++) {
    years.push(`${start}-${start + 1}`)
  }
  return years
})

const loading = ref(false)

onMounted(async () => {
  await fetchProvinces()
  await fetchPromos()
  await fetchMentions()
  formData.value.matricule = generateMatricule()
})

function generateMatricule() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length))
  return `ETU-${new Date().getFullYear()}-${code}`
}

async function fetchProvinces() {
  try {
    const res = await axios.get(`${apiBaseUrl}/api/provinces`)
    provinces.value = res.data.member || []
  } catch (err) { console.error('Erreur fetch provinces:', err) }
}

async function onProvinceChange() {
  universities.value = []
  facs.value = []
  spinnerets.value = []
  if (!formData.value.province) return
  try {
    const prov = provinces.value.find(p => p['@id'] === formData.value.province)
    universities.value = prov?.universities || []
  } catch (err) { console.error('Erreur fetch universities:', err) }
}

async function onUniversityChange() {
  facs.value = []
  spinnerets.value = []
  if (!formData.value.university) return
  try {
    const res = await axios.get(`${apiBaseUrl}${formData.value.university}`)
    facs.value = selectedSystem.value === 'PADEM' ? res.data.facultes || [] : res.data.domains || []
  } catch (err) { console.error('Erreur fetch facs:', err) }
}

async function onFacOrDomainChange() {
  spinnerets.value = []
  if (!formData.value.faculteOrDomain) return
  try {
    const res = await axios.get(`${apiBaseUrl}${formData.value.faculteOrDomain}`)
    spinnerets.value = res.data.departements || res.data.spinnerets || []
  } catch (err) { console.error('Erreur fetch spinnerets:', err) }
}

async function fetchPromos() {
  try {
    const res = await axios.get(`${apiBaseUrl}/api/promos`)
    promos.value = res.data.member || []
    promos.value.forEach(p => promoMentions.value[p['@id']] = { mention: '', academicYear: '' })
  } catch (err) { console.error('Erreur fetch promos:', err) }
}

async function fetchMentions() {
  try {
    const res = await axios.get(`${apiBaseUrl}/api/mentions`)
    mentions.value = res.data.member || []
  } catch (err) { console.error('Erreur fetch mentions:', err) }
}

async function submitForm() {
  try {
    loading.value = true
    const promoMentionsPayload = Object.entries(promoMentions.value)
      .filter(([_, v]) => v.mention && v.academicYear)
      .map(([promoId, v]) => ({
        promo: promoId,
        mention: v.mention,
        academicYear: v.academicYear
      }))

    const payload = {
      ...formData.value,
      scolastic: selectedSystem.value,
      promoMentions: promoMentionsPayload
    }

    console.log('Payload envoyé :', payload)
    await axios.post(`${apiBaseUrl}/api/cards`, payload)
    alert('Fiche enregistrée avec succès ✅')
  } catch (err) {
    console.error('Erreur:', err)
    alert('Erreur lors de l’enregistrement ❌')
  } finally {
    loading.value = false
  }
}
</script>
