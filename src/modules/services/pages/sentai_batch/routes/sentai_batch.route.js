export default [
    {
        path: '/services/sentai_batch_list',
        name: 'sentai_batch_list',
        component:()=> import('@/modules/services/pages/sentai_batch/list/sentai_batch_list.vue'),
    },
    {
        path: '/services/sentai_batch_form',
        name: 'sentai_batch_form',
        component:()=> import('@/modules/services/pages/sentai_batch/form/sentai_batch_form.vue'),
    },
]
