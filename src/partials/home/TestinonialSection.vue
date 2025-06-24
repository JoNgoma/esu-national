<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="position-relative py-5 bg-light">
      <div class="sticker">
        <div class="sticker-item sticker-bottom-left sticker-soften">
          <img src="/assets/images/decoration/bubble2.svg" alt="" data-aos="zoom-in" data-aos-delay="200">
        </div>
      </div>
      <div class="container position-relative mb-5">
        <h2 class="text-center">Nos partenaire</h2>
        <p class="text-center text-muted font-size-lg mb-5">Toujours aussi proche que possible</p><!-- .row -->
        <div class="row mb-6">
          <div class="col-12 col-md-8 offset-md-2 py-3">
            <div class="row justify-content-center text-center">
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="0">
                <img src="/assets/images/logo/airbnb.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="100">
                <img src="/assets/images/logo/amazon.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="200">
                <img src="/assets/images/logo/apple.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="300">
                <img src="/assets/images/logo/dropbox.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="400">
                <img src="/assets/images/logo/google.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="500">
                <img src="/assets/images/logo/linkedin.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="600">
                <img src="/assets/images/logo/paypal.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="700">
                <img src="/assets/images/logo/shopify.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="900">
                <img src="/assets/images/logo/sketch.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
              <div class="col-4 col-md-3 col-lg-2 mb-5" data-aos="fade-up" data-aos-delay="1000">
                <img src="/assets/images/logo/slack.svg" alt="" class="img-fluid" style="max-height: 32px">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
