/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './beneficiary_control_amount.columns';

  import * as validation from './beneficiary_control_amount.validation';

  const url = 'services/beneficiary_control_amount';

    export default class Beneficiary_control_amount extends BaseModel {

       id
       cust_identification
       monthly_received_amount
       agency_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.cust_identification = attributes.cust_identification|| null
        this.monthly_received_amount = attributes.monthly_received_amount|| null
        this.agency_id = attributes.agency_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.cust_identification = attributes.cust_identification
        this.monthly_received_amount = attributes.monthly_received_amount
        this.agency_id = attributes.agency_id
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
        return 'Beneficiary_control_amount'
      }
  

   }

