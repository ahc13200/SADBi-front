/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auth_user_groups.columns';

  import * as validation from './auth_user_groups.validation';

  const url = 'security/auth_user_groups';

    export default class Auth_user_groups extends BaseModel {

       id
       user_id
       group_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.user_id = attributes.user_id|| null
        this.group_id = attributes.group_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.user_id = attributes.user_id
        this.group_id = attributes.group_id
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
        return 'Auth_user_groups'
      }
  

   }

