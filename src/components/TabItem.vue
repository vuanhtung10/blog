<template>
  <div class="max-w-[1200px] mx-auto md:pt-[108px] md:mb-[100px]">
    <div class="md:grid md:grid-cols-4 relative">
      <div v-for="(item, index) in listItemGroup" :key="`listGroup${index}`" 
          @click="typeShow = item.value"
          class="rounded-t-[25px] rounded-b-[25px] md:rounded-b-none p-[10px] md:p-8 hover:bg-primary bg-primary md:bg-transparent mt-[10px] md:mt-0 cursor-pointer"
          :class="{ active: typeShow === item.value }"
      >
        <div class="rounded-[10px] shadow-sm bg-white flex md:flex-col justify-between md:justify-center pb-[17px] md:pb-0 pl-[30px] md:pl-0 pt-[13px] md:pt-[23px] md:pb-[23px] pr-7 md:pr-0">
          <div class="flex md:block">
            <div class="rounded-full bg-primary w-[50px] md:w-14 h-[50px] md:h-14 p-[11px] md:mx-auto">
              <img class="w-[27px] md:w-9 h-[27px] md:h-9" :src="item.src" />
            </div>
            <p class="text-[21px] font-bold text-center ml-5 md:ml-0 my-auto md:mt-1">{{ item.name }}</p>
          </div> 
            <img class="block md:hidden" src="../assets/icon/ep_arrow-down-bold.svg" />
        </div>
        <tab-child v-if="typeShow === 'pencil' && typeShow === item.value" class="block md:hidden" />
        <div v-if="typeShow === 'markers' && typeShow === item.value" class="block md:hidden bg-primary min-h-[717px] bg-primary">Markers</div>
        <div v-if="typeShow === 'drawing-colors' && typeShow === item.value" class="block md:hidden bg-primary min-h-[717px] bg-primary">Drawing Colors</div>
        <div v-if="typeShow === 'notebooks' && typeShow === item.value" class="block md:hidden bg-primary min-h-[717px] bg-primary">Notebooks</div>
      </div>
    </div>
    <tab-child v-if="typeShow === 'pencil'" class="hidden md:block" />
    <div v-if="typeShow === 'markers'" class="hidden md:block min-h-[500px] bg-primary">Markers</div>
    <div v-if="typeShow === 'drawing-colors'" class="hidden md:block min-h-[500px] bg-primary">Drawing Colors</div>
    <div v-if="typeShow === 'notebooks'" class="hidden md:block min-h-[500px] bg-primary">Notebooks</div>
  </div>
</template>
<script>
export default {
  components: {
    TabChild: () => import('./TabChild'),
  },
  data() {
    return {
      typeShow: 'pencil',
      listItemGroup: [
        { 
          src: require('../assets/icon/bi_pencil-fill.svg'),
          name: 'Pencil',
          value: 'pencil'
        },
        { 
          src: require('../assets/icon/mdi_marker.svg'),
          name: 'Markers',
          value: 'markers'
        },
        { 
          src: require('../assets/icon/eva_color-palette-fill.svg'),
          name: 'Drawing Colors',
          value: 'drawing-colors'
        },
        { 
          src: require('../assets/icon/tabler_notebook.svg'),
          name: 'Notebooks',
          value: 'notebooks'
        },
      ],
    }
  }
} 
</script>
<style>
.active{
  background-color: #f4f4f4;
}
</style>