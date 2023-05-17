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
      country: {
        country_code: {
          required,
          maxLength: maxLength(20),
        },
        country_name: {
          required,
          maxLength: maxLength(100),
        },
      },
    }
    export const feedbacks = {
      country: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
