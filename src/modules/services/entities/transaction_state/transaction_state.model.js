/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './transaction_state.columns';

  import * as validation from './transaction_state.validation';

  const url = 'services/transaction_state';

    export default class Transaction_state extends BaseModel {

       id
       state_code
       description_es
       description_en

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.state_code = attributes.state_code|| null
        this.description_es = attributes.description_es|| null
        this.description_en = attributes.description_en|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.state_code = attributes.state_code
        this.description_es = attributes.description_es
        this.description_en = attributes.description_en
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
        return 'Transaction_state'
      }
  

   }

