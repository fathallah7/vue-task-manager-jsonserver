<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue';


const deleteTask  = async (id) => {
    try {
        const confirm = window.confirm('Are you sure you want to delete this Task?');
        if (confirm) {
            await axios.delete(`/api/lists/${id}`);
        }
    } catch (error) {
        console.error('Error deleting job', error);
    }
};


const lists = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('/api/lists');
        lists.value = response.data;
    } catch (error) {
        console.log('Error Fetching Data', error)
    }
})


</script>

<template>

    <div class="text-center my-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Your Tasks</h2>
        <p class="mt-2 text-lg text-gray-500">Manage your tasks easily with a click.</p>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mb-20 ">


        <table class="w-full table-fixed text-sm text-gray-700 md:table">
            <thead class="bg-emerald-700 border-b border-gray-300">
                <tr class="uppercase text-xs tracking-wider text-white">
                    <th class="py-3 px-4 text-left">Title</th>
                    <th class="py-3 px-4 text-left">Type</th>
                    <th class="py-3 px-4 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="list in lists" :key="list.id"
                    class="border-b border-gray-200 hover:scale-110 transition duration-300">
                    <td class="py-3 px-4">{{ list.title }}</td>
                    <td class="py-3 px-4">{{ list.type }}</td>
                    <td class="py-3 px-4 text-center">
                        <div class="flex justify-center space-x-2">

                            <button type="submit" @click="deleteTask(list.id)"
                                class="px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 transition text-xs">
                                Delete
                            </button>

                            <button type="submit"
                                class="px-3 py-1 border border-green-600 text-green-600 rounded hover:bg-green-100 transition text-xs">
                                Update
                            </button>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>



</template>