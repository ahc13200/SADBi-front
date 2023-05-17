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
      agency: {
        agency_name: {
          maxLength: maxLength(40),
        },
        language: {
          required,
          maxLength: maxLength(2),
        },
        low_funds_warning: {
          required,
        },
        sentai_code: {
          required,
          maxLength: maxLength(10),
        },
        funds_balance: {
          required,
        },
        funds_work: {
          required,
        },
        state: {
          required,
        },
        accept_reject: {
          required,
        },
        self_sending: {
          required,
        },
        fee_percent: {
        },
        fee_id: {
          integer,
        },
        agency_code: {
          required,
          maxLength: maxLength(100),
        },
        in_accounting: {
          required,
        },
        issuing_bank: {
          maxLength: maxLength(40),
        },
      },
    }
    export const feedbacks = {
      agency: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
