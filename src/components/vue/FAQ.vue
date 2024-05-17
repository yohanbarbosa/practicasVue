<script setup>
import { ref } from 'vue';
const showTheme1 = ref(false);
const selectedIndex = ref(0);
const texto = [
    { "titulo": "tema1", "texto": "texto del tema 1" },
    { "titulo": "tema2", "texto": "texto del tema 2" },
    { "titulo": "tema3", "texto": "texto del tema 3" },
    { "titulo": "tema4", "texto": "texto del tema 4" },
    { "titulo": "mateo", "texto": "es muy malo para jugar free" }
];



function showInfo(i) {
    if (i == selectedIndex.value) {
        selectedIndex.value = -1;
    } else {
        selectedIndex.value = i
    }

}
</script>

<template>
    <div class="w-full h-screen items-center flex ">
        <div class="bg-blue-500 p-2 w-60 m-auto ">
            <div v-for="(dato, i) in texto " :key="i" class="">
                <h1 @click="showInfo(i)"
                    class=" select-none hover:cursor-pointer bg-blue-400 text-white px-1 flex justify-between"
                    :class="{'bg-blue-600':selectedIndex == i}"
                    >
                    
                    {{ dato.titulo }}
                    <span class="">{{ selectedIndex == i ? '-' : '+' }}</span>
                </h1>

                <div v-show="selectedIndex == i" class="bg-blue-50/50 p-1 h-[150px] mt-2">
                    {{ dato.texto }}
                </div>
            </div>

        </div>

    </div>

</template>