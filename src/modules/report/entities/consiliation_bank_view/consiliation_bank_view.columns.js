  export const columns = [
    {
      title: 'Bank_name',
      dataIndex: 'bank_name',
      align:'center',
      key: 'bank_name',

      sorter: (a, b) =>  (a.bank_name > b.bank_name)-(a.bank_name < b.bank_name)
    },
    {
      title: 'Id',
      dataIndex: 'id',
      align:'center',
      key: 'id',

      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'State_code',
      dataIndex: 'state_code',
      align:'center',
      key: 'state_code',

      sorter: (a, b) =>  (a.state_code > b.state_code)-(a.state_code < b.state_code)
    },
    {
      title: 'Count',
      dataIndex: 'count',
      align:'center',
      key: 'count',

      sorter: (a, b) => a.count - b.count
    },
    {
      title: 'Total_amount',
      dataIndex: 'total_amount',
      align:'center',
      key: 'total_amount',

    },
    {
      title: 'Total_fee',
      dataIndex: 'total_fee',
      align:'center',
      key: 'total_fee',

    },
    {
      title: 'Min',
      dataIndex: 'min',
      align:'center',
      key: 'min',

      sorter: (a, b) =>  (a.min > b.min)-(a.min < b.min)
    },
    {
      title: 'Max_date',
      dataIndex: 'max_date',
      align:'center',
      key: 'max_date',

      sorter: (a, b) =>  (a.max_date > b.max_date)-(a.max_date < b.max_date)
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
