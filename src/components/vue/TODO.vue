<script setup>
    import {ref} from 'vue';
    const todo = ref('');
    const list = ref([]);

    function add(){
        list.value.unshift(todo.value);
        console.log(list);
        todo.value = "";
    }

</script>

<template>
    <div class="flex items-center justify-center w-full h-screen">

        <div class=" py-6 px-5 rounded shadow bg-slate-200 w-96">
            <div class="">
                <input v-model="todo" type="text" class="w-4/5  outline-none rounded px-2 py-1" >
                <button @click="add"
                 class="w-1/5 bg-green-600 text-white text-center py-1">+</button>

            </div>
            <div class="mt-3">
                <div v-for="(todo,i) in list" :key="i++"
                 class=" mt-1 bg-orange-300 rounded px-2"
                 > {{todo}}</div>
            </div>
        </div>
    </div>
    </template>