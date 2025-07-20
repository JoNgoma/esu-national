<template>
<main class="app-main">
      <div class="wrapper">
        <div class="page has-sidebar has-sidebar-expand-xl">
          <div class="page-inner">
            <header class="page-title-bar">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">
                    <router-link :to="{name : 'dashboard'}"><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Dashboard</router-link>
                  </li>
                </ol>
              </nav>
              <h1 class="page-title">Nouvelle Université</h1>
            </header>
            <div class="page-section">
              <div class="d-xl-none">
                <button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar"><i
                    class="fa fa-th-list"></i></button>
              </div>
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="handleSaveProvince">
                    <div id="floating-label" class="card">
                        <div class="card-body">
                            <fieldset>
                              <legend id="educate">Système Educatif</legend> 
                              <div class="form-group">
                                <div v-if="educativeData.length > 0">
                                  <label class="d-block">Choisissez le système éducatif existant dans cette université</label>
                                  <div v-for="(educative, index) in educativeData" :key="educative.id" class="custom-control custom-checkbox mb-1">
                                    <input 
                                      type="checkbox" 
                                      class="custom-control-input" 
                                      :id="'ckb' + index"
                                      :value="educative.checked ? `${apiBaseUrl}/api/educative_systemes/${educative.id}` : ''"
                                      v-model="educative.checked"
                                    >
                                    <label class="custom-control-label" :for="'ckb' + index">
                                      {{ educative.nameEduc }}
                                    </label>
                                    <div class="text-muted">{{ educative.descriptEduc }}</div>
                                  </div>
                                </div>
                                <div v-else>
                                  Aucun système éducatif disponible.
                                </div>
                                <!-- <div class="custom-control custom-control-inline custom-radio">
                                  <input type="radio" class="custom-control-input" name="rdGroup1" id="rd3" checked> <label
                                    class="custom-control-label" for="rd3">Autres</label>
                                </div> -->
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      <div id="floating-label" class="card">
                        <div class="card-body">
                            <fieldset>
                              <legend id ="coordonnees">Coordonnées de l'établissement</legend> 
                              <div class="form-group">
                                <div class="form-label-group">
                                  <input type="text" class="form-control" id="univName" v-model="univName" placeholder="Nom de l'Etablissement">
                                  <label for="univName">Nom de l'Etablissement</label>
                                  <small class="text-danger" v-if="v$.univName.$error">
                                    Le nom de l'Etablissement est requis
                                  </small>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="form-label-group">
                                  <input type="text" class="form-control" id="postOfficeBox" v-model="postOfficeBox" placeholder="Boite postale"
                                    > <label for="postOfficeBox">Boite postale</label>
                                    <small class="text-danger" v-if="v$.postOfficeBox.$error">
                                    Le boite postale est requise
                                  </small>
                                </div>
                              </div>
                              <div class="form-group">
                                <div v-if="provinceData.length > 0" class="form-label-group">
                                  <select class="custom-select" id="prov" v-model="oneProvince">
                                    <option value="">Sélectionner...</option>
                                    <option
                                      v-for="province in provinceData"
                                      :key="province.id"
                                      :value="`/api/provinces/${province.id}`"
                                    >
                                      {{ province.name }}
                                    </option>
                                  </select>
                                  <label for="prov">Provinces</label>
                                  <small class="text-danger" v-if="v$.oneProvince.$error">
                                    La province est requise
                                  </small>
                                </div>
                                <div v-else>
                                  Aucune province disponible.
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="form-group">
                                  <label for="adress">Adresses</label>
                                  <textarea class="form-control" id="adress" v-model="adress" rows="3"></textarea>
                                  <small class="text-danger" v-if="v$.adress.$error">
                                    L'adresse est requise
                                  </small>
                                </div>
                              </div> 
                            </fieldset>
                        </div>
                        <div class="card-body border-top">
                            <fieldset>
                              <legend></legend> 
                              <div class="form-group">
                                <div class="form-label-group">
                                  <input v-model="phone" type="text" class="form-control" id="phone" placeholder="" > 
                                  <label for="phone">Télephone de l'Etablissement</label>
                                  <small class="text-danger" v-if="v$.phone.$error">
                                    Le numéro est requis
                                  </small>
                                </div>
                              </div>
                              <div class="form-group">
                              </div>
                            </fieldset>
                        </div>
                    </div>
                    
                    <div class="form-actions d-flex justify-content-end">
                      <button class="btn btn-primary me-3" type="submit" :disabled="isLoading" style="min-width: 100px;">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-else>Soumettre</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="page-sidebar page-sidebar-fixed">
            <header class="sidebar-header d-xl-none">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <a class="prevent-default" href="#" onclick="Looper.toggleSidebar()"><i
                      class="breadcrumb-icon fa fa-angle-left mr-2"></i>Back</a>
                </li>
              </ol>
            </header>
            <nav id="nav-content" class="nav flex-column mt-4">
              <a href="#educate" class="nav-link smooth-scroll">Système éducatif</a> 
              <a href="#coordonnees" class="nav-link smooth-scroll">Coordonnées de l'établissement</a> 
              <!-- <a href="#floating-label" class="nav-link smooth-scroll">Fiche proprement dite</a>
              <a href="#selects" class="nav-link smooth-scroll">Avis</a>  -->
              <!-- <a href="#checkboxes" class="nav-link smooth-scroll">Checkboxes</a> 
              <a href="#radios" class="nav-link smooth-scroll">Radios</a>  -->
            </nav>
          </div>
        </div>
      </div>
    </main>

