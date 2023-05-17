/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auth_group_permissions.columns';

  import * as validation from './auth_group_permissions.validation';

  const url = 'security/auth_group_permissions';

    export default class Auth_group_permissions extends BaseModel {

       id
       group_id
       permission_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.group_id = attributes.group_id|| null
        this.permission_id = attributes.permission_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.group_id = attributes.group_id
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
        return 'Auth_group_permissions'
      }
  

   }

