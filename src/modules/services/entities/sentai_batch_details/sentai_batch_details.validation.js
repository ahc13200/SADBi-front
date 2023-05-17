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
      sentai_batch_details: {
        state: {
          required,
          maxLength: maxLength(2),
        },
        batch_id: {
          required,
          integer,
        },
        transaction_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      sentai_batch_details: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
