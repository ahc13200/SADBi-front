/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './consiliation_bank_view.columns';

  import * as validation from './consiliation_bank_view.validation';

  const url = 'report/consiliation_bank_view';

    export default class Consiliation_bank_view extends BaseModel {

       bank_name
       id
       state_code
       count
       total_amount
       total_fee
       min
       max_date

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.bank_name = attributes.bank_name|| undefined
        this.id = attributes.id|| null
        this.state_code = attributes.state_code|| null
        this.count = attributes.count|| null
        this.total_amount = attributes.total_amount|| null
        this.total_fee = attributes.total_fee|| null
        this.min = attributes.min|| null
        this.max_date = attributes.max_date|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.bank_name = attributes.bank_name
        this.id = attributes.id
        this.state_code = attributes.state_code
        this.count = attributes.count
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
      return this.bank_name;
    }
    class_name() {
        return 'Consiliation_bank_view'
      }
  

   }

