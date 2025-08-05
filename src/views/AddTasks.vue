    <script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useToast } from 'vue-toastification';

    
    const toast = useToast();

    const form = ref({
        title: '',
        type: "Study",
        description: ''
    });

    const handleSubmit = async () => {

        const newTask = {
            title: form.value.title,
            type: form.value.type,
            description: form.value.description
        }

        try {
            await axios.post('/api/lists', newTask);
            toast.success("Task created successfully!");
        } catch (error) {
            console.error("EE", error)
            toast.error("Failed to create task. Please try again.");

        }
    };

</script>


    <template>

        <section class="bg-emerald-50">
            <div class="container m-auto max-w-3xl py-24">
                <div class="bg-emerald-50 px-6 py-8 mb-4 shadow-xl rounded-2xl border m-4 md:m-0">
                    <form @submit.prevent="handleSubmit">

                        <h2 class="text-3xl text-center font-semibold mb-6">Add Task</h2>

                        <div class="mb-4">
                            <label for="type" class="block text-gray-700 font-bold mb-2">Type</label>
                            <select v-model="form.type" id="type" name="type" class="border rounded w-full py-2 px-3"
                                >
                                <option value="Study">Study</option>
                                <option value="Reading">Reading</option>
                                <option value="Life">Life</option>
                                <option value="Development">Development</option>
                                <option value="Work">Work</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2">Title</label>
                            <input v-model="form.title" type="text" id="name" name="name"
                                class="border rounded w-full py-2 px-3 mb-2" placeholder="eg. Finish H.W"  />
                        </div>
                        <div class="mb-4">
                            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
                            <textarea v-model="form.description" id="description" name="description"
                                class="border rounded w-full py-2 px-3" rows="4"
                                placeholder="h.w for math and english "></textarea>
                        </div>

                        <div>
                            <button
                                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit">
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </template>