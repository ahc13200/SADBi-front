/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './sentai_batch_details.columns';

  import * as validation from './sentai_batch_details.validation';

  const url = 'services/sentai_batch_details';

    export default class Sentai_batch_details extends BaseModel {

       id
       state
       batch_id
       transaction_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.state = attributes.state|| null
        this.batch_id = attributes.batch_id|| null
        this.transaction_id = attributes.transaction_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.state = attributes.state
        this.batch_id = attributes.batch_id
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
        return 'Sentai_batch_details'
      }
  

   }

