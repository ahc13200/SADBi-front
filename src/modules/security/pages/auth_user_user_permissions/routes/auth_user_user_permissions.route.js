export default [
    {
        path: '/security/auth_user_user_permissions_list',
        name: 'auth_user_user_permissions_list',
        component:()=> import('@/modules/security/pages/auth_user_user_permissions/list/auth_user_user_permissions_list.vue'),
    },
    {
        path: '/security/auth_user_user_permissions_form',
        name: 'auth_user_user_permissions_form',
        component:()=> import('@/modules/security/pages/auth_user_user_permissions/form/auth_user_user_permissions_form.vue'),
    },
]
