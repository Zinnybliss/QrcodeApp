<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"
    >
      <img
        class="w-full h-96 md:h-auto object-cover md:w-50 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src="https://www.qrtag.net/api/qr_4.png?url=https://www.google.com"
        alt=""
      />
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h5 class="text-gray-900 text-xl font-medium mb-2">{{qr?.url}}</h5>
          <p class="text-gray-700 text-base mb-4">
            {{qr?.generatedUrl}}
          </p>
        </div>

        <p class="text-gray-600 text-xs mb-5">{{qr?.createdAt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['qr']
};
</script>

<style></style>
