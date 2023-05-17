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
      municipality: {
        municipality_code: {
          required,
          maxLength: maxLength(20),
        },
        municipality_name: {
          required,
          maxLength: maxLength(100),
        },
        province_id: {
          required,
          integer,
        },
      },
    }
    export const feedbacks = {
      municipality: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
