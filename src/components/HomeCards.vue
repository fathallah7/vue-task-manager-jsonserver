<script setup>

import { RouterLink } from 'vue-router';
</script>

<template>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="text-center mb-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">What would you like to do?</h2>
            <p class="mt-2 text-lg text-gray-500">Manage your tasks easily with a click.</p>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center gap-6">
            <RouterLink to="/add-tasks"
                class="w-full md:w-auto inline-block text-center px-8 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-xl shadow hover:bg-emerald-500 transition">
                Add New Task
            </RouterLink>
        </div>
    </section>


</template>