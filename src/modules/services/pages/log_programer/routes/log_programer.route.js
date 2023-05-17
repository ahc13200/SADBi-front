export default [
    {
        path: '/services/log_programer_list',
        name: 'log_programer_list',
        component:()=> import('@/modules/services/pages/log_programer/list/log_programer_list.vue'),
    },
    {
        path: '/services/log_programer_form',
        name: 'log_programer_form',
        component:()=> import('@/modules/services/pages/log_programer/form/log_programer_form.vue'),
    },
]
