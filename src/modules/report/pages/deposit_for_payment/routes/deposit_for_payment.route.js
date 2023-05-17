export default [
    {
        path: '/report/deposit_for_payment_list',
        name: 'deposit_for_payment_list',
        component:()=> import('@/modules/report/pages/deposit_for_payment/list/deposit_for_payment_list.vue'),
    },
    {
        path: '/report/deposit_for_payment_form',
        name: 'deposit_for_payment_form',
        component:()=> import('@/modules/report/pages/deposit_for_payment/form/deposit_for_payment_form.vue'),
    },
]
