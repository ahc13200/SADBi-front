/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './province.columns';

  import * as validation from './province.validation';

  const url = 'services/province';

    export default class Province extends BaseModel {

       id
       province_code
       province_name
       country_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.province_code = attributes.province_code|| null
        this.province_name = attributes.province_name|| null
        this.country_id = attributes.country_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.province_code = attributes.province_code
        this.province_name = attributes.province_name
        this.country_id = attributes.country_id
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
        return 'Province'
      }
  

   }

