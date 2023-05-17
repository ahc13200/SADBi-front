export default [
    {
        path: '/services/municipality_list',
        name: 'municipality_list',
        component:()=> import('@/modules/services/pages/municipality/list/municipality_list.vue'),
    },
    {
        path: '/services/municipality_form',
        name: 'municipality_form',
        component:()=> import('@/modules/services/pages/municipality/form/municipality_form.vue'),
    },
]
