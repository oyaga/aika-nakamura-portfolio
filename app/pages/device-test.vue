<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Device Detection Test</h1>
    
    <div class="space-y-2">
      <p><strong>isMobile:</strong> {{ device.isMobile }}</p>
      <p><strong>isTablet:</strong> {{ device.isTablet }}</p>
      <p><strong>isDesktop:</strong> {{ device.isDesktop }}</p>
      <p><strong>isMobileOrTablet:</strong> {{ device.isMobileOrTablet }}</p>
      <p><strong>isAndroid:</strong> {{ device.isAndroid }}</p>
      <p><strong>isIos:</strong> {{ device.isIos }}</p>
      <p><strong>userAgent:</strong> {{ device.userAgent }}</p>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Component Test:</h2>
      
      <!-- Mobile Component -->
      <div v-if="device.isMobile" class="p-4 bg-green-100 border border-green-400 rounded">
        <h3 class="font-bold text-green-800">Mobile Component Loaded! 📱</h3>
        <p class="text-green-700">This is the mobile version of the component.</p>
      </div>
      
      <!-- Desktop Component -->
      <div v-else class="p-4 bg-blue-100 border border-blue-400 rounded">
        <h3 class="font-bold text-blue-800">Desktop Component Loaded! 🖥️</h3>
        <p class="text-blue-700">This is the desktop version of the component.</p>
      </div>
    </div>

    <div class="mt-8">
      <a href="/" class="text-blue-500 underline">← Voltar para Home</a>
    </div>
  </div>
</template>

<script setup>
// Device detection
const device = useDevice()

useHead({
  title: 'Device Detection Test'
})
</script>