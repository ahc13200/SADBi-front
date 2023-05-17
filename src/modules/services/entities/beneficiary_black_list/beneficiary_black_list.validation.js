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
      beneficiary_black_list: {
        cust_identification: {
          required,
          maxLength: maxLength(50),
        },
      },
    }
    export const feedbacks = {
      beneficiary_black_list: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
