export default [
    {
        path: '/services/transaction_state_list',
        name: 'transaction_state_list',
        component:()=> import('@/modules/services/pages/transaction_state/list/transaction_state_list.vue'),
    },
    {
        path: '/services/transaction_state_form',
        name: 'transaction_state_form',
        component:()=> import('@/modules/services/pages/transaction_state/form/transaction_state_form.vue'),
    },
]
