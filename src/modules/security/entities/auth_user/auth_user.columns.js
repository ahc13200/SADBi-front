  export const columns = [
    {
      title: 'Password',
      dataIndex: 'password',
      align:'center',
      key: 'password',

      sorter: (a, b) =>  (a.password > b.password)-(a.password < b.password)
    },
    {
      title: 'Last_login',
      dataIndex: 'last_login',
      align:'center',
      key: 'last_login',

      sorter: (a, b) =>  (a.last_login > b.last_login)-(a.last_login < b.last_login)
    },
    {
      title: 'Is_superuser',
      dataIndex: 'is_superuser',
      align:'center',
      key: 'is_superuser',

    },
    {
      title: 'Username',
      dataIndex: 'username',
      align:'center',
      key: 'username',

      sorter: (a, b) =>  (a.username > b.username)-(a.username < b.username)
    },
    {
      title: 'First_name',
      dataIndex: 'first_name',
      align:'center',
      key: 'first_name',

      sorter: (a, b) =>  (a.first_name > b.first_name)-(a.first_name < b.first_name)
    },
    {
      title: 'Last_name',
      dataIndex: 'last_name',
      align:'center',
      key: 'last_name',

      sorter: (a, b) =>  (a.last_name > b.last_name)-(a.last_name < b.last_name)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align:'center',
      key: 'email',

      sorter: (a, b) =>  (a.email > b.email)-(a.email < b.email)
    },
    {
      title: 'Is_staff',
      dataIndex: 'is_staff',
      align:'center',
      key: 'is_staff',

    },
    {
      title: 'Is_active',
      dataIndex: 'is_active',
      align:'center',
      key: 'is_active',

    },
    {
      title: 'Date_joined',
      dataIndex: 'date_joined',
      align:'center',
      key: 'date_joined',

      sorter: (a, b) =>  (a.date_joined > b.date_joined)-(a.date_joined < b.date_joined)
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
