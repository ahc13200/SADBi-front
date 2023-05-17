export default [
    {
        path: '/security/auth_group_permissions_list',
        name: 'auth_group_permissions_list',
        component:()=> import('@/modules/security/pages/auth_group_permissions/list/auth_group_permissions_list.vue'),
    },
    {
        path: '/security/auth_group_permissions_form',
        name: 'auth_group_permissions_form',
        component:()=> import('@/modules/security/pages/auth_group_permissions/form/auth_group_permissions_form.vue'),
    },
]
