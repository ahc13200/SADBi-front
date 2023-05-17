/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './payment_transaction.columns';

  import * as validation from './payment_transaction.validation';

  import moment from 'moment';

  const url = 'services/payment_transaction';

    export default class Payment_transaction extends BaseModel {

       id
       transaction_date
       request_date
       agency_trans_id
       bank_trans_id
       cust_firstname
       cust_lastname
       cust_address
       cust_identification
       cust_phone_number
       account_card
       trans_amount
       trans_fee
       sender_firstname
       sender_lastname
       sender_address
       sender_identification
       sender_identification_type
       sender_birth_country
       sender_birth_date
       sender_fin_inst
       sender_account_card
       completed
       msg_id
       msg_creation_datetime
       send_bank
       agency_id
       bank_id
       currency_id
       cust_municip_id
       cust_prov_id
       sender_city_id
       sender_country_id
       transaction_state_id
       state_source
       reconcilied_bank
       transaction_reference
       bank_fee

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.transaction_date = attributes.transaction_date|| null
        this.request_date = attributes.request_date|| null
        this.agency_trans_id = attributes.agency_trans_id|| null
        this.bank_trans_id = attributes.bank_trans_id|| null
        this.cust_firstname = attributes.cust_firstname|| null
        this.cust_lastname = attributes.cust_lastname|| null
        this.cust_address = attributes.cust_address|| null
        this.cust_identification = attributes.cust_identification|| null
        this.cust_phone_number = attributes.cust_phone_number|| null
        this.account_card = attributes.account_card|| null
        this.trans_amount = attributes.trans_amount|| null
        this.trans_fee = attributes.trans_fee|| null
        this.sender_firstname = attributes.sender_firstname|| null
        this.sender_lastname = attributes.sender_lastname|| null
        this.sender_address = attributes.sender_address|| null
        this.sender_identification = attributes.sender_identification|| null
        this.sender_identification_type = attributes.sender_identification_type|| null
        this.sender_birth_country = attributes.sender_birth_country|| null
        this.sender_birth_date = attributes.sender_birth_date?moment(attributes.sender_birth_date):null
        this.sender_fin_inst = attributes.sender_fin_inst|| null
        this.sender_account_card = attributes.sender_account_card|| null
        this.completed = attributes.completed=='1'?true:false
        this.msg_id = attributes.msg_id|| null
        this.msg_creation_datetime = attributes.msg_creation_datetime|| null
        this.send_bank = attributes.send_bank=='1'?true:false
        this.agency_id = attributes.agency_id|| null
        this.bank_id = attributes.bank_id|| null
        this.currency_id = attributes.currency_id|| null
        this.cust_municip_id = attributes.cust_municip_id|| null
        this.cust_prov_id = attributes.cust_prov_id|| null
        this.sender_city_id = attributes.sender_city_id|| null
        this.sender_country_id = attributes.sender_country_id|| null
        this.transaction_state_id = attributes.transaction_state_id|| null
        this.state_source = attributes.state_source|| null
        this.reconcilied_bank = attributes.reconcilied_bank=='1'?true:false
        this.transaction_reference = attributes.transaction_reference|| null
        this.bank_fee = attributes.bank_fee|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.transaction_date = attributes.transaction_date
        this.request_date = attributes.request_date
        this.agency_trans_id = attributes.agency_trans_id
        this.bank_trans_id = attributes.bank_trans_id
        this.cust_firstname = attributes.cust_firstname
        this.cust_lastname = attributes.cust_lastname
        this.cust_address = attributes.cust_address
        this.cust_identification = attributes.cust_identification
        this.cust_phone_number = attributes.cust_phone_number
        this.account_card = attributes.account_card
        this.trans_amount = attributes.trans_amount
        this.trans_fee = attributes.trans_fee
        this.sender_firstname = attributes.sender_firstname
        this.sender_lastname = attributes.sender_lastname
        this.sender_address = attributes.sender_address
        this.sender_identification = attributes.sender_identification
        this.sender_identification_type = attributes.sender_identification_type
        this.sender_birth_country = attributes.sender_birth_country
        this.sender_birth_date = moment(attributes.sender_birth_date).format('YYYY-MM-DD')
        this.sender_fin_inst = attributes.sender_fin_inst
        this.sender_account_card = attributes.sender_account_card
        this.completed = attributes.completed
        this.msg_id = attributes.msg_id
        this.msg_creation_datetime = attributes.msg_creation_datetime
        this.send_bank = attributes.send_bank
        this.agency_id = attributes.agency_id
        this.bank_id = attributes.bank_id
        this.currency_id = attributes.currency_id
        this.cust_municip_id = attributes.cust_municip_id
        this.cust_prov_id = attributes.cust_prov_id
        this.sender_city_id = attributes.sender_city_id
        this.sender_country_id = attributes.sender_country_id
        this.transaction_state_id = attributes.transaction_state_id
        this.state_source = attributes.state_source
        this.reconcilied_bank = attributes.reconcilied_bank
        this.transaction_reference = attributes.transaction_reference
        this.bank_fee = attributes.bank_fee
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

  static columns = columns.columns

    static get url() {
      return url
    };
  
    get url() {
      return url
    };
  
    get_id() {
      return this.id;
    }
    class_name() {
        return 'Payment_transaction'
      }
  

   }

