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
      payment_transaction_error: {
        error_date: {
          required,
        },
        field_related: {
          required,
          maxLength: maxLength(35),
        },
        error_id: {
          integer,
        },
        transaction_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      payment_transaction_error: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
