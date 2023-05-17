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
      cust_identification_report: {
        id: {
          integer,
        },
        transaction_date: {
        },
        request_date: {
        },
        agency_trans_id: {
          maxLength: maxLength(40),
        },
        bank_trans_id: {
          maxLength: maxLength(13),
        },
        cust_firstname: {
          maxLength: maxLength(50),
        },
        cust_lastname: {
          maxLength: maxLength(50),
        },
        cust_address: {
          maxLength: maxLength(80),
        },
        cust_identification: {
          maxLength: maxLength(11),
        },
        cust_phone_number: {
          maxLength: maxLength(20),
        },
        account_card: {
          maxLength: maxLength(16),
        },
        trans_amount: {
        },
        trans_fee: {
        },
        sender_firstname: {
          maxLength: maxLength(50),
        },
        sender_lastname: {
          maxLength: maxLength(50),
        },
        sender_address: {
          maxLength: maxLength(80),
        },
        sender_identification: {
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
        },
        msg_creation_datetime: {
        },
        send_bank: {
        },
        transaction_reference: {
          maxLength: maxLength(13),
        },
        state_source: {
          maxLength: maxLength(10),
        },
        reconcilied_bank: {
        },
        agency_name: {
          maxLength: maxLength(40),
        },
        agency_code: {
          maxLength: maxLength(100),
        },
        sentai_code: {
          maxLength: maxLength(10),
        },
        issuing_bank: {
          maxLength: maxLength(40),
        },
        bank_code: {
          maxLength: maxLength(10),
        },
        bank_name: {
          maxLength: maxLength(40),
        },
        currency_code: {
          maxLength: maxLength(50),
        },
        cust_municipality_name: {
          maxLength: maxLength(100),
        },
        cust_province_name: {
          maxLength: maxLength(100),
        },
        sender_country_name: {
          maxLength: maxLength(100),
        },
        state_code: {
          maxLength: maxLength(4),
        },
        description_es: {
          maxLength: maxLength(60),
        },
      },
    }
    export const feedbacks = {
      cust_identification_report: {
      id: {
        isUnique: 'This id has been taken' 

      },
      transaction_date: {
        isUnique: 'This transaction_date has been taken' 

      },
      request_date: {
        isUnique: 'This request_date has been taken' 

      },
      agency_trans_id: {
        isUnique: 'This agency_trans_id has been taken' 

      },
      bank_trans_id: {
        isUnique: 'This bank_trans_id has been taken' 

      },
      cust_firstname: {
        isUnique: 'This cust_firstname has been taken' 

      },
      cust_lastname: {
        isUnique: 'This cust_lastname has been taken' 

      },
      cust_address: {
        isUnique: 'This cust_address has been taken' 

      },
      cust_identification: {
        isUnique: 'This cust_identification has been taken' 

      },
      cust_phone_number: {
        isUnique: 'This cust_phone_number has been taken' 

      },
      account_card: {
        isUnique: 'This account_card has been taken' 

      },
      trans_amount: {
        isUnique: 'This trans_amount has been taken' 

      },
      trans_fee: {
        isUnique: 'This trans_fee has been taken' 

      },
      sender_firstname: {
        isUnique: 'This sender_firstname has been taken' 

      },
      sender_lastname: {
        isUnique: 'This sender_lastname has been taken' 

      },
      sender_address: {
        isUnique: 'This sender_address has been taken' 

      },
      sender_identification: {
        isUnique: 'This sender_identification has been taken' 

      },
      sender_identification_type: {
        isUnique: 'This sender_identification_type has been taken' 

      },
      sender_birth_country: {
        isUnique: 'This sender_birth_country has been taken' 

      },
      sender_birth_date: {
        isUnique: 'This sender_birth_date has been taken' 

      },
      sender_fin_inst: {
        isUnique: 'This sender_fin_inst has been taken' 

      },
      sender_account_card: {
        isUnique: 'This sender_account_card has been taken' 

      },
      completed: {
        isUnique: 'This completed has been taken' 

      },
      msg_creation_datetime: {
        isUnique: 'This msg_creation_datetime has been taken' 

      },
      send_bank: {
        isUnique: 'This send_bank has been taken' 

      },
      transaction_reference: {
        isUnique: 'This transaction_reference has been taken' 

      },
      state_source: {
        isUnique: 'This state_source has been taken' 

      },
      reconcilied_bank: {
        isUnique: 'This reconcilied_bank has been taken' 

      },
      agency_name: {
        isUnique: 'This agency_name has been taken' 

      },
      agency_code: {
        isUnique: 'This agency_code has been taken' 

      },
      sentai_code: {
        isUnique: 'This sentai_code has been taken' 

      },
      issuing_bank: {
        isUnique: 'This issuing_bank has been taken' 

      },
      bank_code: {
        isUnique: 'This bank_code has been taken' 

      },
      bank_name: {
        isUnique: 'This bank_name has been taken' 

      },
      currency_code: {
        isUnique: 'This currency_code has been taken' 

      },
      cust_municipality_name: {
        isUnique: 'This cust_municipality_name has been taken' 

      },
      cust_province_name: {
        isUnique: 'This cust_province_name has been taken' 

      },
      sender_country_name: {
        isUnique: 'This sender_country_name has been taken' 

      },
      state_code: {
        isUnique: 'This state_code has been taken' 

      },
      description_es: {
        isUnique: 'This description_es has been taken' 

      },
      },
    }
