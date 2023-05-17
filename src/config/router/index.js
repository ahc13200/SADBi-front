import Vue from 'vue'
/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
import Router from 'vue-router'
import router_array from '@/helpers/loaders/router.load'

Vue.use(Router)
const router= new Router({
    mode: 'history',
    hash: false,
    routes: [
        ...router_array,
    ],
})
router.beforeEach((to, from, next) => {
    next()
})
export default router
