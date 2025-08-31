<template>
  <main class="app-main">
    <div class="wrapper">
      <div class="page">
        <div class="page-inner">
          <header class="page-title-bar">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active">
                  <router-link to="/">
                    <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>
                    Dashboard
                  </router-link>
                </li>
              </ol>
            </nav>
            <div class="d-md-flex align-items-md-start">
              <h1 class="page-title mr-sm-auto">Membres</h1>
              <div class="btn-toolbar">
                <button type="button" class="btn btn-light">
                  <i class="oi oi-data-transfer-download"></i>
                  <span class="ml-1">Exporter</span>
                </button>
              </div>
            </div>
          </header>

          <div class="page-section">
            <div class="card card-fluid">
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group input-group-alt">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <span class="oi oi-magnifying-glass"></span>
                      </span>
                    </div>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="search" 
                      placeholder="Rechercher par nom ou matricule..."
                    >
                  </div>
                </div>
                <div class="text-muted">
                  {{ members.length }} enregistrements trouvés
                </div>

                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nom complet</th>
                        <th>Matricule</th>
                        <th>Diplôme</th>
                        <th>Promo / Mention</th>
                        <th>Adresse</th>
                        <th style="width:100px;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(member, index) in filteredMembers" :key="member.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ member.firstName }} {{ member.lastName }}</td>
                        <td>{{ member.matricule }}</td>
                        <td>{{ member.numDiplome }}</td>
                        <td>
                          <div v-for="pm in member.promoMentions" :key="pm.academicYear">
                            {{ pm.promo.name }} - {{ pm.mention.name }} 
                            ({{ pm.academicYear }})
                          </div>
                        </td>
                        <td>{{ member.adress }}</td>
                        <td class="text-right">
                          <button class="btn btn-sm btn-icon btn-secondary" @click="editMember(member)">
                            <i class="fa fa-pencil-alt"></i>
                          </button>
                          <button class="btn btn-sm btn-icon btn-danger" @click="deleteMember(member.id)">
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="filteredMembers.length === 0">
                        <td colspan="7" class="text-center text-muted">Aucun résultat trouvé</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const members = ref([])
const search = ref('')
const isLoading = ref(false)

onMounted(async () => {
  await fetchMembers()
})

async function fetchMembers() {
  isLoading.value = true
  try {
    const res = await axios.get(`${apiBaseUrl}/api/cards`)
    members.value = res.data.member || []
  } catch (err) {
    console.error('Erreur de chargement:', err)
  } finally {
    isLoading.value = false
  }
}

const filteredMembers = computed(() => {
  return members.value.filter(m =>
    (m.firstName + ' ' + m.lastName).toLowerCase().includes(search.value.toLowerCase()) ||
    (m.matricule || '').toLowerCase().includes(search.value.toLowerCase())
  )
})

function editMember(member) {
  console.log('Éditer:', member)
  // navigation ou modal ici
}

function deleteMember(id) {
  console.log('Supprimer:', id)
  // appel API DELETE ici
}
</script>
