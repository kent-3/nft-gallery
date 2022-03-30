<script setup lang="ts">
import ConnectWallet from '@/components/ConnectWallet.vue';
import TheNFTs from '../components/TheNFTs.vue';

</script>

<template>
  <div class="gallery">
    <div class="wallet">
      <ConnectWallet/>
    </div>
    <div class="inputs">
      <TheNFTs/>
    </div>

  </div>
</template>

<style>
.wallet {
  text-align: center;
  top: 1rem;
  display: none;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 8px;
  padding: 0.5rem;
}
.inputs {
  text-align: center;
  display: block;
  top: 2rem;
}

@media (min-width: 1024px) {
  .gallery {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .wallet {
    position: absolute;
    display: block;
    top: 1rem;
    right: 1rem;
    text-align: left;
  }
  .inputs {
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-align: left;
  }
}
</style>
