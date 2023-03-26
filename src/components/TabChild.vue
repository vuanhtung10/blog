<template>
  <div 
      class="block md:flex bg-primary py-10 px-2 md:px-[50px] rounded-b-[25px]"
  >
    <div class="max-w-[350px] mr-0 md:mr-[38px] mb-[27px] md:mb-0">
      <p class=" text-base md:text-[21px] leading-8 mb-5">Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.</p>
      <ul class="grid grid-cols-2 gap-0 md:grid-cols-1 font-semibold text-[13px] md:text-lg list-disc leading-8 md:leading-10 list-inside">
          <li>MECHANICAL PENCILS</li>
          <li>ARCHITECT'S CHOICE</li>
          <li>EXECUTIVE PENCILS</li>
          <li>ENGRAVABLE PENCILS</li>
      </ul>
      <div class="hidden md:block text-white text-base rounded bg-secondary py-[5px] px-[25px] w-fit mt-9">SHOP ALL</div>
    </div>
      <div class="flex-1">
      <div class="rounded-2xl flex items-center border border-white mb-8 md:mb-5">
        <div class="md:bg-white flex text-secondary text-center text-4xl font-bold pt-[19px] md:pt-[13px] pb-[17px] md:pb-[13px] pl-6 md:pl-10 pr-2 md:pr-7 mr-4 md:mr-7 rounded-l-[18px]">25% 
          <span class="text-4xl hidden md:block text-center my-auto ml-2">off</span>
          <span class="text-lg block md:hidden text-center">OFF</span>
        </div>
        <span class="font-light flex-1 text-base md:text-[25px]">Offer Applicable on All Our Pencils</span>
      </div>
      <div class="flex md:grid grid-cols-2 md:grid-cols-3 gap-[18px] md:gap-5 overflow-auto">
        <div v-for="(item, index) in listProduct" :key="`listProduct${index}`" 
          class="bg-white rounded-[18px] px-[15.7px] md:px-[22px] pt-[10px] pb-[34px] hover:border hover:border-black w-[calc(50%-9px)] md:w-auto shrink-0">
          <div class="relative" style="padding-top: 116.666%">
            <img class="w-full h-full object-cover inset-0 absolute" :src="item.image" />
          </div>
          <p class="text-[13px] md:text-sm font-medium mb-[7px] text-center">{{ item.name }}</p>
          <div class="flex items-center justify-center">
            <p class="text-base font-semibold mr-[11px]">{{ item.price }}</p>
            <p class="text-[#727272] text-sm line-through">{{ item.offPrice }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block md:hidden text-white text-base leading-10 rounded bg-secondary w-fit px-[17px] mt-10 mb-15 mx-auto flex justify-center items-center">SHOP ALL</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listProduct: [
        { 
          image: require('../assets/images/pen-img11-1.jpg'),
          name: 'Aero Mechanical Pencil',
          price: '$99.00',
          offPrice: '$125.00'
        },
        { 
          image: require('../assets/images/pen-img11-2.jpg'),
          name: 'Castell Mechanical Pencil',
          price: '$75.00',
          offPrice: '$99.00'
        },
        { 
          image: require('../assets/images/pencil-img11-2.jpg'),
          name: 'Architect Choice Pencil',
          price: '$45.00',
          offPrice: '$70.00'
        },
      ],
    }
  }
}
</script>