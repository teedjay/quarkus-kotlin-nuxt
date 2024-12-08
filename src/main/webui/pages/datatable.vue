<script setup lang="ts">

    const users = useState('users')

    await callOnce(async () => {
        users.value = await $fetch('/bff/users', { baseURL: '/' })
    })

</script>

<template>

    <div>

        <h1>Testing PrimeVue DataTable</h1>

        <DataTable :value="users" showGridlines stripedRows tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="age" header="Age"></Column>
        </DataTable>

    </div>

</template>
