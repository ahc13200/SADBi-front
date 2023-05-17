/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './municipality.columns';

  import * as validation from './municipality.validation';

  const url = 'services/municipality';

    export default class Municipality extends BaseModel {

       id
       municipality_code
       municipality_name
       province_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.municipality_code = attributes.municipality_code|| null
        this.municipality_name = attributes.municipality_name|| null
        this.province_id = attributes.province_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.municipality_code = attributes.municipality_code
        this.municipality_name = attributes.municipality_name
        this.province_id = attributes.province_id
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
        return 'Municipality'
      }
  

   }

