/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auth_user_user_permissions.columns';

  import * as validation from './auth_user_user_permissions.validation';

  const url = 'security/auth_user_user_permissions';

    export default class Auth_user_user_permissions extends BaseModel {

       id
       user_id
       permission_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.user_id = attributes.user_id|| null
        this.permission_id = attributes.permission_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.user_id = attributes.user_id
        this.permission_id = attributes.permission_id
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
        return 'Auth_user_user_permissions'
      }
  

   }

