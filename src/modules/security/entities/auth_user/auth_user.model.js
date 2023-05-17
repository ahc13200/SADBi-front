/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auth_user.columns';

  import * as validation from './auth_user.validation';

  const url = 'security/auth_user';

    export default class Auth_user extends BaseModel {

       id
       password
       last_login
       is_superuser
       username
       first_name
       last_name
       email
       is_staff
       is_active
       date_joined

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.password = attributes.password|| null
        this.last_login = attributes.last_login|| null
        this.is_superuser = attributes.is_superuser=='1'?true:false
        this.username = attributes.username|| null
        this.first_name = attributes.first_name|| null
        this.last_name = attributes.last_name|| null
        this.email = attributes.email|| null
        this.is_staff = attributes.is_staff=='1'?true:false
        this.is_active = attributes.is_active=='1'?true:false
        this.date_joined = attributes.date_joined|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.password = attributes.password
        this.last_login = attributes.last_login
        this.is_superuser = attributes.is_superuser
        this.username = attributes.username
        this.first_name = attributes.first_name
        this.last_name = attributes.last_name
        this.email = attributes.email
        this.is_staff = attributes.is_staff
        this.is_active = attributes.is_active
        this.date_joined = attributes.date_joined
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
        return 'Auth_user'
      }
  

   }

