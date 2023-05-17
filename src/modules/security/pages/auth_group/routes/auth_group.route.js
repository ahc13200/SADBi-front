export default [
    {
        path: '/security/auth_group_list',
        name: 'auth_group_list',
        component:()=> import('@/modules/security/pages/auth_group/list/auth_group_list.vue'),
    },
    {
        path: '/security/auth_group_form',
        name: 'auth_group_form',
        component:()=> import('@/modules/security/pages/auth_group/form/auth_group_form.vue'),
    },
]
