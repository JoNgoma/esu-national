<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="position-relative pb-5 bg-light">
      <div class="sticker">
        <div class="sticker-item sticker-top-right sticker-soften">
          <img src="/assets/images/decoration/cubes.svg" alt="" data-aos="zoom-in">
        </div>
        <div class="sticker-item sticker-bottom-left sticker-soften scale-150">
          <img src="/assets/images/decoration/cubes.svg" alt="" data-aos="zoom-in">
        </div>
      </div>
      <div class="container position-relative">
        <h2 class="text-center text-sm-left">Provinces</h2>
        <p class="lead text-muted text-center text-sm-left mb-5">L'ESU dans nos localités</p>

        <div class="card-deck-lg">

          <div class="card shadow" data-aos="fade-up" data-aos-delay="0">

            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/rocket.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> Ready-to-go </h5>
                  <p class="text-muted font-size-lg"> Provides a tons of useful Components and Pages that allow you to
                    focus on your application logic rather than re-touching pixels. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/setting.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> Highly functionality </h5>
                  <p class="text-muted font-size-lg"> Looper is not 1001 in 1 shit theme, there's not an obscene amount
                    of wasted space, and we are carefully in adding useful features without going overboard. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck-lg">
          <div class="card shadow" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/brain.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> Boost your creativity </h5>
                  <p class="text-muted font-size-lg"> The design is clean, simple, modern, and essential, with Lots of
                    refined graphics and tons of 3rd party support. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/horse.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> Simple workflow </h5>
                  <p class="text-muted font-size-lg"> We make sure you can make a magic by running just two command. It
                    was very easy, extremely powerful, and modern. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck-lg">
          <div class="card shadow" data-aos="fade-up" data-aos-delay="400">
            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/savings.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> One time payment </h5>
                  <p class="text-muted font-size-lg"> After you make a purchase you will get a free update forever. We
                    will make Looper better and better again for you. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow" data-aos="fade-up" data-aos-delay="500">
            <div class="card-body p-4">
              <div class="d-sm-flex align-items-start text-center text-sm-left">
                <img src="/assets/images/illustration/document.svg" class="mr-sm-4 mb-3 mb-sm-0" alt="" width="72">
                <div class="flex-fill">
                  <h5 class="mt-0"> Well Documented </h5>
                  <p class="text-muted font-size-lg"> Each component is well explained with example, code block and best
                    practices. We also provide extensive information about customizing Looper. </p>
                </div>
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
