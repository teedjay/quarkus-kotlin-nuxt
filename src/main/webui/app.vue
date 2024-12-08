<script setup lang="ts">
    // we want primeicons and primeflex to be available globally
    import 'primeicons/primeicons.css'
    import 'primeflex/primeflex.css'
</script>
<template>
    <NuxtRouteAnnouncer/>
    <ul>
        <li><NuxtLink to="/">Start Page</NuxtLink></li>
        <li><NuxtLink to="/datatable">DataTable testing</NuxtLink></li>
        <li><NuxtLink to="/menu">Menu and Icon testing</NuxtLink></li>
        <li><NuxtLink to="/forms">Playing with form components</NuxtLink></li>
    </ul>
    <NuxtPage/>
</template>
