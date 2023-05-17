  export const columns = [
    {
      title: 'Group',
      dataIndex: 'group.name',
      align:'center',
      key: 'group.name',

      sorter: (a, b) =>  a.group && b.group?(a.group.name > b.group.name)-(a.group.name < b.group.name):0
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
