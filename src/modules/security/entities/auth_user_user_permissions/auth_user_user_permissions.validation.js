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
      auth_user_user_permissions: {
        user_id: {
          required,
          integer,
        },
        permission_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      auth_user_user_permissions: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
