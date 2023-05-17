  export const columns = [
    {
      title: 'State_code',
      dataIndex: 'state_code',
      align:'center',
      key: 'state_code',

      sorter: (a, b) =>  (a.state_code > b.state_code)-(a.state_code < b.state_code)
    },
    {
      title: 'Description_es',
      dataIndex: 'description_es',
      align:'center',
      key: 'description_es',

      sorter: (a, b) =>  (a.description_es > b.description_es)-(a.description_es < b.description_es)
    },
    {
      title: 'Description_en',
      dataIndex: 'description_en',
      align:'center',
      key: 'description_en',

      sorter: (a, b) =>  (a.description_en > b.description_en)-(a.description_en < b.description_en)
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
