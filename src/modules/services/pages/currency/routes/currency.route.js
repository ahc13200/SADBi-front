export default [
    {
        path: '/services/currency_list',
        name: 'currency_list',
        component:()=> import('@/modules/services/pages/currency/list/currency_list.vue'),
    },
    {
        path: '/services/currency_form',
        name: 'currency_form',
        component:()=> import('@/modules/services/pages/currency/form/currency_form.vue'),
    },
]
