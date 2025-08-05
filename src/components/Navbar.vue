<script setup>
import logo from '../assets/logo.png'
import { RouterLink } from 'vue-router';
</script>

<template>

    <nav class="bg-emerald-700 border-b border-inbg-emerald-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                        <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" />
                        <span class="hidden md:block text-white text-2xl font-bold ml-2">TODO Tasky</span>
                    </RouterLink>

                    <div class="md:ml-auto">
                        <div class="flex space-x-2">

                            <RouterLink to="/"
                                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :class="{
                                    'bg-emerald-900 text-white': $route.path === '/',
                                    'text-white hover:bg-emerald-900 hover:text-white': $route.path !== '/',
                                }">
                                Home</RouterLink>

                            <RouterLink to="/listings"
                                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :class="{
                                    'bg-emerald-900 text-white': $route.path === '/listings',
                                    'text-white hover:bg-emerald-900 hover:text-white': $route.path !== '/listings',
                                }">Tasks</RouterLink>

                            <RouterLink to="/add-tasks"
                                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :class="{
                                    'bg-emerald-900 text-white': $route.path === '/add-tasks',
                                    'text-white hover:bg-emerald-900 hover:text-white': $route.path !== '/',
                                }">Add Tasks
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>