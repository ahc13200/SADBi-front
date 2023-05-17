  export const columns = [
    {
      title: 'User',
      dataIndex: 'user.password',
      align:'center',
      key: 'user.password',

      sorter: (a, b) =>  a.user && b.user?(a.user.password > b.user.password)-(a.user.password < b.user.password):0
    },
    {
      title: 'Group',
      dataIndex: 'group.name',
      align:'center',
      key: 'group.name',

      sorter: (a, b) =>  a.group && b.group?(a.group.name > b.group.name)-(a.group.name < b.group.name):0
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
