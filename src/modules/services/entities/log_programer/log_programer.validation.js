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
      log_programer: {
        log_description: {
          required,
          maxLength: maxLength(2147483647),
        },
        trace: {
          required,
          maxLength: maxLength(2147483647),
        },
        created_at: {
          required,
        },
        system: {
          required,
          maxLength: maxLength(20),
        },
      },
    }
    export const feedbacks = {
      log_programer: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
