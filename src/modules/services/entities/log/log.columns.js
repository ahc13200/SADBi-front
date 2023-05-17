  export const columns = [
    {
      title: 'Log_description',
      dataIndex: 'log_description',
      align:'center',
      key: 'log_description',

      sorter: (a, b) =>  (a.log_description > b.log_description)-(a.log_description < b.log_description)
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
