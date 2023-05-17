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
      lotes_report: {
        id: {
          integer,
        },
        transaction_reference: {
          maxLength: maxLength(13),
        },
        agency_trans_id: {
          maxLength: maxLength(40),
        },
        bank_name: {
          maxLength: maxLength(40),
        },
        bank_trans_id: {
          maxLength: maxLength(13),
        },
        trans_amount: {
        },
        trans_fee: {
        },
      },
    }
    export const feedbacks = {
      lotes_report: {
      id: {
        isUnique: 'This id has been taken' 

      },
      transaction_reference: {
        isUnique: 'This transaction_reference has been taken' 

      },
      agency_trans_id: {
        isUnique: 'This agency_trans_id has been taken' 

      },
      bank_name: {
        isUnique: 'This bank_name has been taken' 

      },
      bank_trans_id: {
        isUnique: 'This bank_trans_id has been taken' 

      },
      trans_amount: {
        isUnique: 'This trans_amount has been taken' 

      },
      trans_fee: {
        isUnique: 'This trans_fee has been taken' 

      },
      },
    }
