/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './fee_details.columns';

  import * as validation from './fee_details.validation';

  const url = 'admin/fee_details';

    export default class Fee_details extends BaseModel {

       id
       fee_type
       range_init
       range_end
       fee_value
       fee_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.fee_type = attributes.fee_type|| null
        this.range_init = attributes.range_init|| null
        this.range_end = attributes.range_end|| null
        this.fee_value = attributes.fee_value|| null
        this.fee_id = attributes.fee_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.fee_type = attributes.fee_type
        this.range_init = attributes.range_init
        this.range_end = attributes.range_end
        this.fee_value = attributes.fee_value
        this.fee_id = attributes.fee_id
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
        return 'Fee_details'
      }
  

   }

