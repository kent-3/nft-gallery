<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { 
    getAddress,
    createContractClient,
    refContract,
    snip721Def,
    snip721PermitDef,
    onAccountAvailable
} from '@stakeordie/griptape.js';
import type { EventCallback, Snip721Contract, Context } from "@stakeordie/griptape.js";

interface NFTContractInfo {
    name: string,
    symbol: string,
    numtokens?: number,
}

interface NFTInfo {
    name?: string,
    description?: string,
    image: string,
}

const NFTcontract = ref<string>();
const viewingKey = ref<string>();
const loading = ref<boolean>(false);
const tokens = ref<string>();
const userAddress = ref<string>();

const contractInfo = ref<NFTContractInfo>();
const nftInfo = ref<NFTInfo>();

function initContract() {
    userAddress.value = getAddress();
    // if (!userAddress.value) return alert('Keplr not connected');
    if (!NFTcontract.value) return alert('invalid address');
    const nftContractClient = createContractClient<Snip721Contract>({
        id: 'NFTcontract',
        at: NFTcontract.value as string,
        definition: snip721Def
    });
    getContractInfo();
    // getTokens(userAddress.value);
}
async function getContractInfo() {
    loading.value = true;
    const contract = refContract<Snip721Contract>('NFTcontract')
    const {contract_info: {name: nameResult, symbol: symbolResult}} = await contract.getContractInfo();
    const {num_tokens: {count: numtokensResult}} = await contract.getNumTokens()

    contractInfo.value = {name: nameResult, symbol: symbolResult, numtokens: numtokensResult}
    loading.value = false;
}

async function getTokens(address:string) {
    loading.value = true;
    const contract = refContract<Snip721Contract>('NFTcontract')
    const {token_list: { tokens: tokensResult } } = await contract.getTokens(address)
    tokens.value = tokensResult.join(", ");
    loading.value = false;
}

</script>

<template>
    <div class="form_wrapper">
    <form @submit.prevent="initContract">
        <input type="text" placeholder="Enter NFT Contract Address" v-model="NFTcontract" />
        <input type="text" placeholder="Enter your viewing key (optional)" v-model="viewingKey" />
        <button :disabled="loading">Submit</button>
    </form>
    </div>
    <h1 class="fade-in" v-if="loading">LOADING</h1>
    <div v-if="contractInfo">
        <h3>Token Name</h3>
        <p>{{ contractInfo.name }}</p>
        <h3>Token Symbol</h3>
        <p>{{ contractInfo.symbol }}</p>
        <h3>Total Number of Tokens</h3>
        <p>{{ contractInfo.numtokens }}</p>
        <h3>Token List</h3>
        <p v-if="userAddress">{{ tokens }}</p>
        <p v-else>No wallet connected</p>
    </div>

</template>

<style scoped>

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

form {
    display: grid;
    row-gap: 6px;
}

input {
    color: var(--color-text);
    background-color: var(--color-background);
    border: none;
    text-align: center;
}

input::placeholder {
    color: var(--color-text)
}
input:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}
input:focus {
    background-color: hsla(160, 100%, 37%, 0.2);
    outline: none;
}

.form_wrapper {
    border: 2px solid hsla(160, 100%, 37%, 1);
    border-radius: 8px;
    padding: 0.5rem;
    margin-block-end: 1em;
}

.fade-in {
  animation: fadeIn linear 1s infinite;
  -webkit-animation: fadeIn linear 1s infinite;
  -moz-animation: fadeIn linear 1s infinite;
  -o-animation: fadeIn linear 1s infinite;
  -ms-animation: fadeIn linear 1s infinite;
}


@media (min-width: 1024px) {
    form {
        width: 320px;
    }

    input {
        text-align: left;
    }
    .form_wrapper{
        width: max-content;
    }
}

@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity:1;}
  100% {opacity:0;}
}
</style>