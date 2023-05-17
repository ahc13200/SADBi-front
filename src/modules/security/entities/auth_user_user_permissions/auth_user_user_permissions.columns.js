  export const columns = [
    {
      title: 'User',
      dataIndex: 'user.password',
      align:'center',
      key: 'user.password',

      sorter: (a, b) =>  a.user && b.user?(a.user.password > b.user.password)-(a.user.password < b.user.password):0
    },
    {
      title: 'Permission',
      dataIndex: 'permission.name',
      align:'center',
      key: 'permission.name',

      sorter: (a, b) =>  a.permission && b.permission?(a.permission.name > b.permission.name)-(a.permission.name < b.permission.name):0
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
