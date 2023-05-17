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
      bank: {
        bank_code: {
          required,
          maxLength: maxLength(10),
        },
        bank_name: {
          required,
          maxLength: maxLength(40),
        },
        sentai_code: {
          required,
          maxLength: maxLength(10),
        },
        self_sending: {
          required,
        },
        fee_id: {
          integer,
        },
        cta_deb: {
          maxLength: maxLength(50),
        },
      },
    }
    export const feedbacks = {
      bank: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
