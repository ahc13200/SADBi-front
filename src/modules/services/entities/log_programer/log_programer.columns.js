  export const columns = [
    {
      title: 'Log_description',
      dataIndex: 'log_description',
      align:'center',
      key: 'log_description',

      sorter: (a, b) =>  (a.log_description > b.log_description)-(a.log_description < b.log_description)
    },
    {
      title: 'Trace',
      dataIndex: 'trace',
      align:'center',
      key: 'trace',

      sorter: (a, b) =>  (a.trace > b.trace)-(a.trace < b.trace)
    },
    {
      title: 'System',
      dataIndex: 'system',
      align:'center',
      key: 'system',

      sorter: (a, b) =>  (a.system > b.system)-(a.system < b.system)
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
