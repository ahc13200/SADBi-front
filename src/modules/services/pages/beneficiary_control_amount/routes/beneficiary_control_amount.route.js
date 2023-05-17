export default [
    {
        path: '/services/beneficiary_control_amount_list',
        name: 'beneficiary_control_amount_list',
        component:()=> import('@/modules/services/pages/beneficiary_control_amount/list/beneficiary_control_amount_list.vue'),
    },
    {
        path: '/services/beneficiary_control_amount_form',
        name: 'beneficiary_control_amount_form',
        component:()=> import('@/modules/services/pages/beneficiary_control_amount/form/beneficiary_control_amount_form.vue'),
    },
]
