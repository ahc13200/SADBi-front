export default [
    {
        path: '/services/sentai_batch_details_list',
        name: 'sentai_batch_details_list',
        component:()=> import('@/modules/services/pages/sentai_batch_details/list/sentai_batch_details_list.vue'),
    },
    {
        path: '/services/sentai_batch_details_form',
        name: 'sentai_batch_details_form',
        component:()=> import('@/modules/services/pages/sentai_batch_details/form/sentai_batch_details_form.vue'),
    },
]
