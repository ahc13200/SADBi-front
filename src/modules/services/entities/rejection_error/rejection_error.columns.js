  export const columns = [
    {
      title: 'Error_code',
      dataIndex: 'error_code',
      align:'center',
      key: 'error_code',

      sorter: (a, b) =>  (a.error_code > b.error_code)-(a.error_code < b.error_code)
    },
    {
      title: 'Error_source',
      dataIndex: 'error_source',
      align:'center',
      key: 'error_source',

      sorter: (a, b) =>  (a.error_source > b.error_source)-(a.error_source < b.error_source)
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
