/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './deposit_for_payment.columns';

  import * as validation from './deposit_for_payment.validation';

  const url = 'report/deposit_for_payment';

    export default class Deposit_for_payment extends BaseModel {

       id
       issuing_bank
       agency_name
       bank_name
       total_transaction
       total_amount
       total_fee
       min
       max_date

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.issuing_bank = attributes.issuing_bank|| null
        this.agency_name = attributes.agency_name|| null
        this.bank_name = attributes.bank_name|| null
        this.total_transaction = attributes.total_transaction|| null
        this.total_amount = attributes.total_amount|| null
        this.total_fee = attributes.total_fee|| null
        this.min = attributes.min|| null
        this.max_date = attributes.max_date|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.issuing_bank = attributes.issuing_bank
        this.agency_name = attributes.agency_name
        this.bank_name = attributes.bank_name
        this.total_transaction = attributes.total_transaction
        this.total_amount = attributes.total_amount
        this.total_fee = attributes.total_fee
        this.min = attributes.min
        this.max_date = attributes.max_date
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
        return 'Deposit_for_payment'
      }
  

   }

