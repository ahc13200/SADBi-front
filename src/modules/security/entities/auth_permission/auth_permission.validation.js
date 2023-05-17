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
      auth_permission: {
        name: {
          required,
          maxLength: maxLength(255),
        },
        content_type_id: {
          required,
          integer,
        },
        codename: {
          required,
          maxLength: maxLength(100),
        },
      },
    }
    export const feedbacks = {
      auth_permission: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
