export default [
    {
        path: '/services/auditlog_logentry_list',
        name: 'auditlog_logentry_list',
        component:()=> import('@/modules/services/pages/auditlog_logentry/list/auditlog_logentry_list.vue'),
    },
    {
        path: '/services/auditlog_logentry_form',
        name: 'auditlog_logentry_form',
        component:()=> import('@/modules/services/pages/auditlog_logentry/form/auditlog_logentry_form.vue'),
    },
]
