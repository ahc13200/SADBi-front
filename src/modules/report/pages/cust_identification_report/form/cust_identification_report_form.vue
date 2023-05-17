<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Cust_identification_report').feedbacks"
        :vobject="$v"
        nested="cust_identification_report"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='id' v-model="cust_identification_report.id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Transaction_date</label>
        <tc-input placeholder='Ingrese el valor' name='transaction_date' v-model="cust_identification_report.transaction_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Request_date</label>
        <tc-input placeholder='Ingrese el valor' name='request_date' v-model="cust_identification_report.request_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_trans_id</label>
        <tc-input placeholder='Ingrese el valor' name='agency_trans_id' v-model="cust_identification_report.agency_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_trans_id</label>
        <tc-input placeholder='Ingrese el valor' name='bank_trans_id' v-model="cust_identification_report.bank_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_firstname</label>
        <tc-input placeholder='Ingrese el valor' name='cust_firstname' v-model="cust_identification_report.cust_firstname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_lastname</label>
        <tc-input placeholder='Ingrese el valor' name='cust_lastname' v-model="cust_identification_report.cust_lastname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_address</label>
        <tc-input placeholder='Ingrese el valor' name='cust_address' v-model="cust_identification_report.cust_address"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_identification</label>
        <tc-input placeholder='Ingrese el valor' name='cust_identification' v-model="cust_identification_report.cust_identification"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_phone_number</label>
        <tc-input placeholder='Ingrese el valor' name='cust_phone_number' v-model="cust_identification_report.cust_phone_number"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Account_card</label>
        <tc-input placeholder='Ingrese el valor' name='account_card' v-model="cust_identification_report.account_card"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_amount' v-model="cust_identification_report.trans_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_fee' v-model="cust_identification_report.trans_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_firstname</label>
        <tc-input placeholder='Ingrese el valor' name='sender_firstname' v-model="cust_identification_report.sender_firstname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_lastname</label>
        <tc-input placeholder='Ingrese el valor' name='sender_lastname' v-model="cust_identification_report.sender_lastname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_address</label>
        <tc-input placeholder='Ingrese el valor' name='sender_address' v-model="cust_identification_report.sender_address"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_identification</label>
        <tc-input placeholder='Ingrese el valor' name='sender_identification' v-model="cust_identification_report.sender_identification"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_identification_type</label>
        <tc-input placeholder='Ingrese el valor' name='sender_identification_type' v-model="cust_identification_report.sender_identification_type"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_birth_country</label>
        <tc-input placeholder='Ingrese el valor' name='sender_birth_country' v-model="cust_identification_report.sender_birth_country"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Sender_birth_date</label>
          <div class="d-flex flex-row">
            <tc-date-picker name="sender_birth_date" v-model="cust_identification_report.sender_birth_date"></tc-date-picker>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_fin_inst</label>
        <tc-input placeholder='Ingrese el valor' name='sender_fin_inst' v-model="cust_identification_report.sender_fin_inst"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_account_card</label>
        <tc-input placeholder='Ingrese el valor' name='sender_account_card' v-model="cust_identification_report.sender_account_card"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Completed</label>
          <div>
            <a-switch  v-model="cust_identification_report.completed"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Msg_creation_datetime</label>
        <tc-input placeholder='Ingrese el valor' name='msg_creation_datetime' v-model="cust_identification_report.msg_creation_datetime"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Send_bank</label>
          <div>
            <a-switch  v-model="cust_identification_report.send_bank"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Transaction_reference</label>
        <tc-input placeholder='Ingrese el valor' name='transaction_reference' v-model="cust_identification_report.transaction_reference"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State_source</label>
        <tc-input placeholder='Ingrese el valor' name='state_source' v-model="cust_identification_report.state_source"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Reconcilied_bank</label>
          <div>
            <a-switch  v-model="cust_identification_report.reconcilied_bank"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_name</label>
        <tc-input placeholder='Ingrese el valor' name='agency_name' v-model="cust_identification_report.agency_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_code</label>
        <tc-input placeholder='Ingrese el valor' name='agency_code' v-model="cust_identification_report.agency_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_code</label>
        <tc-input placeholder='Ingrese el valor' name='sentai_code' v-model="cust_identification_report.sentai_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Issuing_bank</label>
        <tc-input placeholder='Ingrese el valor' name='issuing_bank' v-model="cust_identification_report.issuing_bank"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_code</label>
        <tc-input placeholder='Ingrese el valor' name='bank_code' v-model="cust_identification_report.bank_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_name</label>
        <tc-input placeholder='Ingrese el valor' name='bank_name' v-model="cust_identification_report.bank_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Currency_code</label>
        <tc-input placeholder='Ingrese el valor' name='currency_code' v-model="cust_identification_report.currency_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_municipality_name</label>
        <tc-input placeholder='Ingrese el valor' name='cust_municipality_name' v-model="cust_identification_report.cust_municipality_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_province_name</label>
        <tc-input placeholder='Ingrese el valor' name='cust_province_name' v-model="cust_identification_report.cust_province_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_country_name</label>
        <tc-input placeholder='Ingrese el valor' name='sender_country_name' v-model="cust_identification_report.sender_country_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State_code</label>
        <tc-input placeholder='Ingrese el valor' name='state_code' v-model="cust_identification_report.state_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Description_es</label>
        <tc-input placeholder='Ingrese el valor' name='description_es' v-model="cust_identification_report.description_es"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!cust_identification_report.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!cust_identification_report.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Cancelar acción">
          <a-button :disabled="loading"  type="danger" @click="cancel()">Cancel</a-button>
        </a-tooltip>
      </a-button-group>
    </div>
  </div>
</template>

<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load"

export default {
  name: "cust_identification_report_form",
  inject: {
      close_modal: { default: ()=>{} },
      load_data: {default: () => {} }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
      modal: {
        type: Boolean,
        default: false
      },
    popoverPlacement: {
      type: String,
      default: "bottomLeft"
    }
  },
  validations: mb.statics('Cust_identification_report').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      cust_identification_report: mb.instance( 'Cust_identification_report'),
    };
  },
  computed: {
    cust_identification_reportFeedbacks() {
      return mb.statics('Cust_identification_report').feedbacks;
    },
    button_text() {
      return this.cust_identification_report.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.cust_identification_report = mb.instance( 'Cust_identification_report',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'cust_identification_report_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.cust_identification_report.get_id() ? "actualizado" : "añadido";
        this.cust_identification_report
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'cust_identification_report_list'}):this.cust_identification_report=mb.instance('Cust_identification_report');
               }
               this.load_data()
               this.$refs.form.vobject.$reset()

            }
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            utils.process_error(error);
          });
      }
    }
  }
};
</script>

<style scoped>
@import "cust_identification_report_form.css";
</style>

