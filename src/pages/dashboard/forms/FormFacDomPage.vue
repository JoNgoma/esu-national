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
            <h1 class="page-title">Faculté (Domaine)</h1>
          </header>
          <div class="page-section">
            <div class="d-xl-none">
              <button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar">
                <i class="fa fa-th-list"></i>
              </button>
            </div>
            <div id="base-style" class="card">
              <div class="card-body">
                <form @submit.prevent="handleSaveFacDom">
                  <div id="educative" class="card">
                    <div class="card-body">
                        <legend>Système Educatif</legend> 
                          <div class="form-group">
                            <div v-if="educativeData.length > 0" class="d-flex flex-column gap-3">
                              <label class="d-block">Choisissez le système éducatif correspondant</label>

                              <div v-for="(educative, index) in educativeData" :key="educative.id" class="custom-control custom-radio">
                                <input 
                                type="radio" 
                                class="custom-control-input" 
                                :name="'ckb' + index" 
                                :id="'ckb' + index"
                                :value="educative.nameEduc"
                                v-model="selectedSystem"
                                > 
                                <label class="custom-control-label" :for="'ckb' + index">{{ educative.nameEduc }}</label>
                                <div class="text-muted">{{ educative.descriptEduc }}</div>
                              </div>                                   
                            </div>
                            <div v-else>
                              Aucun système éducatif disponible.
                            </div>
                          </div>
                    </div>
                  </div>
                  <div id="coordonnees" class="card">
                    <div class="card-body">
                      <legend>Coordonées {{ labelName }}</legend> 
                        <fieldset>
                          <div class="form-group">
                            <div class="form-label-group">
                              <input
                                type="text"
                                class="form-control"
                                id="nameFacDom"
                                v-model="nameFacDom"
                              />
                              <label for="nameFacDom">Nom {{ labelName }}</label>
                              <small class="text-danger" v-if="v$.nameFacDom.$error">
                                    Le nom {{ labelName }} est requis
                                  </small>
                            </div>
                          </div>
                        </fieldset>
                    </div>
                    <div class="card-body border-top">
                        <fieldset>
                          <div class="form-group">
                            <div class="form-group">
                              <label for="description">Description</label>
                              <textarea class="form-control" id="description" v-model="descript" rows="3"></textarea>
                              <small class="text-danger" v-if="v$.descript.$error">
                                    La description est requise
                                  </small>
                            </div>
                          </div>
                          <div class="form-group"></div>
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
                <a class="prevent-default" href="#" onclick="Looper.toggleSidebar()"
                  ><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Back</a
                >
              </li>
            </ol>
          </header>
          <nav id="nav-content" class="nav flex-column mt-4">
            <a href="#educative" class="nav-link smooth-scroll">Système Educatif</a>
            <a href="#coordonnees" class="nav-link smooth-scroll">Coordonées {{ labelName }}</a>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'


const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  educativeData: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedSystem = ref('') 
const nameFacDom = ref('') 
const descript = ref('') // Changed from description to match your v-model
const isLoading = ref(false)
const error = ref('')
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const toast = useToast()

// Initialize checked property for each educative system
props.educativeData.forEach(educative => {
  educative.checked = false
})

// Define the validation rules
const rules = {
  nameFacDom: { required },
  descript: { required }  // Changed from description to match the ref
}

// Create the form state object
const state = {
  nameFacDom,
  descript  // Changed from description to match the ref
  // add other form fields here
}

// Initialize vuelidate with rules and state
const v$ = useVuelidate(rules, state)
const labelName = computed(() => {
  return selectedSystem.value.toLowerCase().includes('lmd') 
    ? 'du domaine' 
    : 'de la faculté'
})
const wherePost = computed(() => {
  return selectedSystem.value.toLowerCase().includes('lmd') 
    ? 'domains' 
    : 'facultes'
})
async function handleSaveFacDom() {
  // console.log(`URL : ${apiBaseUrl}/api/${wherePost.value}`)
  const result = await v$.value.$validate()
  if (!result) {
    return
  }

  isLoading.value = true
  try {
    const response = await axios.post(`${apiBaseUrl}/api/${wherePost.value}`, {
      name: nameFacDom.value,
      description: descript.value,  // Changed from description.value to descript.value
    })
    // Reset form after successful submission
    resetForm()
    toast.success(`Enregistrement ${labelName.value} effectué avec succès!`)
    
  } catch (err) {
    toast.error("Échec de l'enregistrement. Veuillez réessayer.")
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

function resetForm() {
  nameFacDom.value = ''
  descript.value = ''  // Changed from description.value to descript.value
  // Reset checkboxes
  props.educativeData.forEach(educative => {
    educative.checked = false
  })
  v$.value.$reset()
}
</script>

<style scoped></style>
