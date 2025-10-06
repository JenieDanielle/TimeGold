
<template>
    <div class="card">
        <div class="flex flex-wrap justify-center gap-2 mb-2">
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="secondary" style="min-width: 10rem" />
        </div>
       
        <Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex flex-col gap-2">
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" />
                    <label for="on_label">E-mail</label>
                </FloatLabel>
            </div>
            

            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" v-model="dados.email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

import { Button, FloatLabel } from "primevue";
import {Dialog} from "primevue";
import { InputText } from 'primevue';


const position = ref('center');
const visible = ref(false);
const dados = ref([]);

const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
}

</script>
