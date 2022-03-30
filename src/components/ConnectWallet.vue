<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { 
    getAddress,
    getNativeCoinBalance,
    onAccountAvailable,
    bootstrap,
    coinConvert
} from '@stakeordie/griptape.js';
import type { EventCallback } from "@stakeordie/griptape.js";
import { bech32, copyToClipboard } from "@/utils"

const address = ref<string | undefined>();
const balance = ref<string | number>(0);
const loading = ref<boolean>(false);
const isConnected = ref<boolean>(false);

async function connect() {
    await bootstrap();
}
async function getBalance() {
    loading.value = true;
    const result = await getNativeCoinBalance();
    address.value = getAddress();
    balance.value = result;
    loading.value = false;
}

let stopListen: EventCallback | undefined;

onMounted(() => {
    stopListen = onAccountAvailable(()=> {
        console.log('account available');
        isConnected.value = true;
        getBalance();
        getAddress();
    })
});

onUnmounted(() => {
    if (stopListen) stopListen();
    isConnected.value = false;
});

</script>

<template>
    <div>
        <span v-if="loading">Loading...</span>
        <button v-else-if="!isConnected" @click="connect">Connect</button>
        <p v-else-if="isConnected">SCRT Balance: {{ coinConvert(balance, 6, 'human', 2)}}<br>
        <span class="address" @click="copyToClipboard(address as string)">{{ bech32(address as string) }}</span>
        </p>
    </div>
</template>

<style scoped>
.address {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.address:hover {
    background-color: hsla(160, 100%, 37%, 0.2)
}

</style>