export default [
    {
        path: '/services/payment_transaction_list',
        name: 'payment_transaction_list',
        component:()=> import('@/modules/services/pages/payment_transaction/list/payment_transaction_list.vue'),
    },
    {
        path: '/services/payment_transaction_form',
        name: 'payment_transaction_form',
        component:()=> import('@/modules/services/pages/payment_transaction/form/payment_transaction_form.vue'),
    },
]
