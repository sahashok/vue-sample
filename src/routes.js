import HomeCom from './components/HomeCom.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'



const routes=[
    {
        name: 'HomeCom',
        Component:HomeCom,
        path: '/'
    },
    {
        name: 'SignUp',
        Component:SignUp,
        path: '/SignUp'
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router
