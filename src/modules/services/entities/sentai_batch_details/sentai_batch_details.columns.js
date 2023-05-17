  export const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      align:'center',
      key: 'state',

      sorter: (a, b) =>  (a.state > b.state)-(a.state < b.state)
    },
    {
      title: 'Batch_id',
      dataIndex: 'batch_id',
      align:'center',
      key: 'batch_id',

      sorter: (a, b) => a.batch_id - b.batch_id
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
