<script setup>
import { ref } from 'vue';

const notas = ["Nota1", "Nota2", "Nota3", "Nota4", "Nota5", "Nota6"];
const estado = ref(false);

function showActivar(dato) {

    if(dato === 1){
        estado.value = false;
    } else {
        estado.value = true;
    }
}
</script>

<template>
    <div class="w-full h-screen bg-slate-200 items-center flex">
        <div class="mx-auto w-2/4 border grid  gap-3 p-5 relative" 
        :class="estado ? 'grid-rows-6': 'grid-cols-3'"
        >
            <div class="flex space-x-1 w-20 h-20 absolute top-[-50px] right-6">
                <div class="cursor-pointer w-10 h-10 border border-black p-[2px] grid grid-cols-2" @click="showActivar(1)" :class="{'bg-[#caddd7]':!estado}" >
                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
                </div>
                <div class="cursor-pointer grid grid-rows-4 w-10 h-10 p-[2px] border border-black" @click="showActivar(0)" :class="{'bg-[#caddd7]':estado}">

                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
                <span class="border border-black w-full h-full" ></span>
            
                </div>
            </div>
            <div v-for="(nota, i) in notas" :key="i" class="bg-[#caddd7] w-full p-1 h-52" 
            :class="{'flex h-auto ':estado}"
            >
                <div class=" bg-white" :class="estado ? 'w-5 h-5 mr-4' :'w-full h-32' " ></div>
                <p>{{ nota }}</p>
            </div>
        </div>
    </div>
</template>
