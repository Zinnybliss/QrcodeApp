<template>
  <div class="w-[200px] sm:w-full flex justify-center p-1">
    <div
      class="flex flex-col sm:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"
    >
      <img
        class="w-full h-[200px] sm:h-auto object-cover sm:w-50"
        src="https://www.qrtag.net/api/qr_4.png?url=https://www.google.com"
        alt=""
      />
      <div class="p-2 sm:p-6 flex flex-col justify-between">
        <div>
          <h5 class="text-gray-900 text-[16px] sm:text-xl font-medium mb-2">
            {{ qr?.url }}
          </h5>
          <p class="text-gray-700 text-[12px] sm:text-base mb-4">
            {{ qr?.generatedUrl }}
          </p>
        </div>

        <p class="text-gray-600 text-xs mb-5">
          {{ qr?.createdAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qr"],
};
</script>

<style></style>
