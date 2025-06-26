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
            <h1 class="page-title">Système Educatif</h1>
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
                  <div id="floating-label" class="card">
                    <div class="card-body">
                      <form>
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
                              <label for="fl1">Nom du système</label>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div class="card-body border-top">
                      <form>
                        <fieldset>
                          <div class="form-group">
                            <div class="form-group">
                              <label for="tf6">Description</label>
                              <textarea class="form-control" id="tf6" rows="3"></textarea>
                            </div>
                          </div>
                          <div class="form-group"></div>
                        </fieldset>
                      </form>
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
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
