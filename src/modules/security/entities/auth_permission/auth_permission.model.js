/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auth_permission.columns';

  import * as validation from './auth_permission.validation';

  const url = 'security/auth_permission';

    export default class Auth_permission extends BaseModel {

       id
       name
       content_type_id
       codename

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.content_type_id = attributes.content_type_id|| null
        this.codename = attributes.codename|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.name = attributes.name
        this.content_type_id = attributes.content_type_id
        this.codename = attributes.codename
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
        return 'Auth_permission'
      }
  

   }

