  export const columns = [
    {
      title: 'Fee_type',
      dataIndex: 'fee_type',
      align:'center',
      key: 'fee_type',

      sorter: (a, b) =>  (a.fee_type > b.fee_type)-(a.fee_type < b.fee_type)
    },
    {
      title: 'Range_init',
      dataIndex: 'range_init',
      align:'center',
      key: 'range_init',

    },
    {
      title: 'Range_end',
      dataIndex: 'range_end',
      align:'center',
      key: 'range_end',

    },
    {
      title: 'Fee_value',
      dataIndex: 'fee_value',
      align:'center',
      key: 'fee_value',

    },
    {
      title: 'Fee',
      dataIndex: 'fee.sentai_id',
      align:'center',
      key: 'fee.sentai_id',

      sorter: (a, b) =>  a.fee && b.fee?(a.fee.sentai_id > b.fee.sentai_id)-(a.fee.sentai_id < b.fee.sentai_id):0
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
