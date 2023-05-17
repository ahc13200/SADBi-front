  export const columns = [
    {
      title: 'Sentai_id',
      dataIndex: 'sentai_id',
      align:'center',
      key: 'sentai_id',

      sorter: (a, b) =>  (a.sentai_id > b.sentai_id)-(a.sentai_id < b.sentai_id)
    },
    {
      title: 'Fee_descriptions',
      dataIndex: 'fee_descriptions',
      align:'center',
      key: 'fee_descriptions',

      sorter: (a, b) =>  (a.fee_descriptions > b.fee_descriptions)-(a.fee_descriptions < b.fee_descriptions)
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
