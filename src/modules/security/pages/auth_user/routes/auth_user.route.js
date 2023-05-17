export default [
    {
        path: '/security/auth_user_list',
        name: 'auth_user_list',
        component:()=> import('@/modules/security/pages/auth_user/list/auth_user_list.vue'),
    },
    {
        path: '/security/auth_user_form',
        name: 'auth_user_form',
        component:()=> import('@/modules/security/pages/auth_user/form/auth_user_form.vue'),
    },
]
