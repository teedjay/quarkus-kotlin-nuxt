<script setup lang="ts">

    // we want primeicons and primeflex to be available globally
    import 'primeicons/primeicons.css'
    import 'primeflex/primeflex.css'

    import { PrimeIcons } from '@primevue/core/api';

    // the "route" linking is done with vue-router, as explained https://primevue.org/menubar/
    import { ref } from "vue";
    const items = ref([
        {
            label: 'Home',
            icon: PrimeIcons.HOME,
            route: "/"
        },
        {
            label: 'Features',
            icon: PrimeIcons.STAR,
        },
        {
            label: 'Demos',
            icon: PrimeIcons.PALETTE,
            items: [
                {
                    label: 'DataTable',
                    icon: PrimeIcons.USER,
                    route: '/datatable'
                },
                {
                    label: 'Icons',
                    icon: PrimeIcons.BRIEFCASE,
                    route: '/icons'
                },
                {
                    label: 'Forms',
                    icon: PrimeIcons.PENCIL,
                    route: '/forms'
                },
            ]
        },
        {
            label: 'Search',
            icon: PrimeIcons.SEARCH,
            url: 'https://www.google.com',
            target: '_blank'
        }
    ]);

</script>

<template>
    <NuxtRouteAnnouncer/>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
        </template>
    </Menubar>
    <NuxtPage/>
</template>
