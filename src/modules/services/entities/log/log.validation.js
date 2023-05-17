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
      log: {
        log_description: {
          required,
          maxLength: maxLength(2147483647),
        },
      },
    }
    export const feedbacks = {
      log: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
