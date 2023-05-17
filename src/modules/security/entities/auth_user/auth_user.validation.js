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
      auth_user: {
        password: {
          required,
          maxLength: maxLength(128),
        },
        last_login: {
        },
        is_superuser: {
          required,
        },
        username: {
          required,
          maxLength: maxLength(150),
        },
        first_name: {
          required,
          maxLength: maxLength(150),
        },
        last_name: {
          required,
          maxLength: maxLength(150),
        },
        email: {
          required,
          maxLength: maxLength(254),
        },
        is_staff: {
          required,
        },
        is_active: {
          required,
        },
        date_joined: {
          required,
        },
      },
    }
    export const feedbacks = {
      auth_user: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
