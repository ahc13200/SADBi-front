  export const columns = [
    {
      title: 'Cust_identification',
      dataIndex: 'cust_identification',
      align:'center',
      key: 'cust_identification',

      sorter: (a, b) =>  (a.cust_identification > b.cust_identification)-(a.cust_identification < b.cust_identification)
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
