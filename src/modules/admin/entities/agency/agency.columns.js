export const columns = [
    {
        title: 'Agency_name',
        dataIndex: 'agency_name',
        align: 'center',
        key: 'agency_name',

        sorter: (a, b) => (a.agency_name > b.agency_name) - (a.agency_name < b.agency_name)
    },
    {
        title: 'Language',
        dataIndex: 'language',
        align: 'center',
        key: 'language',

        sorter: (a, b) => (a.language > b.language) - (a.language < b.language)
    },
    {
        title: 'Low_funds_warning',
        dataIndex: 'low_funds_warning',
        align: 'center',
        key: 'low_funds_warning',

    },
    {
        title: 'Sentai_code',
        dataIndex: 'sentai_code',
        align: 'center',
        key: 'sentai_code',

        sorter: (a, b) => (a.sentai_code > b.sentai_code) - (a.sentai_code < b.sentai_code)
    },
    {
        title: 'Funds_balance',
        dataIndex: 'funds_balance',
        align: 'center',
        key: 'funds_balance',

    },
    {
        title: 'Funds_work',
        dataIndex: 'funds_work',
        align: 'center',
        key: 'funds_work',

    },
    {
        title: 'State',
        dataIndex: 'state',
        align: 'center',
        key: 'state',
        scopedSlots: {
            customRender: "state"
        }

    },
    {
        title: 'Accept_reject',
        dataIndex: 'accept_reject',
        align: 'center',
        key: 'accept_reject',
        scopedSlots: {
            customRender: "accept_reject"
        }

    },
    {
        title: 'Self_sending',
        dataIndex: 'self_sending',
        align: 'center',
        key: 'self_sending',
        scopedSlots: {
            customRender: "self_sending"
        }

    },
    {
        title: 'Fee_percent',
        dataIndex: 'fee_percent',
        align: 'center',
        key: 'fee_percent',

    },
    {
        title: 'Fee',
        dataIndex: 'fee.sentai_id',
        align: 'center',
        key: 'fee.sentai_id',

        sorter: (a, b) => a.fee && b.fee ? (a.fee.sentai_id > b.fee.sentai_id) - (a.fee.sentai_id < b.fee.sentai_id) : 0
    },
    {
        title: 'Agency_code',
        dataIndex: 'agency_code',
        align: 'center',
        key: 'agency_code',

        sorter: (a, b) => (a.agency_code > b.agency_code) - (a.agency_code < b.agency_code)
    },
    {
        title: 'In_accounting',
        dataIndex: 'in_accounting',
        align: 'center',
        key: 'in_accounting',
        scopedSlots: {
            customRender: "in_accounting"
        }

    },
    {
        title: 'Issuing_bank',
        dataIndex: 'issuing_bank',
        align: 'center',
        key: 'issuing_bank',

        sorter: (a, b) => (a.issuing_bank > b.issuing_bank) - (a.issuing_bank < b.issuing_bank)
    },
    {
        title: 'Acciones',
        key: 'action_elements',
        fixed: 'right',
        scopedSlots: {
            customRender: 'action'
        }
    }
];
