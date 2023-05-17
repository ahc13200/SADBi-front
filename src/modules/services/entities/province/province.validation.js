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
      province: {
        province_code: {
          required,
          maxLength: maxLength(20),
        },
        province_name: {
          required,
          maxLength: maxLength(100),
        },
        country_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      province: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
