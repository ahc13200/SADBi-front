export default [
    {
        path: '/security/auth_user_groups_list',
        name: 'auth_user_groups_list',
        component:()=> import('@/modules/security/pages/auth_user_groups/list/auth_user_groups_list.vue'),
    },
    {
        path: '/security/auth_user_groups_form',
        name: 'auth_user_groups_form',
        component:()=> import('@/modules/security/pages/auth_user_groups/form/auth_user_groups_form.vue'),
    },
]
