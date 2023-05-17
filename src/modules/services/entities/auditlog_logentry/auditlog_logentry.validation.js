import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from 'vuelidate/lib/validators';
import * as mb from "@/helpers/loaders/model.load"

    export const validations = {
      auditlog_logentry: {
        object_pk: {
          required,
          maxLength: maxLength(255),
        },
        object_id: {
          integer,
        },
        object_repr: {
          required,
          maxLength: maxLength(2147483647),
        },
        action: {
          required,
          integer,
        },
        changes: {
          required,
          maxLength: maxLength(2147483647),
        },
        timestamp: {
          required,
        },
        actor_id: {
          integer,
        },
        content_type_id: {
          required,
          integer,
        },
        remote_addr: {
        },
        additional_data: {
        },
        serialized_data: {
        },
      },
    }
    export const feedbacks = {
      auditlog_logentry: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
