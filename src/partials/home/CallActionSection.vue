<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="py-5 position-relative bg-light">
      <div class="sticker">
        <div class="sticker-item sticker-bottom-left w-100">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="120"
            viewbox="0 0 1440 240" preserveaspectratio="none">
            <path class="fill-black" fill-rule="evenodd"
              d="M1070.39 25.041c107.898 11.22 244.461 20.779 369.477 51.164L1440 240H0L.133 72.135C350.236-17.816 721.61-11.228 1070.391 25.04z">
            </path>
          </svg>
        </div>
      </div>
      <div class="container">
        <div class="card bg-success text-white position-relative overflow-hidden shadow rounded-lg p-4 mb-0"
          data-aos="fade-up">
          <div class="sticker">
            <div class="sticker-item sticker-middle-left">
              <img class="flip-y" src="/assets/images/decoration/bubble4.svg" alt="">
            </div>
          </div>
          <div class="card-body d-md-flex justify-content-between align-items-center text-center position-relative">
            <h3 class="font-weight-normal mb-3 mb-md-0 mr-md-3"> Avez-vous des préocupations? </h3><a
              class="btn btn-lg btn-primary shadow" href="https://goo.gl/forms/2jb1vgCKkg8sdqld2">Contact nous <i
                class="fa fa-angle-right ml-2"></i></a>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
