/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './log_programer.columns';

  import * as validation from './log_programer.validation';

  const url = 'services/log_programer';

    export default class Log_programer extends BaseModel {

       id
       log_description
       trace
       created_at
       system

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.log_description = attributes.log_description|| null
        this.trace = attributes.trace|| null
        this.created_at = attributes.created_at|| null
        this.system = attributes.system|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.log_description = attributes.log_description
        this.trace = attributes.trace
        this.created_at = attributes.created_at
        this.system = attributes.system
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
        return 'Log_programer'
      }
  

   }

