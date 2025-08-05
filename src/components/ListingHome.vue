<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref, defineProps , onMounted } from 'vue';

defineProps({
    limit: Number,
})

const lists = ref([]);

onMounted(async() => {
    try { 
        const response = await axios.get('/api/lists');
        lists.value = response.data;
    } catch (error) {
        console.log('Error Fetching Data' , error)
    }
})

</script>

<template>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mb-14">

        <table class="w-full table-fixed text-sm text-gray-700 md:table">
            <thead class="bg-emerald-700 border-b border-gray-500">
                <tr class="uppercase text-sm text-white tracking-wider">
                    <th class="py-3 px-4 text-left">Title</th>
                    <th class="py-3 px-4 text-left">Type</th>
                    <th class="py-3 px-4 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="list in lists.slice(0, limit)" :key="list.id"
                    class="border-b border-gray-200 hover:scale-110 transition duration-300">
                    <td class="py-3 px-4">{{ list.title }}</td>
                    <td class="py-3 px-4">{{ list.type }}</td>
                    <td class="py-3 px-4 text-center">
                        <div class="flex justify-center space-x-2">
                            <form action="" method="POST" onsubmit="return confirm('Are you sure?')">
                                <button type="submit"
                                    class="px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-100 transition text-xs">
                                    Delete
                                </button>
                            </form>
                            <form action="" method=" POST" onsubmit="return confirm('Are you sure?')">
                                <button type="submit"
                                    class="px-3 py-1 border border-green-600 text-green-600 rounded hover:bg-green-100 transition text-xs">
                                    Update
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div
            class="mt-8 h-[36px] mx-auto bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-center text-sm it">
            <RouterLink to="/listings">
                Browse All Tasks
            </RouterLink>
        </div>

    </div>



</template>