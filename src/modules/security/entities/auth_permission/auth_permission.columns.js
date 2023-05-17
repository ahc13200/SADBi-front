  export const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  (a.name > b.name)-(a.name < b.name)
    },
    {
      title: 'Content_type_id',
      dataIndex: 'content_type_id',
      align:'center',
      key: 'content_type_id',

      sorter: (a, b) => a.content_type_id - b.content_type_id
    },
    {
      title: 'Codename',
      dataIndex: 'codename',
      align:'center',
      key: 'codename',

      sorter: (a, b) =>  (a.codename > b.codename)-(a.codename < b.codename)
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
