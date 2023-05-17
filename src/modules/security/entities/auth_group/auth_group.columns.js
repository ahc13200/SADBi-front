  export const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  (a.name > b.name)-(a.name < b.name)
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
