  export const columns = [
    {
      title: 'Bank_code',
      dataIndex: 'bank_code',
      align:'center',
      key: 'bank_code',

      sorter: (a, b) =>  (a.bank_code > b.bank_code)-(a.bank_code < b.bank_code)
    },
    {
      title: 'Bank_name',
      dataIndex: 'bank_name',
      align:'center',
      key: 'bank_name',

      sorter: (a, b) =>  (a.bank_name > b.bank_name)-(a.bank_name < b.bank_name)
    },
    {
      title: 'Sentai_code',
      dataIndex: 'sentai_code',
      align:'center',
      key: 'sentai_code',

      sorter: (a, b) =>  (a.sentai_code > b.sentai_code)-(a.sentai_code < b.sentai_code)
    },
    {
      title: 'Self_sending',
      dataIndex: 'self_sending',
      align:'center',
      key: 'self_sending',

    },
    {
      title: 'Fee',
      dataIndex: 'fee.sentai_id',
      align:'center',
      key: 'fee.sentai_id',

      sorter: (a, b) =>  a.fee && b.fee?(a.fee.sentai_id > b.fee.sentai_id)-(a.fee.sentai_id < b.fee.sentai_id):0
    },
    {
      title: 'Cta_deb',
      dataIndex: 'cta_deb',
      align:'center',
      key: 'cta_deb',

      sorter: (a, b) =>  (a.cta_deb > b.cta_deb)-(a.cta_deb < b.cta_deb)
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
