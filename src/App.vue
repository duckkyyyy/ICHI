<template>
  <div class="layout">
    <v-header/>
    <router-view/>
  </div>
</template>


<script setup>
  import VHeader from './components/VHeader.vue'

</script>


<style>
  html {
    margin: 0;
    padding: 0;
    background-color: #EAE6E0;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #EAE6E0;
  }
  @font-face {
    font-family: 'Akzidenz-Grotesk Pro';
    src: url('AkzidenzGroteskPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Feature Mono';
    src: url('FeatureMono-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Feature Mono';
    src: url('FeatureMono-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
  p {
    font-family: 'Akzidenz-Grotesk Pro';
    font-weight: normal;
    font-style: normal;
    margin: 0 auto;
  }
  span {
    font-family: 'Akzidenz-Grotesk Pro';
    font-weight: normal;
    font-style: normal;
  }
  h1, h2{
    font-family: 'Feature Mono';
    font-weight: 500;
    font-style: normal;
    margin: 0 auto;
    font-size: 40px;
  }
  h1{
    font-size: 60px;
    text-transform: uppercase;
  }
</style>
