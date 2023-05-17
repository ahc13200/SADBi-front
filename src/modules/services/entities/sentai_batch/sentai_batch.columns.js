  export const columns = [
    {
      title: 'Send_date',
      dataIndex: 'send_date',
      align:'center',
      key: 'send_date',

      sorter: (a, b) =>  (a.send_date > b.send_date)-(a.send_date < b.send_date)
    },
    {
      title: 'State',
      dataIndex: 'state',
      align:'center',
      key: 'state',

      sorter: (a, b) =>  (a.state > b.state)-(a.state < b.state)
    },
    {
      title: 'Sentai_trans_no',
      dataIndex: 'sentai_trans_no',
      align:'center',
      key: 'sentai_trans_no',

      sorter: (a, b) =>  (a.sentai_trans_no > b.sentai_trans_no)-(a.sentai_trans_no < b.sentai_trans_no)
    },
    {
      title: 'Agency',
      dataIndex: 'agency.agency_name',
      align:'center',
      key: 'agency.agency_name',

      sorter: (a, b) =>  a.agency && b.agency?(a.agency.agency_name > b.agency.agency_name)-(a.agency.agency_name < b.agency.agency_name):0
    },
    {
      title: 'Sentai_batch_datetime',
      dataIndex: 'sentai_batch_datetime',
      align:'center',
      key: 'sentai_batch_datetime',

      sorter: (a, b) =>  (a.sentai_batch_datetime > b.sentai_batch_datetime)-(a.sentai_batch_datetime < b.sentai_batch_datetime)
    },
    {
      title: 'Sentai_home_amount',
      dataIndex: 'sentai_home_amount',
      align:'center',
      key: 'sentai_home_amount',

    },
    {
      title: 'Sentai_home_fee',
      dataIndex: 'sentai_home_fee',
      align:'center',
      key: 'sentai_home_fee',

    },
    {
      title: 'Sentai_trans_amount',
      dataIndex: 'sentai_trans_amount',
      align:'center',
      key: 'sentai_trans_amount',

    },
    {
      title: 'Sentai_trans_fee',
      dataIndex: 'sentai_trans_fee',
      align:'center',
      key: 'sentai_trans_fee',

    },
    {
      title: 'Sentai_error',
      dataIndex: 'sentai_error',
      align:'center',
      key: 'sentai_error',

      sorter: (a, b) =>  (a.sentai_error > b.sentai_error)-(a.sentai_error < b.sentai_error)
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
