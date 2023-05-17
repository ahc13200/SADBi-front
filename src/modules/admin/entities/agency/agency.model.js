/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './agency.columns';

  import * as validation from './agency.validation';

  const url = 'admin/agency';

    export default class Agency extends BaseModel {

       id
       agency_name
       language
       low_funds_warning
       sentai_code
       funds_balance
       funds_work
       state
       accept_reject
       self_sending
       fee_percent
       fee_id
       agency_code
       in_accounting
       issuing_bank

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.agency_name = attributes.agency_name|| null
        this.language = attributes.language|| null
        this.low_funds_warning = attributes.low_funds_warning|| null
        this.sentai_code = attributes.sentai_code|| null
        this.funds_balance = attributes.funds_balance|| null
        this.funds_work = attributes.funds_work|| null
        this.state = attributes.state=='1'?true:false
        this.accept_reject = attributes.accept_reject=='1'?true:false
        this.self_sending = attributes.self_sending=='1'?true:false
        this.fee_percent = attributes.fee_percent|| null
        this.fee_id = attributes.fee_id|| null
        this.agency_code = attributes.agency_code|| null
        this.in_accounting = attributes.in_accounting=='1'?true:false
        this.issuing_bank = attributes.issuing_bank|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.agency_name = attributes.agency_name
        this.language = attributes.language
        this.low_funds_warning = attributes.low_funds_warning
        this.sentai_code = attributes.sentai_code
        this.funds_balance = attributes.funds_balance
        this.funds_work = attributes.funds_work
        this.state = attributes.state
        this.accept_reject = attributes.accept_reject
        this.self_sending = attributes.self_sending
        this.fee_percent = attributes.fee_percent
        this.fee_id = attributes.fee_id
        this.agency_code = attributes.agency_code
        this.in_accounting = attributes.in_accounting
        this.issuing_bank = attributes.issuing_bank
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
        return 'Agency'
      }
  

   }

