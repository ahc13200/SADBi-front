export default [
    {
        path: '/services/rejection_error_list',
        name: 'rejection_error_list',
        component:()=> import('@/modules/services/pages/rejection_error/list/rejection_error_list.vue'),
    },
    {
        path: '/services/rejection_error_form',
        name: 'rejection_error_form',
        component:()=> import('@/modules/services/pages/rejection_error/form/rejection_error_form.vue'),
    },
]
