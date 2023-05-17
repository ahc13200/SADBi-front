  export const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      align:'center',
      key: 'id',

      sorter: (a, b) => a.id - b.id
    },
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
      title: 'Transaction_reference',
      dataIndex: 'transaction_reference',
      align:'center',
      key: 'transaction_reference',

      sorter: (a, b) =>  (a.transaction_reference > b.transaction_reference)-(a.transaction_reference < b.transaction_reference)
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
      title: 'Agency_name',
      dataIndex: 'agency_name',
      align:'center',
      key: 'agency_name',

      sorter: (a, b) =>  (a.agency_name > b.agency_name)-(a.agency_name < b.agency_name)
    },
    {
      title: 'Agency_code',
      dataIndex: 'agency_code',
      align:'center',
      key: 'agency_code',

      sorter: (a, b) =>  (a.agency_code > b.agency_code)-(a.agency_code < b.agency_code)
    },
    {
      title: 'Sentai_code',
      dataIndex: 'sentai_code',
      align:'center',
      key: 'sentai_code',

      sorter: (a, b) =>  (a.sentai_code > b.sentai_code)-(a.sentai_code < b.sentai_code)
    },
    {
      title: 'Issuing_bank',
      dataIndex: 'issuing_bank',
      align:'center',
      key: 'issuing_bank',

      sorter: (a, b) =>  (a.issuing_bank > b.issuing_bank)-(a.issuing_bank < b.issuing_bank)
    },
    {
      title: 'Bank_code',
      dataIndex: 'bank_code',
      align:'center',
      key: 'bank_code',

      sorter: (a, b) =>  (a.bank_code > b.bank_code)-(a.bank_code < b.bank_code)
    },
    {
      title: 'Bank_name',
      dataIndex: 'bank_name',
      align:'center',
      key: 'bank_name',

      sorter: (a, b) =>  (a.bank_name > b.bank_name)-(a.bank_name < b.bank_name)
    },
    {
      title: 'Currency_code',
      dataIndex: 'currency_code',
      align:'center',
      key: 'currency_code',

      sorter: (a, b) =>  (a.currency_code > b.currency_code)-(a.currency_code < b.currency_code)
    },
    {
      title: 'Cust_municipality_name',
      dataIndex: 'cust_municipality_name',
      align:'center',
      key: 'cust_municipality_name',

      sorter: (a, b) =>  (a.cust_municipality_name > b.cust_municipality_name)-(a.cust_municipality_name < b.cust_municipality_name)
    },
    {
      title: 'Cust_province_name',
      dataIndex: 'cust_province_name',
      align:'center',
      key: 'cust_province_name',

      sorter: (a, b) =>  (a.cust_province_name > b.cust_province_name)-(a.cust_province_name < b.cust_province_name)
    },
    {
      title: 'Sender_country_name',
      dataIndex: 'sender_country_name',
      align:'center',
      key: 'sender_country_name',

      sorter: (a, b) =>  (a.sender_country_name > b.sender_country_name)-(a.sender_country_name < b.sender_country_name)
    },
    {
      title: 'State_code',
      dataIndex: 'state_code',
      align:'center',
      key: 'state_code',

      sorter: (a, b) =>  (a.state_code > b.state_code)-(a.state_code < b.state_code)
    },
    {
      title: 'Description_es',
      dataIndex: 'description_es',
      align:'center',
      key: 'description_es',

      sorter: (a, b) =>  (a.description_es > b.description_es)-(a.description_es < b.description_es)
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
