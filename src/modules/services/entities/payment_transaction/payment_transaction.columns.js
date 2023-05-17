  export const columns = [
    {
      title: 'Transaction_date',
      dataIndex: 'transaction_date',
      align:'center',
      key: 'transaction_date',

      sorter: (a, b) =>  (a.transaction_date > b.transaction_date)-(a.transaction_date < b.transaction_date)
    },
    {
      title: 'Request_date',
      dataIndex: 'request_date',
      align:'center',
      key: 'request_date',

      sorter: (a, b) =>  (a.request_date > b.request_date)-(a.request_date < b.request_date)
    },
    {
      title: 'Agency_trans_id',
      dataIndex: 'agency_trans_id',
      align:'center',
      key: 'agency_trans_id',

      sorter: (a, b) =>  (a.agency_trans_id > b.agency_trans_id)-(a.agency_trans_id < b.agency_trans_id)
    },
    {
      title: 'Bank_trans_id',
      dataIndex: 'bank_trans_id',
      align:'center',
      key: 'bank_trans_id',

      sorter: (a, b) =>  (a.bank_trans_id > b.bank_trans_id)-(a.bank_trans_id < b.bank_trans_id)
    },
    {
      title: 'Cust_firstname',
      dataIndex: 'cust_firstname',
      align:'center',
      key: 'cust_firstname',

      sorter: (a, b) =>  (a.cust_firstname > b.cust_firstname)-(a.cust_firstname < b.cust_firstname)
    },
    {
      title: 'Cust_lastname',
      dataIndex: 'cust_lastname',
      align:'center',
      key: 'cust_lastname',

      sorter: (a, b) =>  (a.cust_lastname > b.cust_lastname)-(a.cust_lastname < b.cust_lastname)
    },
    {
      title: 'Cust_address',
      dataIndex: 'cust_address',
      align:'center',
      key: 'cust_address',

      sorter: (a, b) =>  (a.cust_address > b.cust_address)-(a.cust_address < b.cust_address)
    },
    {
      title: 'Cust_identification',
      dataIndex: 'cust_identification',
      align:'center',
      key: 'cust_identification',

      sorter: (a, b) =>  (a.cust_identification > b.cust_identification)-(a.cust_identification < b.cust_identification)
    },
    {
      title: 'Cust_phone_number',
      dataIndex: 'cust_phone_number',
      align:'center',
      key: 'cust_phone_number',

      sorter: (a, b) =>  (a.cust_phone_number > b.cust_phone_number)-(a.cust_phone_number < b.cust_phone_number)
    },
    {
      title: 'Account_card',
      dataIndex: 'account_card',
      align:'center',
      key: 'account_card',

      sorter: (a, b) =>  (a.account_card > b.account_card)-(a.account_card < b.account_card)
    },
    {
      title: 'Trans_amount',
      dataIndex: 'trans_amount',
      align:'center',
      key: 'trans_amount',

    },
    {
      title: 'Trans_fee',
      dataIndex: 'trans_fee',
      align:'center',
      key: 'trans_fee',

    },
    {
      title: 'Sender_firstname',
      dataIndex: 'sender_firstname',
      align:'center',
      key: 'sender_firstname',

      sorter: (a, b) =>  (a.sender_firstname > b.sender_firstname)-(a.sender_firstname < b.sender_firstname)
    },
    {
      title: 'Sender_lastname',
      dataIndex: 'sender_lastname',
      align:'center',
      key: 'sender_lastname',

      sorter: (a, b) =>  (a.sender_lastname > b.sender_lastname)-(a.sender_lastname < b.sender_lastname)
    },
    {
      title: 'Sender_address',
      dataIndex: 'sender_address',
      align:'center',
      key: 'sender_address',

      sorter: (a, b) =>  (a.sender_address > b.sender_address)-(a.sender_address < b.sender_address)
    },
    {
      title: 'Sender_identification',
      dataIndex: 'sender_identification',
      align:'center',
      key: 'sender_identification',

      sorter: (a, b) =>  (a.sender_identification > b.sender_identification)-(a.sender_identification < b.sender_identification)
    },
    {
      title: 'Sender_identification_type',
      dataIndex: 'sender_identification_type',
      align:'center',
      key: 'sender_identification_type',

      sorter: (a, b) =>  (a.sender_identification_type > b.sender_identification_type)-(a.sender_identification_type < b.sender_identification_type)
    },
    {
      title: 'Sender_birth_country',
      dataIndex: 'sender_birth_country',
      align:'center',
      key: 'sender_birth_country',

      sorter: (a, b) =>  (a.sender_birth_country > b.sender_birth_country)-(a.sender_birth_country < b.sender_birth_country)
    },
    {
      title: 'Sender_birth_date',
      dataIndex: 'sender_birth_date',
      align:'center',
      key: 'sender_birth_date',

      sorter: (a, b) => a.sender_birth_date - b.sender_birth_date
    },
    {
      title: 'Sender_fin_inst',
      dataIndex: 'sender_fin_inst',
      align:'center',
      key: 'sender_fin_inst',

      sorter: (a, b) =>  (a.sender_fin_inst > b.sender_fin_inst)-(a.sender_fin_inst < b.sender_fin_inst)
    },
    {
      title: 'Sender_account_card',
      dataIndex: 'sender_account_card',
      align:'center',
      key: 'sender_account_card',

      sorter: (a, b) =>  (a.sender_account_card > b.sender_account_card)-(a.sender_account_card < b.sender_account_card)
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      align:'center',
      key: 'completed',

    },
    {
      title: 'Msg_id',
      dataIndex: 'msg_id',
      align:'center',
      key: 'msg_id',

      sorter: (a, b) =>  (a.msg_id > b.msg_id)-(a.msg_id < b.msg_id)
    },
    {
      title: 'Msg_creation_datetime',
      dataIndex: 'msg_creation_datetime',
      align:'center',
      key: 'msg_creation_datetime',

      sorter: (a, b) =>  (a.msg_creation_datetime > b.msg_creation_datetime)-(a.msg_creation_datetime < b.msg_creation_datetime)
    },
    {
      title: 'Send_bank',
      dataIndex: 'send_bank',
      align:'center',
      key: 'send_bank',

    },
    {
      title: 'Agency',
      dataIndex: 'agency.agency_name',
      align:'center',
      key: 'agency.agency_name',

      sorter: (a, b) =>  a.agency && b.agency?(a.agency.agency_name > b.agency.agency_name)-(a.agency.agency_name < b.agency.agency_name):0
    },
    {
      title: 'Bank',
      dataIndex: 'bank.bank_code',
      align:'center',
      key: 'bank.bank_code',

      sorter: (a, b) =>  a.bank && b.bank?(a.bank.bank_code > b.bank.bank_code)-(a.bank.bank_code < b.bank.bank_code):0
    },
    {
      title: 'Currency',
      dataIndex: 'currency.currency_name',
      align:'center',
      key: 'currency.currency_name',

      sorter: (a, b) =>  a.currency && b.currency?(a.currency.currency_name > b.currency.currency_name)-(a.currency.currency_name < b.currency.currency_name):0
    },
    {
      title: 'Cust_municip',
      dataIndex: 'cust_municip.municipality_code',
      align:'center',
      key: 'cust_municip.municipality_code',

      sorter: (a, b) =>  a.cust_municip && b.cust_municip?(a.cust_municip.municipality_code > b.cust_municip.municipality_code)-(a.cust_municip.municipality_code < b.cust_municip.municipality_code):0
    },
    {
      title: 'Cust_prov',
      dataIndex: 'cust_prov.province_code',
      align:'center',
      key: 'cust_prov.province_code',

      sorter: (a, b) =>  a.cust_prov && b.cust_prov?(a.cust_prov.province_code > b.cust_prov.province_code)-(a.cust_prov.province_code < b.cust_prov.province_code):0
    },
    {
      title: 'Sender_city_id',
      dataIndex: 'sender_city_id',
      align:'center',
      key: 'sender_city_id',

      sorter: (a, b) => a.sender_city_id - b.sender_city_id
    },
    {
      title: 'Sender_country',
      dataIndex: 'sender_country.country_code',
      align:'center',
      key: 'sender_country.country_code',

      sorter: (a, b) =>  a.sender_country && b.sender_country?(a.sender_country.country_code > b.sender_country.country_code)-(a.sender_country.country_code < b.sender_country.country_code):0
    },
    {
      title: 'Transaction_state',
      dataIndex: 'transaction_state.state_code',
      align:'center',
      key: 'transaction_state.state_code',

      sorter: (a, b) =>  a.transaction_state && b.transaction_state?(a.transaction_state.state_code > b.transaction_state.state_code)-(a.transaction_state.state_code < b.transaction_state.state_code):0
    },
    {
      title: 'State_source',
      dataIndex: 'state_source',
      align:'center',
      key: 'state_source',

      sorter: (a, b) =>  (a.state_source > b.state_source)-(a.state_source < b.state_source)
    },
    {
      title: 'Reconcilied_bank',
      dataIndex: 'reconcilied_bank',
      align:'center',
      key: 'reconcilied_bank',

    },
    {
      title: 'Transaction_reference',
      dataIndex: 'transaction_reference',
      align:'center',
      key: 'transaction_reference',

      sorter: (a, b) =>  (a.transaction_reference > b.transaction_reference)-(a.transaction_reference < b.transaction_reference)
    },
    {
      title: 'Bank_fee',
      dataIndex: 'bank_fee',
      align:'center',
      key: 'bank_fee',

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
