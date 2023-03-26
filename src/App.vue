<template>
  <div class="max-w-[1200px] mx-auto">
    <tabs-slider />
    <gallery-image />
  </div>
</template>
<script>
export default {
  components: {
    TabsSlider: () => import('./components/TabsSlider'),
    GalleryImage: () => import('./components/GalleryImage'),
  },
}
</script>