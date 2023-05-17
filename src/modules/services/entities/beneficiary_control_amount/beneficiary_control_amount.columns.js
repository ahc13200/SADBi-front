  export const columns = [
    {
      title: 'Cust_identification',
      dataIndex: 'cust_identification',
      align:'center',
      key: 'cust_identification',

      sorter: (a, b) =>  (a.cust_identification > b.cust_identification)-(a.cust_identification < b.cust_identification)
    },
    {
      title: 'Monthly_received_amount',
      dataIndex: 'monthly_received_amount',
      align:'center',
      key: 'monthly_received_amount',

    },
    {
      title: 'Agency',
      dataIndex: 'agency.agency_name',
      align:'center',
      key: 'agency.agency_name',

      sorter: (a, b) =>  a.agency && b.agency?(a.agency.agency_name > b.agency.agency_name)-(a.agency.agency_name < b.agency.agency_name):0
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
