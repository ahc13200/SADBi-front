/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './bank.columns';

  import * as validation from './bank.validation';

  const url = 'admin/bank';

    export default class Bank extends BaseModel {

       id
       bank_code
       bank_name
       sentai_code
       self_sending
       fee_id
       cta_deb

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.bank_code = attributes.bank_code|| null
        this.bank_name = attributes.bank_name|| null
        this.sentai_code = attributes.sentai_code|| null
        this.self_sending = attributes.self_sending=='1'?true:false
        this.fee_id = attributes.fee_id|| null
        this.cta_deb = attributes.cta_deb|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.bank_code = attributes.bank_code
        this.bank_name = attributes.bank_name
        this.sentai_code = attributes.sentai_code
        this.self_sending = attributes.self_sending
        this.fee_id = attributes.fee_id
        this.cta_deb = attributes.cta_deb
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
        return 'Bank'
      }
  

   }

