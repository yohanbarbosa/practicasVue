<script setup>
import { ref } from "vue";


const validate = ref([
    { tema: true },
    { tema: true },
    { tema: true },
    { tema: true }
]);

const lista = [
    { title: "Correo 1", desc: "Texto del correo 1", time: "Hace 1 hora" },
    { title: "Correo 2", desc: "Texto del correo 2", time: "Hace 1 hora" },
    { title: "Correo 3", desc: "Texto del correo 3", time: "Hace 2 hora" },
    { title: "Correo 4", desc: "Texto del correo 4", time: "Ayer" }
];
</script>

<template>
    <div class="flex bg-gray-400 p-2 w-1/2" v-for="(tema, index) in lista" :key="index">
        <div class="flex bg-white border-2 rounded p-3 w-full" :class="{'border-blue-400' :validate[index].tema}">
            <div class=" my-auto w-1/6">
                <p>Log</p>
            </div>
            <div class="flex w-full">
                <div class="flex flex-col w-1/2">
                    <p class="font-bold bg-white m-4">
                        {{ tema.title }}
                    </p>
                    <p class=" bg-white m-4 -mt-5">
                        {{ tema.desc }}
                    </p>
                    <p class="text-xs text-gray-400 bg-white m-4 -mt-5">
                        {{ tema.time }}
                    </p>
                </div>
                <div @click="validate[index].tema = !validate[index].tema" class="flex cursor-pointer h-1/3 justify-end text-xs w-1/2 text-gray-400">
                    <p v-if="validate[index].tema">
                        Marcar como leído
                    </p>
                    <p v-else>Marcar como no leído</p>
                </div>
            </div>
        </div>
    </div>
</template>