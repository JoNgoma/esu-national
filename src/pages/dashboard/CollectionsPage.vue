<template>
<main class="app-main">
        <div class="wrapper">
          <div class="page">
            <div class="page-inner">
              <header class="page-title-bar">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active">
                      <router-link to="/"><i class="breadcrumb-icon fa fa-angle-left mr-2"></i>Dashboard</router-link>
                    </li>
                  </ol>
                </nav>
                <div class="d-md-flex align-items-md-start">
                  <h1 class="page-title mr-sm-auto">Collections</h1>
                  <div class="btn-toolbar">
                    <button type="button" class="btn btn-light"><i class="oi oi-data-transfer-download"></i> <span class="ml-1">Exporter</span></button>
                    </div>
                  </div>
              </header>

              <div class="page-section">
                <div class="card card-fluid">
                  <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active show" data-toggle="tab" href="#tab1">All</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab2">Offline</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <div class="input-group input-group-alt">
                        <div class="input-group-prepend">
                          <select class="custom-select">
                            <option selected>Filtrer par</option>
                            <option value="1"> Tags </option>
                            <option value="2"> Vendor </option>
                            <option value="3"> Variants </option>
                            <option value="4"> Prices </option>
                            <option value="5"> Sales </option>
                          </select>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><span class="oi oi-magnifying-glass"></span></span>
                          </div><input type="text" class="form-control" placeholder="Search record">
                        </div>
                      </div>
                    </div>
                    <div class="text-muted"> Showing 1 to 10 of 1,000 entries </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th colspan="2" style="min-width:320px">
                              <div class="thead-dd dropdown">
                                <span class="custom-control custom-control-nolabel custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-handle"> <label class="custom-control-label" for="check-handle"></label></span>
                                <div class="thead-btn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <span class="fa fa-caret-down"></span>
                                </div>
                                <div class="dropdown-menu">
                                  <div class="dropdown-arrow"></div><a class="dropdown-item" href="#">Select all</a> <a class="dropdown-item" href="#">Unselect all</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Bulk remove</a> <a class="dropdown-item" href="#">Bulk edit</a> <a class="dropdown-item" href="#">Separate actions</a>
                                </div>
                              </div>
                            </th>
                            <th> Inventory </th>
                            <th> Variants </th>
                            <th> Prices </th>
                            <th> Sales </th>
                            <th style="width:100px; min-width:100px;"> &nbsp; </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p3"> <label class="custom-control-label" for="p3"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-1.jpg" alt="Card image cap"></a> <a href="#">Tomato - Green</a>
                            </td>
                            <td class="align-middle"> 329 </td>
                            <td class="align-middle"> 4 </td>
                            <td class="align-middle"> $31.70 </td>
                            <td class="align-middle"> 796 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p4"> <label class="custom-control-label" for="p4"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-3.jpg" alt="Card image cap"></a> <a href="#">Quiche Assorted</a>
                            </td>
                            <td class="align-middle"> 169 </td>
                            <td class="align-middle"> 1 </td>
                            <td class="align-middle"> $34.41 </td>
                            <td class="align-middle"> 1824 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p5"> <label class="custom-control-label" for="p5"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-5.jpg" alt="Card image cap"></a> <a href="#">Cookies Oatmeal Raisin</a>
                            </td>
                            <td class="align-middle"> 155 </td>
                            <td class="align-middle"> 2 </td>
                            <td class="align-middle"> $39.26 </td>
                            <td class="align-middle"> 366 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p6"> <label class="custom-control-label" for="p6"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-7.jpg" alt="Card image cap"></a> <a href="#">Lemonade - Mandarin, 591 Ml</a>
                            </td>
                            <td class="align-middle"> 391 </td>
                            <td class="align-middle"> 3 </td>
                            <td class="align-middle"> $34.03 </td>
                            <td class="align-middle"> 921 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p7"> <label class="custom-control-label" for="p7"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-2.jpg" alt="Card image cap"></a> <a href="#">Sour Puss - Tangerine</a>
                            </td>
                            <td class="align-middle"> 368 </td>
                            <td class="align-middle"> 4 </td>
                            <td class="align-middle"> $32.68 </td>
                            <td class="align-middle"> 1216 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p8"> <label class="custom-control-label" for="p8"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-6.jpg" alt="Card image cap"></a> <a href="#">Scallops - 20/30</a>
                            </td>
                            <td class="align-middle"> 345 </td>
                            <td class="align-middle"> 4 </td>
                            <td class="align-middle"> $29.34 </td>
                            <td class="align-middle"> 883 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p9"> <label class="custom-control-label" for="p9"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-4.jpg" alt="Card image cap"></a> <a href="#">Skirt - 29 Foot</a>
                            </td>
                            <td class="align-middle"> 432 </td>
                            <td class="align-middle"> 3 </td>
                            <td class="align-middle"> $23.50 </td>
                            <td class="align-middle"> 854 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p10"> <label class="custom-control-label" for="p10"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-8.jpg" alt="Card image cap"></a> <a href="#">Tea - Grapefruit Green Tea</a>
                            </td>
                            <td class="align-middle"> 461 </td>
                            <td class="align-middle"> 6 </td>
                            <td class="align-middle"> $29.09 </td>
                            <td class="align-middle"> 1694 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p11"> <label class="custom-control-label" for="p11"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-6.jpg" alt="Card image cap"></a> <a href="#">Pecan Raisin - Tarts</a>
                            </td>
                            <td class="align-middle"> 235 </td>
                            <td class="align-middle"> 1 </td>
                            <td class="align-middle"> $31.28 </td>
                            <td class="align-middle"> 353 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle col-checker">
                              <div class="custom-control custom-control-nolabel custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="selectedRow[]" id="p12"> <label class="custom-control-label" for="p12"></label>
                              </div>
                            </td>
                            <td>
                              <a href="#" class="tile tile-img mr-1"><img class="img-fluid" src="/assets/images/dummy/img-5.jpg" alt="Card image cap"></a> <a href="#">Wine - Chateau Bonnet</a>
                            </td>
                            <td class="align-middle"> 113 </td>
                            <td class="align-middle"> 2 </td>
                            <td class="align-middle"> $22.38 </td>
                            <td class="align-middle"> 1281 </td>
                            <td class="align-middle text-right">
                              <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="fa fa-pencil-alt"></i> <span class="sr-only">Edit</span></a> <a href="#" class="btn btn-sm btn-icon btn-secondary"><i class="far fa-trash-alt"></i> <span class="sr-only">Remove</span></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul class="pagination justify-content-center mt-4">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1"><i class="fa fa-lg fa-angle-left"></i></a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">...</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">13</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">14</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">15</a>
                      </li>
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">...</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">24</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"><i class="fa fa-lg fa-angle-right"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
