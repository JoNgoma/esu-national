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
            <h1 class="page-title">Type de diplôme</h1>
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
                  <legend>Ajouter un type de diplôme</legend> 
                      <div class="form-group">
                        <label class="d-block">Choisissez le système éducatif attendu</label>
                        <div class="custom-control custom-control-inline custom-radio">
                          <input type="radio" class="custom-control-input" name="rdGroup1" id="lmdRadio" value="PADEM" v-model="selectedSystem"> 
                          <label class="custom-control-label" for="lmdRadio">LMD</label>
                        </div>
                        <div class="custom-control custom-control-inline custom-radio">
                          <input type="radio" class="custom-control-input" name="rdGroup1" id="pademRadio" value="LMD" v-model="selectedSystem"> 
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
                              <label for="fl1">{{ labelName }}</label>
                            </div>
                          </div>
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
            <a href="#base-style" class="nav-link smooth-scroll">Système Educatif</a>
            <!-- <a href="#labels" class="nav-link smooth-scroll">Domaine</a>
            <a href="#floating-label" class="nav-link smooth-scroll">Fiche proprement dite</a>
            <a href="#selects" class="nav-link smooth-scroll">Avis</a> -->
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

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const selectedSystem = ref('LMD') // Valeur par défaut

const labelName = computed(() => {
  return selectedSystem.value === 'LMD' ? 'Nom du type diplôme (PADEM)' : 'Nom du type de diplôme (LMD)'
})
</script>

<style scoped></style>
