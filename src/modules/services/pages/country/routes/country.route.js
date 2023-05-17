export default [
    {
        path: '/services/country_list',
        name: 'country_list',
        component:()=> import('@/modules/services/pages/country/list/country_list.vue'),
    },
    {
        path: '/services/country_form',
        name: 'country_form',
        component:()=> import('@/modules/services/pages/country/form/country_form.vue'),
    },
]
