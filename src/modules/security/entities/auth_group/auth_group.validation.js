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
      auth_group: {
        name: {
          required,
          maxLength: maxLength(150),
        },
      },
    }
    export const feedbacks = {
      auth_group: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