</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'

const toast = useToast()
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

// Add these refs for form data
const univName = ref('')
const postOfficeBox = ref('')
const adress = ref('')
const phone = ref('')
const oneProvince = ref('')
const isLoading = ref(false)
const error = ref('')

const props = defineProps({
  educativeData: {
    type: Array,
    required: true,
    default: () => []
  },
  provinceData: {
    type: Array,
    required: true,
    default: () => []
  },
  userData: {
    type: Object,
    required: true,
    default: () => ({
      id: ""
    })
  }
})

// Initialize checked property for each educative system
props.educativeData.forEach(educative => {
  educative.checked = false
})

const rules = {
  univName: { required },
  postOfficeBox: { required },
  adress: { required },
  phone: { required },
  oneProvince: { required }
}

const v$ = useVuelidate(rules, {
  univName,
  postOfficeBox,
  adress,
  phone,
  oneProvince
})

async function handleSaveProvince() {
  const result = await v$.value.$validate()
  if (!result) {
    // Trigger validation on all fields
    Object.keys(v$.value).forEach(key => {
      if (typeof v$.value[key].$touch === 'function') {
        v$.value[key].$touch()
      }
    })
    return
  }

  isLoading.value = true
  try {
    const selectedSystems = props.educativeData
      .filter(edu => edu.checked)
      .map(edu => `${apiBaseUrl}/api/educative_systemes/${edu.id}`)

    const response = await axios.post(`${apiBaseUrl}/api/universities`, {
      name: univName.value,
      postOfficeBox: postOfficeBox.value,
      adress: adress.value,
      phone: phone.value,
      user: `/api/users/${props.userData.id}`,
      systeme: selectedSystems,
      province: oneProvince.value
    })

    // Reset form after successful submission
    resetForm()
    // Show success notification
    toast.success("Université enregistrée avec succès!")
    
  } catch (err) {
    error.value = 'Échec de l\'enregistrement. Veuillez réessayer.'
    toast.error("Échec de l'enregistrement. Veuillez réessayer.")
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

// Modify resetForm to properly reset all fields
function resetForm() {
  univName.value = ''
  postOfficeBox.value = ''
  adress.value = ''
  phone.value = ''
  oneProvince.value = ''
  // Reset checkboxes
  props.educativeData.forEach(educative => {
    educative.checked = false
  })
  // Reset validation state
  v$.value.$reset()
}
</script>

<style scoped>

</style>
