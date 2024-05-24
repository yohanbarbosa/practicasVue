<script setup>
import {ref} from 'vue';
const checked = ref(true);

const users = ["ford","jeep","honda", "subaru","aston martin"];

</script>
<!-- directivas: propiedades de un elemento -->

<template>

<!-- <div class="flex">
    <div class="mx-auto">
        <ul>
            <li v-for="(user,i) in users" :key="i++" >{{i}} {{user}}</li>
        </ul>
    </div>
</div> -->



<div class="space-y-5">
    <input type="checkbox" id="check" v-model="checked" class="mr-3" ><label for="check">aceptar</label>
<div 
class="bg-blue-500 text-white rounded px-2 w-44 mx-auto text-center py-5"
:class="{'bg-green-500  font-semibold':checked }"

>{{checked}}
</div>
</div>


<div v-show="checked" >
    mensaje para ocultar
</div>

<div v-if="checked" >
    mensaje para ocultar
</div>

<div v-else >
    no se cumplio la condicion del if
</div>
</template> 