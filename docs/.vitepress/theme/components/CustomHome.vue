<script setup lang="ts">
import HomeHero from 'vitepress/dist/client/theme-default/components/HomeHero.vue'
import HomeFeatures from 'vitepress/dist/client/theme-default/components/HomeFeatures.vue'
import HomeFooter from 'vitepress/dist/client/theme-default/components/HomeFooter.vue'
</script>

<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <div class="home-content">
      <slot />
    </div>
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
}
.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}

@media (max-width: 720px) {
  .home-content {
    max-width: 392px;
    padding: 0;
  }
}
</style>
