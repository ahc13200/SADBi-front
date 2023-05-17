  export const columns = [
    {
      title: 'Country_code',
      dataIndex: 'country_code',
      align:'center',
      key: 'country_code',

      sorter: (a, b) =>  (a.country_code > b.country_code)-(a.country_code < b.country_code)
    },
    {
      title: 'Country_name',
      dataIndex: 'country_name',
      align:'center',
      key: 'country_name',

      sorter: (a, b) =>  (a.country_name > b.country_name)-(a.country_name < b.country_name)
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
