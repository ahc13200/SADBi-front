/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './beneficiary_black_list.columns';

  import * as validation from './beneficiary_black_list.validation';

  const url = 'services/beneficiary_black_list';

    export default class Beneficiary_black_list extends BaseModel {

       id
       cust_identification

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.cust_identification = attributes.cust_identification|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.cust_identification = attributes.cust_identification
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
        return 'Beneficiary_black_list'
      }
  

   }

