/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './fee.columns';

  import * as validation from './fee.validation';

  const url = 'admin/fee';

    export default class Fee extends BaseModel {

       id
       sentai_id
       fee_descriptions

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.sentai_id = attributes.sentai_id|| null
        this.fee_descriptions = attributes.fee_descriptions|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.sentai_id = attributes.sentai_id
        this.fee_descriptions = attributes.fee_descriptions
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
        return 'Fee'
      }
  

   }

