/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './payment_transaction_error.columns';

  import * as validation from './payment_transaction_error.validation';

  const url = 'services/payment_transaction_error';

    export default class Payment_transaction_error extends BaseModel {

       id
       error_date
       field_related
       error_id
       transaction_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.error_date = attributes.error_date|| null
        this.field_related = attributes.field_related|| null
        this.error_id = attributes.error_id|| null
        this.transaction_id = attributes.transaction_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.error_date = attributes.error_date
        this.field_related = attributes.field_related
        this.error_id = attributes.error_id
        this.transaction_id = attributes.transaction_id
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
        return 'Payment_transaction_error'
      }
  

   }

