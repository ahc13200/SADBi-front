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
      fee: {
        sentai_id: {
          required,
          maxLength: maxLength(256),
        },
        fee_descriptions: {
          required,
          maxLength: maxLength(40),
        },
      },
    }
    export const feedbacks = {
      fee: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
