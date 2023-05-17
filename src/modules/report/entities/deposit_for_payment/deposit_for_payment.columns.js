  export const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      align:'center',
      key: 'id',

      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Issuing_bank',
      dataIndex: 'issuing_bank',
      align:'center',
      key: 'issuing_bank',

      sorter: (a, b) =>  (a.issuing_bank > b.issuing_bank)-(a.issuing_bank < b.issuing_bank)
    },
    {
      title: 'Agency_name',
      dataIndex: 'agency_name',
      align:'center',
      key: 'agency_name',

      sorter: (a, b) =>  (a.agency_name > b.agency_name)-(a.agency_name < b.agency_name)
    },
    {
      title: 'Bank_name',
      dataIndex: 'bank_name',
      align:'center',
      key: 'bank_name',

      sorter: (a, b) =>  (a.bank_name > b.bank_name)-(a.bank_name < b.bank_name)
    },
    {
      title: 'Total_transaction',
      dataIndex: 'total_transaction',
      align:'center',
      key: 'total_transaction',

      sorter: (a, b) => a.total_transaction - b.total_transaction
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
