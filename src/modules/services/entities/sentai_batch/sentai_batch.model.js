/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './sentai_batch.columns';

  import * as validation from './sentai_batch.validation';

  const url = 'services/sentai_batch';

    export default class Sentai_batch extends BaseModel {

       id
       send_date
       state
       sentai_trans_no
       agency_id
       sentai_batch_datetime
       sentai_home_amount
       sentai_home_fee
       sentai_trans_amount
       sentai_trans_fee
       sentai_error

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.send_date = attributes.send_date|| null
        this.state = attributes.state|| null
        this.sentai_trans_no = attributes.sentai_trans_no|| null
        this.agency_id = attributes.agency_id|| null
        this.sentai_batch_datetime = attributes.sentai_batch_datetime|| null
        this.sentai_home_amount = attributes.sentai_home_amount|| null
        this.sentai_home_fee = attributes.sentai_home_fee|| null
        this.sentai_trans_amount = attributes.sentai_trans_amount|| null
        this.sentai_trans_fee = attributes.sentai_trans_fee|| null
        this.sentai_error = attributes.sentai_error|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.send_date = attributes.send_date
        this.state = attributes.state
        this.sentai_trans_no = attributes.sentai_trans_no
        this.agency_id = attributes.agency_id
        this.sentai_batch_datetime = attributes.sentai_batch_datetime
        this.sentai_home_amount = attributes.sentai_home_amount
        this.sentai_home_fee = attributes.sentai_home_fee
        this.sentai_trans_amount = attributes.sentai_trans_amount
        this.sentai_trans_fee = attributes.sentai_trans_fee
        this.sentai_error = attributes.sentai_error
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
        return 'Sentai_batch'
      }
  

   }

