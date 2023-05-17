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
      currency: {
        currency_name: {
          required,
          maxLength: maxLength(50),
        },
        currency_code: {
          required,
          maxLength: maxLength(50),
        },
      },
    }
    export const feedbacks = {
      currency: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
