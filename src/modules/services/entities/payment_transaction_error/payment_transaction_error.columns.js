  export const columns = [
    {
      title: 'Error_date',
      dataIndex: 'error_date',
      align:'center',
      key: 'error_date',

      sorter: (a, b) =>  (a.error_date > b.error_date)-(a.error_date < b.error_date)
    },
    {
      title: 'Field_related',
      dataIndex: 'field_related',
      align:'center',
      key: 'field_related',

      sorter: (a, b) =>  (a.field_related > b.field_related)-(a.field_related < b.field_related)
    },
    {
      title: 'Error',
      dataIndex: 'error.error_code',
      align:'center',
      key: 'error.error_code',

      sorter: (a, b) =>  a.error && b.error?(a.error.error_code > b.error.error_code)-(a.error.error_code < b.error.error_code):0
    },
    {
      title: 'Transaction',
      dataIndex: 'transaction.agency_trans_id',
      align:'center',
      key: 'transaction.agency_trans_id',

      sorter: (a, b) =>  a.transaction && b.transaction?(a.transaction.agency_trans_id > b.transaction.agency_trans_id)-(a.transaction.agency_trans_id < b.transaction.agency_trans_id):0
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
