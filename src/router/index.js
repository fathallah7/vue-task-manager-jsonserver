import { createRouter , createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import AddTasks from "../views/AddTasks.vue";
import EditTask from "../views/EditTask.vue";


const router = createRouter ({
    history : createWebHistory(import.meta.env.BASE_URL) ,
    routes : [
        {
            path: '/' ,
            name: 'home',
            component: HomeView,
        } , 
        {
            path: '/listings' ,
            name: 'allTasks' ,
            component: TasksView,
        } , 
        {
            path: '/add-tasks' ,
            name: 'addTasks' ,
            component: AddTasks
        },
        {
            path: '/edit/:id' ,
            name: 'editTask' ,
            component: EditTask
        }
    ]
});
export default router;