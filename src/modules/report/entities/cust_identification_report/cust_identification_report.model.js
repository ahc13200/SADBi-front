/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './cust_identification_report.columns';

  import * as validation from './cust_identification_report.validation';

  import moment from 'moment';

  const url = 'report/cust_identification_report';

    export default class Cust_identification_report extends BaseModel {

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
       msg_creation_datetime
       send_bank
       transaction_reference
       state_source
       reconcilied_bank
       agency_name
       agency_code
       sentai_code
       issuing_bank
       bank_code
       bank_name
       currency_code
       cust_municipality_name
       cust_province_name
       sender_country_name
       state_code
       description_es

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
        this.msg_creation_datetime = attributes.msg_creation_datetime|| null
        this.send_bank = attributes.send_bank=='1'?true:false
        this.transaction_reference = attributes.transaction_reference|| null
        this.state_source = attributes.state_source|| null
        this.reconcilied_bank = attributes.reconcilied_bank=='1'?true:false
        this.agency_name = attributes.agency_name|| null
        this.agency_code = attributes.agency_code|| null
        this.sentai_code = attributes.sentai_code|| null
        this.issuing_bank = attributes.issuing_bank|| null
        this.bank_code = attributes.bank_code|| null
        this.bank_name = attributes.bank_name|| null
        this.currency_code = attributes.currency_code|| null
        this.cust_municipality_name = attributes.cust_municipality_name|| null
        this.cust_province_name = attributes.cust_province_name|| null
        this.sender_country_name = attributes.sender_country_name|| null
        this.state_code = attributes.state_code|| null
        this.description_es = attributes.description_es|| null
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
        this.msg_creation_datetime = attributes.msg_creation_datetime
        this.send_bank = attributes.send_bank
        this.transaction_reference = attributes.transaction_reference
        this.state_source = attributes.state_source
        this.reconcilied_bank = attributes.reconcilied_bank
        this.agency_name = attributes.agency_name
        this.agency_code = attributes.agency_code
        this.sentai_code = attributes.sentai_code
        this.issuing_bank = attributes.issuing_bank
        this.bank_code = attributes.bank_code
        this.bank_name = attributes.bank_name
        this.currency_code = attributes.currency_code
        this.cust_municipality_name = attributes.cust_municipality_name
        this.cust_province_name = attributes.cust_province_name
        this.sender_country_name = attributes.sender_country_name
        this.state_code = attributes.state_code
        this.description_es = attributes.description_es
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
        return 'Cust_identification_report'
      }
  

   }

