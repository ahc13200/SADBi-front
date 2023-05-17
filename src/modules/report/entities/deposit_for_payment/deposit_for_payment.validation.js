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
      deposit_for_payment: {
        id: {
          integer,
        },
        issuing_bank: {
          maxLength: maxLength(40),
        },
        agency_name: {
          maxLength: maxLength(40),
        },
        bank_name: {
          maxLength: maxLength(40),
        },
        total_transaction: {
          integer,
        },
        total_amount: {
        },
        total_fee: {
        },
        min: {
        },
        max_date: {
        },
      },
    }
    export const feedbacks = {
      deposit_for_payment: {
      id: {
        isUnique: 'This id has been taken' 

      },
      issuing_bank: {
        isUnique: 'This issuing_bank has been taken' 

      },
      agency_name: {
        isUnique: 'This agency_name has been taken' 

      },
      bank_name: {
        isUnique: 'This bank_name has been taken' 

      },
      total_transaction: {
        isUnique: 'This total_transaction has been taken' 

      },
      total_amount: {
        isUnique: 'This total_amount has been taken' 

      },
      total_fee: {
        isUnique: 'This total_fee has been taken' 

      },
      min: {
        isUnique: 'This min has been taken' 

      },
      max_date: {
        isUnique: 'This max_date has been taken' 

      },
      },
    }
