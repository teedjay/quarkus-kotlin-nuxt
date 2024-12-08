<template>


    <h1>Grid of 3</h1>
    <div class="grid">
        <div class="col" style="background-color: green">
            <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
        </div>
        <div class="col" style="background-color: yellow">
            <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
        </div>
        <div class="col" style="background-color: red">
            <div class="text-center p-3 border-round-sm bg-primary font-bold ">3</div>
        </div>
    </div>

    <h1>Animated input components</h1>
    <FloatLabel variant="in">
        <InputText id="in_label" v-model="value1" autocomplete="off"/>
        <label for="in_label">Nickname</label>
    </FloatLabel>

    <h1>Tune the knobs!</h1>
    <div class="grid">
        <div class="col">
            <Knob v-model="value2a"/>
        </div>
        <div class="col">
            <Knob v-model="value2b"/>
        </div>
        <div class="col">
            <Knob v-model="value2c"/>
        </div>
    </div>

    <h1>Edit some text below</h1>
    <Editor v-model="value3" editorStyle="height: 320px"/>

    <h1>Scary Skeletons</h1>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>

                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
</script>
