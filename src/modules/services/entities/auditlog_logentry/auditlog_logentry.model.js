/**Generate by ASGENS
*@author Charlietyn 
*@date Sun May 14 14:30:00 GMT-04:00 2023  
*@time Sun May 14 14:30:00 GMT-04:00 2023  
*/
  import BaseModel from '@/core/base/base.model';

  import * as columns from './auditlog_logentry.columns';

  import * as validation from './auditlog_logentry.validation';

  const url = 'services/auditlog_logentry';

    export default class Auditlog_logentry extends BaseModel {

       id
       object_pk
       object_id
       object_repr
       action
       changes
       timestamp
       actor_id
       content_type_id
       remote_addr
       additional_data
       serialized_data

    constructor(attributes = null) {
      super();
      if (attributes != null) {

        this.id = attributes.id|| undefined
        this.object_pk = attributes.object_pk|| null
        this.object_id = attributes.object_id|| null
        this.object_repr = attributes.object_repr|| null
        this.action = attributes.action|| null
        this.changes = attributes.changes|| null
        this.timestamp = attributes.timestamp|| null
        this.actor_id = attributes.actor_id|| null
        this.content_type_id = attributes.content_type_id|| null
        this.remote_addr = attributes.remote_addr|| null
        this.additional_data = attributes.additional_data|| null
        this.serialized_data = attributes.serialized_data|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {

        this.id = attributes.id
        this.object_pk = attributes.object_pk
        this.object_id = attributes.object_id
        this.object_repr = attributes.object_repr
        this.action = attributes.action
        this.changes = attributes.changes
        this.timestamp = attributes.timestamp
        this.actor_id = attributes.actor_id
        this.content_type_id = attributes.content_type_id
        this.remote_addr = attributes.remote_addr
        this.additional_data = attributes.additional_data
        this.serialized_data = attributes.serialized_data
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
        return 'Auditlog_logentry'
      }
  

   }

