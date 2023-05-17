export default [
    {
        path: '/services/province_list',
        name: 'province_list',
        component:()=> import('@/modules/services/pages/province/list/province_list.vue'),
    },
    {
        path: '/services/province_form',
        name: 'province_form',
        component:()=> import('@/modules/services/pages/province/form/province_form.vue'),
    },
]
