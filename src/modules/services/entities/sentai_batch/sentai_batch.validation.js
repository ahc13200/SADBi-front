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
      sentai_batch: {
        send_date: {
          required,
        },
        state: {
          required,
          maxLength: maxLength(2),
        },
        sentai_trans_no: {
          maxLength: maxLength(2147483647),
        },
        agency_id: {
          integer,
        },
        sentai_batch_datetime: {
        },
        sentai_home_amount: {
        },
        sentai_home_fee: {
        },
        sentai_trans_amount: {
        },
        sentai_trans_fee: {
        },
        sentai_error: {
          maxLength: maxLength(2147483647),
        },
      },
    }
    export const feedbacks = {
      sentai_batch: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
