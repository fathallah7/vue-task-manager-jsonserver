<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const task = ref({
    title: '',
    type: '',
});

const getTask = async () => {
    try {
        const response = await axios.get(`/api/lists/${route.params.id}`);
        task.value = response.data;
    } catch (error) {
        console.error("Error fetching task", error);
    }
};

const updateTask = async () => {
    try {
        await axios.put(`/api/lists/${route.params.id}`, task.value);
        router.push({ name: 'allTasks', query: { updated: 'true' } });
    } catch (error) {
        console.error("Error updating task", error);
    }
};

onMounted(getTask);
</script>

<template>
    <div class="max-w-md mx-auto mt-20">
        <h2 class="text-2xl font-bold mb-6 text-center">Edit Task</h2>
        <form @submit.prevent="updateTask" class="space-y-4">
            <div>
                <label class="block mb-1 font-semibold">Title</label>
                <input v-model="task.title" type="text" class="w-full border rounded px-3 py-2" />
            </div>
            <div>
                <label class="block mb-1 font-semibold">Type</label>
                <input v-model="task.type" type="text" class="w-full border rounded px-3 py-2" />
            </div>
            <div class="text-center">
                <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Update Task
                </button>
            </div>
        </form>
    </div>
</template>
