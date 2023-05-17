export default [
    {
        path: '/services/log_list',
        name: 'log_list',
        component:()=> import('@/modules/services/pages/log/list/log_list.vue'),
    },
    {
        path: '/services/log_form',
        name: 'log_form',
        component:()=> import('@/modules/services/pages/log/form/log_form.vue'),
    },
]
