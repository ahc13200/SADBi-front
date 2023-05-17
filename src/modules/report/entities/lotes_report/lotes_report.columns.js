  export const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      align:'center',
      key: 'id',

      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Transaction_reference',
      dataIndex: 'transaction_reference',
      align:'center',
      key: 'transaction_reference',

      sorter: (a, b) =>  (a.transaction_reference > b.transaction_reference)-(a.transaction_reference < b.transaction_reference)
    },
    {
      title: 'Agency_trans_id',
      dataIndex: 'agency_trans_id',
      align:'center',
      key: 'agency_trans_id',

      sorter: (a, b) =>  (a.agency_trans_id > b.agency_trans_id)-(a.agency_trans_id < b.agency_trans_id)
    },
    {
      title: 'Bank_name',
      dataIndex: 'bank_name',
      align:'center',
      key: 'bank_name',

      sorter: (a, b) =>  (a.bank_name > b.bank_name)-(a.bank_name < b.bank_name)
    },
    {
      title: 'Bank_trans_id',
      dataIndex: 'bank_trans_id',
      align:'center',
      key: 'bank_trans_id',

      sorter: (a, b) =>  (a.bank_trans_id > b.bank_trans_id)-(a.bank_trans_id < b.bank_trans_id)
    },
    {
      title: 'Trans_amount',
      dataIndex: 'trans_amount',
      align:'center',
      key: 'trans_amount',

    },
    {
      title: 'Trans_fee',
      dataIndex: 'trans_fee',
      align:'center',
      key: 'trans_fee',

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
