/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './currency.columns';

  import * as validation from './currency.validation';

  const url = 'services/currency';

    export default class Currency extends BaseModel {

       id
       currency_name
       currency_code

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.currency_name = attributes.currency_name|| null
        this.currency_code = attributes.currency_code|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.currency_name = attributes.currency_name
        this.currency_code = attributes.currency_code
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
        return 'Currency'
      }
  

   }

