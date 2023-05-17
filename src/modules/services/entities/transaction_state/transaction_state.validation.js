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
      transaction_state: {
        state_code: {
          required,
          maxLength: maxLength(4),
        },
        description_es: {
          required,
          maxLength: maxLength(60),
        },
        description_en: {
          required,
          maxLength: maxLength(60),
        },
      },
    }
    export const feedbacks = {
      transaction_state: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
