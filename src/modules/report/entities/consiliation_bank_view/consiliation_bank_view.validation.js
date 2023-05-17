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
      consiliation_bank_view: {
        bank_name: {
          maxLength: maxLength(40),
        },
        id: {
          integer,
        },
        state_code: {
          maxLength: maxLength(4),
        },
        count: {
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
      consiliation_bank_view: {
      bank_name: {
        isUnique: 'This bank_name has been taken' 

      },
      id: {
        isUnique: 'This id has been taken' 

      },
      state_code: {
        isUnique: 'This state_code has been taken' 

      },
      count: {
        isUnique: 'This count has been taken' 

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
