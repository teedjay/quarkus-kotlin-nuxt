<script setup lang="ts">
    // we want primeicons to be available globally
    import 'primeicons/primeicons.css'
</script>
<template>
    <NuxtRouteAnnouncer/>
    <ul>
        <li><NuxtLink to="/">Start Page</NuxtLink></li>
        <li><NuxtLink to="/datatable">DataTable testing</NuxtLink></li>
        <li><NuxtLink to="/menu">Menu and Icon testing</NuxtLink></li>
    </ul>
    <NuxtPage/>
</template>
