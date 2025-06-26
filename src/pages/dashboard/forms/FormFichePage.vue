<template>
  <main class="app-main">
    <div class="wrapper">
      <div class="page has-sidebar has-sidebar-expand-xl">
        <div class="page-inner">
          <header class="page-title-bar">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active">
                  <router-link :to="{ name: 'dashboard' }"
                    ><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Dashboard</router-link
                  >
                </li>
              </ol>
            </nav>
            <h1 class="page-title">Nouvelle Fiche</h1>
          </header>
          <div class="page-section">
            <div class="d-xl-none">
              <button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar">
                <i class="fa fa-th-list"></i>
              </button>
            </div>
            <div id="base-style" class="card">
              <div class="card-body">
                <form>
                  <legend>Système Educatif</legend>
                  <div class="form-group">
                    <label class="d-block">Choisissez le système éducatif attendu</label>
                    <div class="custom-control custom-control-inline custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        name="rdGroup1"
                        id="lmdRadio"
                        value="PADEM"
                        v-model="selectedSystem"
                      />
                      <label class="custom-control-label" for="lmdRadio">LMD</label>
                    </div>
                    <div class="custom-control custom-control-inline custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        name="rdGroup1"
                        id="pademRadio"
                        value="LMD"
                        v-model="selectedSystem"
                      />
                      <label class="custom-control-label" for="pademRadio">PADEM</label>
                    </div>
                    <!-- <div class="custom-control custom-checkbox mb-1">
                            <input type="radio" class="custom-control-input" id="ckb8"> <label class="custom-control-label" for="ckb8">LMD</label>
                            <div class="text-muted">Description du système LMD</div>
                          </div>
                          <div class="custom-control custom-checkbox mb-1">
                            <input type="radio" class="custom-control-input" id="ckb9"> <label class="custom-control-label" for="ckb9">PADEM</label>
                            <div class="text-muted">Description du système PADEM</div>
                          </div> -->
                  </div>
                  <div id="floating-label" class="card">
                    <div class="card-body">
                      <fieldset>
                        <legend>Coordonnées de l'établissement</legend>
                        <div class="form-group">
                          <div class="form-label-group">
                            <select class="custom-select" id="fls1" required="">
                              <option value="">Selectionner...</option>
                              <option>Kinshasa</option>
                              <option>Kongo Central</option>
                              <option>Kwango</option>
                              <option>Kwilu</option>
                              <option>Maï-Ndombe</option>
                              <option>Equateur</option>
                              <option>Sud-Ubangi</option>
                              <option>Nord-Ubangi</option>
                              <option>Mongala</option>
                              <option>Tshuapa</option>
                              <option>Tshopo</option>
                              <option>Haut-Uele</option>
                              <option>Bas-Uele</option>
                              <option>Ituri</option>
                              <option>Nord-Kivu</option>
                              <option>Sud-Kivu</option>
                              <option>Maniema</option>
                              <option>Haut-Katanga</option>
                              <option>Lualaba</option>
                              <option>Haut-Lomami</option>
                              <option>Tanganyika</option>
                              <option>Lomami</option>
                              <option>Kasaï-Oriental</option>
                              <option>Sankuru</option>
                              <option>Kasaï-Central</option>
                              <option>Kasaï</option>
                            </select>
                            <label for="fls1">Provinces</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-label-group">
                            <select class="custom-select" id="fls1" required="">
                              <option value="">Sélectionner une université...</option>
                              <option>Université de Kinshasa (UNIKIN)</option>
                              <option>Université Pédagogique Nationale (UPN)</option>
                              <option>Université Protestante au Congo (UPC)</option>
                              <option>Université Catholique du Congo (UCC)</option>
                              <option>Université de Lubumbashi (UNILU)</option>
                              <option>Université Kongo (UK)</option>
                              <option>Université de Kisangani (UNIKIS)</option>
                              <option>Université de Mbuji-Mayi (UM)</option>
                              <option>Université de Goma (UNIGOM)</option>
                              <option>Université Officielle de Bukavu (UOB)</option>
                              <option>Université de Kolwezi (UNIKOL)</option>
                              <option>Université de Kindu (UNIKI)</option>
                              <option>Université de Bandundu (UB)</option>
                              <option>Université Simon Kimbangu (USK)</option>
                              <option>Université Notre-Dame du Kasayi (UKA)</option>
                              <option>Université Libre de Kinshasa (ULK)</option>
                              <option>Université Adventiste de Lukanga (UNILUK)</option>
                            </select>
                            <label for="fls1">Universités de la RDC</label>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="form-label-group">
                            <select class="custom-select" id="fls1" required>
                              <option value="">{{ selectionnerFacDom }}...</option>
                              <option>Sciences</option>
                              <option>Médecine</option>
                              <option>Lettres et Sciences Humaines</option>
                              <option>Droit</option>
                              <option>Sciences Économiques et de Gestion</option>
                              <option>Psychologie et des Sciences de l’Éducation</option>
                              <option>Théologie</option>
                              <option>Pharmacie</option>
                              <option>Polytechnique</option>
                              <option>Agronomie</option>
                              <option>Sciences Sociales, Administratives et Politiques</option>
                              <option>Communication</option>
                              <option>Sciences de l’Information</option>
                              <option>Sciences Infirmières</option>
                              <option>Sciences Appliquées</option>
                              <option>Sciences de la Terre</option>
                              <option>Sciences de l’Environnement</option>
                            </select>
                            <label for="fls1">{{ labelNameFacDom }}</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-label-group">
                            <input
                              type="number"
                              class="form-control"
                              id="fl2"
                              placeholder=""
                              required=""
                            />
                            <label for="fl2">Nom du Département (Filière)</label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div class="card-body border-top">
                      <fieldset>
                        <legend>Coordonnés de l'étudiant</legend>
                        <div class="form-group">
                          <div class="form-label-group">
                            <input
                              type="text"
                              class="form-control"
                              id="fl1"
                              value=""
                              placeholder="Email address"
                              required=""
                            />
                            <label for="fl1">Nom de l'étudiant</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-group">
                            <label for="tf6">Adresses</label>
                            <textarea class="form-control" id="tf6" rows="3"></textarea>
                          </div>
                        </div>
                        <div class="form-group"></div>
                      </fieldset>
                    </div>
                  </div>
                  <div class="form-actions d-flex justify-content-end">
                    <button class="btn btn-primary me-3" type="submit">Soumettre</button>
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
            <a href="#base-style" class="nav-link smooth-scroll">Ajouter une Université</a>
            <!-- <a href="#labels" class="nav-link smooth-scroll">Domaine</a> 
              <a href="#floating-label" class="nav-link smooth-scroll">Fiche proprement dite</a>
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
import { ref, computed } from 'vue'

const selectedSystem = ref('LMD') // Valeur par défaut
const selectionnerFacDom = computed(() => {
  return selectedSystem.value === 'LMD' ? 'Sélectionner une faculté' : 'Sélectionner un domaine'
})
const labelNameFacDom = computed(() => {
  return selectedSystem.value === 'LMD' ? 'Facultés académiques' : 'Domaines académiques'
})
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
