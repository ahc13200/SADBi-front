  export const columns = [
    {
      title: 'Province_code',
      dataIndex: 'province_code',
      align:'center',
      key: 'province_code',

      sorter: (a, b) =>  (a.province_code > b.province_code)-(a.province_code < b.province_code)
    },
    {
      title: 'Province_name',
      dataIndex: 'province_name',
      align:'center',
      key: 'province_name',

      sorter: (a, b) =>  (a.province_name > b.province_name)-(a.province_name < b.province_name)
    },
    {
      title: 'Country',
      dataIndex: 'country.country_code',
      align:'center',
      key: 'country.country_code',

      sorter: (a, b) =>  a.country && b.country?(a.country.country_code > b.country.country_code)-(a.country.country_code < b.country.country_code):0
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
