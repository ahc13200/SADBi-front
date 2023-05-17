<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Deposit_for_payment').feedbacks"
        :vobject="$v"
        nested="deposit_for_payment"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='id' v-model="deposit_for_payment.id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Issuing_bank</label>
        <tc-input placeholder='Ingrese el valor' name='issuing_bank' v-model="deposit_for_payment.issuing_bank"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_name</label>
        <tc-input placeholder='Ingrese el valor' name='agency_name' v-model="deposit_for_payment.agency_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_name</label>
        <tc-input placeholder='Ingrese el valor' name='bank_name' v-model="deposit_for_payment.bank_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Total_transaction</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='total_transaction' v-model="deposit_for_payment.total_transaction"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Total_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='total_amount' v-model="deposit_for_payment.total_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Total_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='total_fee' v-model="deposit_for_payment.total_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Min</label>
        <tc-input placeholder='Ingrese el valor' name='min' v-model="deposit_for_payment.min"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Max_date</label>
        <tc-input placeholder='Ingrese el valor' name='max_date' v-model="deposit_for_payment.max_date"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!deposit_for_payment.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!deposit_for_payment.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "deposit_for_payment_form",
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
  validations: mb.statics('Deposit_for_payment').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      deposit_for_payment: mb.instance( 'Deposit_for_payment'),
    };
  },
  computed: {
    deposit_for_paymentFeedbacks() {
      return mb.statics('Deposit_for_payment').feedbacks;
    },
    button_text() {
      return this.deposit_for_payment.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.deposit_for_payment = mb.instance( 'Deposit_for_payment',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'deposit_for_payment_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.deposit_for_payment.get_id() ? "actualizado" : "añadido";
        this.deposit_for_payment
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'deposit_for_payment_list'}):this.deposit_for_payment=mb.instance('Deposit_for_payment');
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
@import "deposit_for_payment_form.css";
</style>

