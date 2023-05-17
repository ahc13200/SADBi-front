/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './rejection_error.columns';

  import * as validation from './rejection_error.validation';

  const url = 'services/rejection_error';

    export default class Rejection_error extends BaseModel {

       id
       error_code
       error_source
       description_es
       description_en

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.error_code = attributes.error_code|| null
        this.error_source = attributes.error_source|| null
        this.description_es = attributes.description_es|| null
        this.description_en = attributes.description_en|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.error_code = attributes.error_code
        this.error_source = attributes.error_source
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
        return 'Rejection_error'
      }
  

   }

