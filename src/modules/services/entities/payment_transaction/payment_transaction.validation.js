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
      payment_transaction: {
        transaction_date: {
          required,
        },
        request_date: {
          required,
        },
        agency_trans_id: {
          required,
          maxLength: maxLength(40),
        },
        bank_trans_id: {
          required,
          maxLength: maxLength(13),
        },
        cust_firstname: {
          required,
          maxLength: maxLength(50),
        },
        cust_lastname: {
          required,
          maxLength: maxLength(50),
        },
        cust_address: {
          required,
          maxLength: maxLength(80),
        },
        cust_identification: {
          required,
          maxLength: maxLength(11),
        },
        cust_phone_number: {
          required,
          maxLength: maxLength(20),
        },
        account_card: {
          required,
          maxLength: maxLength(16),
        },
        trans_amount: {
          required,
        },
        trans_fee: {
          required,
        },
        sender_firstname: {
          required,
          maxLength: maxLength(50),
        },
        sender_lastname: {
          required,
          maxLength: maxLength(50),
        },
        sender_address: {
          required,
          maxLength: maxLength(80),
        },
        sender_identification: {
          required,
          maxLength: maxLength(11),
        },
        sender_identification_type: {
          maxLength: maxLength(50),
        },
        sender_birth_country: {
          maxLength: maxLength(50),
        },
        sender_birth_date: {
        },
        sender_fin_inst: {
          maxLength: maxLength(50),
        },
        sender_account_card: {
          maxLength: maxLength(50),
        },
        completed: {
          required,
        },
        msg_id: {
          required,
          maxLength: maxLength(36),
        },
        msg_creation_datetime: {
        },
        send_bank: {
          required,
        },
        agency_id: {
          required,
          integer,
        },
        bank_id: {
          required,
          integer,
        },
        currency_id: {
          integer,
        },
        cust_municip_id: {
          integer,
        },
        cust_prov_id: {
          integer,
        },
        sender_city_id: {
          integer,
        },
        sender_country_id: {
          integer,
        },
        transaction_state_id: {
          required,
          integer,
        },
        state_source: {
          required,
          maxLength: maxLength(10),
        },
        reconcilied_bank: {
          required,
        },
        transaction_reference: {
          required,
          maxLength: maxLength(13),
        },
        bank_fee: {
        },
      },
    }
    export const feedbacks = {
      payment_transaction: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
