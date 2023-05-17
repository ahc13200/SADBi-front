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
      beneficiary_control_amount: {
        cust_identification: {
          required,
          maxLength: maxLength(11),
        },
        monthly_received_amount: {
          required,
        },
        agency_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      beneficiary_control_amount: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
