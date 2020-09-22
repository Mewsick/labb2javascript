import Vue from 'vue'
import VueRouter from 'vue-router'
import Presentation from '../components/Presentation.vue'
import HelloWorld from "../components/HelloWorld.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/Presentation',
            name: 'Presentation',
            component: Presentation
        },{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        }]
})

export default router