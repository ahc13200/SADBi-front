  export const columns = [
    {
      title: 'Object_pk',
      dataIndex: 'object_pk',
      align:'center',
      key: 'object_pk',

      sorter: (a, b) =>  (a.object_pk > b.object_pk)-(a.object_pk < b.object_pk)
    },
    {
      title: 'Object_id',
      dataIndex: 'object_id',
      align:'center',
      key: 'object_id',

      sorter: (a, b) => a.object_id - b.object_id
    },
    {
      title: 'Object_repr',
      dataIndex: 'object_repr',
      align:'center',
      key: 'object_repr',

      sorter: (a, b) =>  (a.object_repr > b.object_repr)-(a.object_repr < b.object_repr)
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align:'center',
      key: 'action',

      sorter: (a, b) => a.action - b.action
    },
    {
      title: 'Changes',
      dataIndex: 'changes',
      align:'center',
      key: 'changes',

      sorter: (a, b) =>  (a.changes > b.changes)-(a.changes < b.changes)
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      align:'center',
      key: 'timestamp',

      sorter: (a, b) =>  (a.timestamp > b.timestamp)-(a.timestamp < b.timestamp)
    },
    {
      title: 'Actor_id',
      dataIndex: 'actor_id',
      align:'center',
      key: 'actor_id',

      sorter: (a, b) => a.actor_id - b.actor_id
    },
    {
      title: 'Content_type_id',
      dataIndex: 'content_type_id',
      align:'center',
      key: 'content_type_id',

      sorter: (a, b) => a.content_type_id - b.content_type_id
    },
    {
      title: 'Remote_addr',
      dataIndex: 'remote_addr',
      align:'center',
      key: 'remote_addr',

      sorter: (a, b) =>  (a.remote_addr > b.remote_addr)-(a.remote_addr < b.remote_addr)
    },
    {
      title: 'Additional_data',
      dataIndex: 'additional_data',
      align:'center',
      key: 'additional_data',

      sorter: (a, b) =>  (a.additional_data > b.additional_data)-(a.additional_data < b.additional_data)
    },
    {
      title: 'Serialized_data',
      dataIndex: 'serialized_data',
      align:'center',
      key: 'serialized_data',

      sorter: (a, b) =>  (a.serialized_data > b.serialized_data)-(a.serialized_data < b.serialized_data)
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
