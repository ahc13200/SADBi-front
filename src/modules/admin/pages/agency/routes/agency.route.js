export default [
    {
        path: '/admin/agency_list',
        name: 'agency_list',
        component:()=> import('@/modules/admin/pages/agency/list/agency_list.vue'),
    },
    {
        path: '/admin/agency_form',
        name: 'agency_form',
        component:()=> import('@/modules/admin/pages/agency/form/agency_form.vue'),
    },
]
