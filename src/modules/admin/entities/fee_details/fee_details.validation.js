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
      fee_details: {
        fee_type: {
          required,
          maxLength: maxLength(1),
        },
        range_init: {
        },
        range_end: {
          required,
        },
        fee_value: {
          required,
        },
        fee_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      fee_details: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
