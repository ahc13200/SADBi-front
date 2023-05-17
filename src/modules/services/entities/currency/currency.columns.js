  export const columns = [
    {
      title: 'Currency_name',
      dataIndex: 'currency_name',
      align:'center',
      key: 'currency_name',

      sorter: (a, b) =>  (a.currency_name > b.currency_name)-(a.currency_name < b.currency_name)
    },
    {
      title: 'Currency_code',
      dataIndex: 'currency_code',
      align:'center',
      key: 'currency_code',

      sorter: (a, b) =>  (a.currency_code > b.currency_code)-(a.currency_code < b.currency_code)
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
