<script setup lang="ts">

import { ref } from "vue";
import { PrimeIcons } from '@primevue/core/api';

const items = ref([
    {
        label: 'Home',
        icon: PrimeIcons.HOME
    },
    {
        label: 'Features',
        icon: PrimeIcons.STAR
    },
    {
        label: 'Configuration',
        icon: PrimeIcons.PALETTE,
        items: [
            {
                label: 'Profile',
                icon: PrimeIcons.USER
            },
            {
                label: 'Settings',
                icon: PrimeIcons.BRIEFCASE
            },
            {
                label: 'UI Kit',
                icon: PrimeIcons.PENCIL
            },
        ]
    },
    {
        label: 'Search',
        icon: PrimeIcons.SEARCH,
    }
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items" />

        <h2>Icons in different sizes</h2>
        <ul>
            <li><i class="pi pi-check" style="font-size: 1rem"></i></li>
            <li><i class="pi pi-times" style="font-size: 1.5rem"></i></li>
            <li><i class="pi pi-search" style="font-size: 2rem"></i></li>
            <li><i class="pi pi-user" style="font-size: 2.5rem"></i></li>
        </ul>
    </div>
</template>

<style scoped>

</style>
