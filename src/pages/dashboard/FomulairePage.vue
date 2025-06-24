<template>
<main class="app-main">
      <div class="wrapper">
        <div class="page has-sidebar has-sidebar-expand-xl">
          <div class="page-inner">
            <header class="page-title-bar">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">
                    <a href="#"><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Dashboard</a>
                  </li>
                </ol>
              </nav>
              <h1 class="page-title">Formunlaire fiche de scolarité</h1>
            </header>
            <div class="page-section">
              <div class="d-xl-none">
                <button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar"><i
                    class="fa fa-th-list"></i></button>
              </div>
              <div id="base-style" class="card">
                <div class="card-body">
                  <form>
                      <legend>Système Educatif</legend> 
                      <div class="form-group">
                        <label class="d-block">choisissez le système éducatif pour lequel vous voulez compléter la
                          fiche</label>
                        <div class="custom-control custom-control-inline custom-radio">
                          <input type="radio" class="custom-control-input" name="rdGroup1" id="rd1"> <label
                            class="custom-control-label" for="rd1">LMD</label>
                        </div>
                        <div class="custom-control custom-control-inline custom-radio">
                          <input type="radio" class="custom-control-input" name="rdGroup1" id="rd2"> <label
                            class="custom-control-label" for="rd2">PADEM</label>
                        </div>
                        <div class="custom-control custom-control-inline custom-radio">
                          <input type="radio" class="custom-control-input" name="rdGroup1" id="rd3" checked> <label
                            class="custom-control-label" for="rd3">Autres</label>
                        </div>
                      </div>
                      <div id="floating-label" class="card">
                        <div class="card-body">
                          <form>
                            <fieldset>
                              <legend>Localisation</legend> 
                              <div class="form-group">
                                <div class="form-label-group">
                                  <input type="text" class="form-control" id="fl1" value="" placeholder="Email address"
                                    required=""> <label for="fl1">Etablissement</label>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="form-label-group">
                                  <select class="custom-select" id="fls1" required="">
                                    <option value=""> Selectionner... </option>
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
                                  </select> <label for="fls1">Provinces</label>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="form-group">
                                  <label for="tf6">Adresses</label>
                                  <textarea class="form-control" id="tf6" rows="3"></textarea>
                                </div>
                              </div> 
                            </fieldset>
                          </form>
                        </div>
                        <div class="card-body border-top">
                          <form>
                            <fieldset>
                              <legend>Coordonnées de l'établisseùent</legend> 
                              <div class="form-group">
                                <div class="form-label-group">
                                  <input type="number" class="form-control" id="fl2" placeholder="" required=""> <label
                                    for="fl2">Télephone de l'Etablissement</label>
                                </div>
                              </div>
                              <div class="form-group">
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                      <div class="form-actions">
                        <button class="btn btn-primary" type="submit">Soumettre</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
            <footer class="app-footer">
              <div class="copyright">© 2025 Beyin LazQuir.</div>
            </footer>
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
              <a href="#base-style" class="nav-link smooth-scroll">Système éducatif</a> 
              <a href="#labels" class="nav-link smooth-scroll">Domaine</a> 
              <a href="#floating-label" class="nav-link smooth-scroll">Fiche proprement dite</a>
              <a href="#selects" class="nav-link smooth-scroll">Avis</a> 
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

<style scoped>

</style>
