export default [
    {
        path: '/security/auth_permission_list',
        name: 'auth_permission_list',
        component:()=> import('@/modules/security/pages/auth_permission/list/auth_permission_list.vue'),
    },
    {
        path: '/security/auth_permission_form',
        name: 'auth_permission_form',
        component:()=> import('@/modules/security/pages/auth_permission/form/auth_permission_form.vue'),
    },
]
