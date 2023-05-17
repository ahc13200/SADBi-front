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
      rejection_error: {
        error_code: {
          required,
          maxLength: maxLength(30),
        },
        error_source: {
          required,
          maxLength: maxLength(2),
        },
        description_es: {
          required,
          maxLength: maxLength(60),
        },
        description_en: {
          required,
          maxLength: maxLength(60),
        },
      },
    }
    export const feedbacks = {
      rejection_error: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
