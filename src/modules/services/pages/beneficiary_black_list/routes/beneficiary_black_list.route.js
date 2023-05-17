export default [
    {
        path: '/services/beneficiary_black_list_list',
        name: 'beneficiary_black_list_list',
        component:()=> import('@/modules/services/pages/beneficiary_black_list/list/beneficiary_black_list_list.vue'),
    },
    {
        path: '/services/beneficiary_black_list_form',
        name: 'beneficiary_black_list_form',
        component:()=> import('@/modules/services/pages/beneficiary_black_list/form/beneficiary_black_list_form.vue'),
    },
]
