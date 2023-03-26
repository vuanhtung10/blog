<template>
  <div class="maw-w-[1200px] mx-auto mt-[60px] md:mt-[100px]">
    <swiper
      :options="swiperOptions"
      class="swiper-custom"
    >
      <swiper-slide>
        <gallery-item />
      </swiper-slide>
      <swiper-slide>
        <gallery-item />
      </swiper-slide>
      <swiper-slide>
        <gallery-item />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css'
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  export default {
    components: {
      Swiper,
      SwiperSlide,
      GalleryItem: () => import('./GalleryItem'),
    },
    data(){
      return {
        swiperOptions: {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        pagination: { clickable: true, el: '.swiper-pagination' },
      },
      }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>
