<template>
  <div id="gallery" class="my-6 py-6 md:my-8 md:py-8">
    <div class="text-900 font-bold text-5xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-8 text-center line-height-3">Choose a plan that works best for you and your team.</div>

    <div class="grid grid-nogutter justify-content-center mt-8">
      <div class="col-12 lg:col-6 xl:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-6 h-full flex flex-column surface-card" :style="{ borderRadius: '6px' }">
            <span class="text-900 block font-medium text-xl mb-2 text-center">Basic Licence</span>
            <span class="font-bold block text-2xl text-900 text-center">$29</span>

            <ul class="list-none p-0 m-0 flex-grow-1 mt-6">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Up to 10 Active Users</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Up to 30 Project Integrations</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Analytics Module</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-times text-red-500 mr-2"></i>
                <span>Finance Module</span>
              </li>
            </ul>

            <Button label="Choose Plan" class="px-5 w-full mt-6 p-button-outlined" icon="pi pi-arrow-right" iconPos="right"></Button>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-6 xl:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-6 h-full flex flex-column surface-card" :style="{ borderRadius: '6px' }">
            <span class="text-900 block font-medium text-xl mb-2 text-center">Extended Licence</span>
            <span class="font-bold block text-2xl text-900 text-center">$49</span>

            <ul class="list-none p-0 m-0 flex-grow-1 mt-6">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Up to 10 Active Users</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Up to 30 Project Integrations</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>Analytics Module</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-times text-red-500 mr-2"></i>
                <span>Finance Module</span>
              </li>
            </ul>

            <Button label="Choose Plan" class="px-5 w-full mt-6 p-button-outlined" icon="pi pi-arrow-right" iconPos="right"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
