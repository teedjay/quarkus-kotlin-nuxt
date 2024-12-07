<script setup lang="ts">

    const users = useState('users')

    // Create a fetch object with a baseURL already setup
    // const fetchFromBackend = $fetch.create({ baseURL: '/bff' })
    // await callOnce(async () => {
    //     users.value = await fetchFromBackend("/users")
    // })

    await callOnce(async () => {
        users.value = await $fetch('/bff/users', { baseURL: '/' })
    })

</script>

<template>

    <div>

        <h1>Testing PrimeVue DataTable</h1>

        <DataTable :value="users" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="age" header="Age"></Column>
        </DataTable>

    </div>

</template>
