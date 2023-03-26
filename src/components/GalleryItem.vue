<template>
  <div>
    <p class="font-bold text-[30px] md:text-[45px] text-center mb-10">Packer pen Gallery</p>
    <div class="hidden md:grid grid-flow-row-dense grid-cols-4 gap-[18px]">
      <div class="flex flex-col justify-center">
        <img class="mb-3" src="../assets/images/Rectangle 23.jpg" />
        <img src="../assets/images/Rectangle 25.jpg" />
      </div>
      <div class="col-span-2">
        <img class="mb-[13px] w-full" src="../assets/images/Rectangle 21.jpg" />
        <img class="w-full" src="../assets/images/Rectangle 24.jpg" />
      </div>
      <div class="flex flex-col justify-center">
        <img class="mb-3" src="../assets/images/Rectangle 26.jpg" />
        <img class="mb-3" src="../assets/images/Rectangle 27.jpg" />
        <img class="mb-3" src="../assets/images/Rectangle 28.jpg" />
      </div>
    </div>

    <!-- Mobile -->
    <div class="md:hidden">
      <div class="grid grid-cols-2 gap-[9.5px] mb-[9.5px]">
        <div>
          <img class="mb-[9.5px]" src="../assets/images/Rectangle 23.jpg" />
          <img src="../assets/images/Rectangle 25.jpg" />
        </div>
        <img class="h-full rounded-xl object-cover" src="../assets/images/Rectangle 21.jpg" />
      </div>
      <img class="mb-[9.5px]" src="../assets/images/Rectangle 24.jpg" />
      <img class="mb-[9.5px] w-full" src="../assets/images/Rectangle 26.jpg" />
      <div class="grid grid-cols-2 gap-[9.5px]">
        <img src="../assets/images/Rectangle 27.jpg" />
        <img class="h-full" src="../assets/images/Rectangle 28.jpg" />
      </div>
    </div>
  </div>
</template>