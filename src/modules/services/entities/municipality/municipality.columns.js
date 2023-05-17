  export const columns = [
    {
      title: 'Municipality_code',
      dataIndex: 'municipality_code',
      align:'center',
      key: 'municipality_code',

      sorter: (a, b) =>  (a.municipality_code > b.municipality_code)-(a.municipality_code < b.municipality_code)
    },
    {
      title: 'Municipality_name',
      dataIndex: 'municipality_name',
      align:'center',
      key: 'municipality_name',

      sorter: (a, b) =>  (a.municipality_name > b.municipality_name)-(a.municipality_name < b.municipality_name)
    },
    {
      title: 'Province',
      dataIndex: 'province.province_code',
      align:'center',
      key: 'province.province_code',

      sorter: (a, b) =>  a.province && b.province?(a.province.province_code > b.province.province_code)-(a.province.province_code < b.province.province_code):0
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
