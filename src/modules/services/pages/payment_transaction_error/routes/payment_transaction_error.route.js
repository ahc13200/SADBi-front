export default [
    {
        path: '/services/payment_transaction_error_list',
        name: 'payment_transaction_error_list',
        component:()=> import('@/modules/services/pages/payment_transaction_error/list/payment_transaction_error_list.vue'),
    },
    {
        path: '/services/payment_transaction_error_form',
        name: 'payment_transaction_error_form',
        component:()=> import('@/modules/services/pages/payment_transaction_error/form/payment_transaction_error_form.vue'),
    },
]
