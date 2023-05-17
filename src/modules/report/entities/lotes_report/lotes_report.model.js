/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './lotes_report.columns';

  import * as validation from './lotes_report.validation';

  const url = 'report/lotes_report';

    export default class Lotes_report extends BaseModel {

       id
       transaction_reference
       agency_trans_id
       bank_name
       bank_trans_id
       trans_amount
       trans_fee

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.transaction_reference = attributes.transaction_reference|| null
        this.agency_trans_id = attributes.agency_trans_id|| null
        this.bank_name = attributes.bank_name|| null
        this.bank_trans_id = attributes.bank_trans_id|| null
        this.trans_amount = attributes.trans_amount|| null
        this.trans_fee = attributes.trans_fee|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.transaction_reference = attributes.transaction_reference
        this.agency_trans_id = attributes.agency_trans_id
        this.bank_name = attributes.bank_name
        this.bank_trans_id = attributes.bank_trans_id
        this.trans_amount = attributes.trans_amount
        this.trans_fee = attributes.trans_fee
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
        return 'Lotes_report'
      }
  

   }

