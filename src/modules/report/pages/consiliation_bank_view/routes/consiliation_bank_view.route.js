export default [
    {
        path: '/report/consiliation_bank_view_list',
        name: 'consiliation_bank_view_list',
        component:()=> import('@/modules/report/pages/consiliation_bank_view/list/consiliation_bank_view_list.vue'),
    },
    {
        path: '/report/consiliation_bank_view_form',
        name: 'consiliation_bank_view_form',
        component:()=> import('@/modules/report/pages/consiliation_bank_view/form/consiliation_bank_view_form.vue'),
    },
]
