<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Payment_transaction_error').feedbacks"
        :vobject="$v"
        nested="payment_transaction_error"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Error_date<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='error_date' v-model="payment_transaction_error.error_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Field_related<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='field_related' v-model="payment_transaction_error.field_related"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Rejection_error</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Rejection_error"
              name="error_id"
              ref="select_error"
              :successFeed="false"
              idKey="id"
              textKey="error_code"
              :defaultValue="payment_transaction_error.error_id"
              v-model="payment_transaction_error.error_id"
              :url="mb.statics('Rejection_error').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreateerror">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreateerror = false"
          v-if="showModalCreateerror"
          class="modal-form"
          :title="'Añadir Rejection_error'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <rejection_error_form :model="null" :modal="true" @close_modal="errorAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Payment_transaction<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Payment_transaction"
              name="transaction_id"
              ref="select_transaction"
              :successFeed="false"
              idKey="id"
              textKey="transaction_date"
              :defaultValue="payment_transaction_error.transaction_id"
              v-model="payment_transaction_error.transaction_id"
              :url="mb.statics('Payment_transaction').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatetransaction">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatetransaction = false"
          v-if="showModalCreatetransaction"
          class="modal-form"
          :title="'Añadir Payment_transaction'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <payment_transaction_form :model="null" :modal="true" @close_modal="transactionAdded"/>
        </a-modal>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!payment_transaction_error.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!payment_transaction_error.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import payment_transaction_form from '@/modules/services/pages/payment_transaction/form/payment_transaction_form';
  import rejection_error_form from '@/modules/services/pages/rejection_error/form/rejection_error_form';

export default {
  name: "payment_transaction_error_form",
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
  validations: mb.statics('Payment_transaction_error').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      payment_transaction_error: mb.instance( 'Payment_transaction_error'),
      showModalCreatetransaction: false,
      payment_transaction_list: [],
      showModalCreateerror: false,
      rejection_error_list: [],
    };
  },
  computed: {
    payment_transaction_errorFeedbacks() {
      return mb.statics('Payment_transaction_error').feedbacks;
    },
    button_text() {
      return this.payment_transaction_error.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.payment_transaction_error = mb.instance( 'Payment_transaction_error',this.model);
  },
  components: {
    payment_transaction_form,
    rejection_error_form,
  },
  methods: {
      openModalCreatetransaction() {
        this.showModalCreatetransaction = true;
      },
      transactionAdded(refresh) {
        this.showModalCreatetransaction = false;
        refresh?this.refreshtransaction():'';
      },
      async refreshtransaction() {
        this.loading = true;
        await this.$refs.select_transaction.load();
        this.loading = false;
      },
      openModalCreateerror() {
        this.showModalCreateerror = true;
      },
      errorAdded(refresh) {
        this.showModalCreateerror = false;
        refresh?this.refresherror():'';
      },
      async refresherror() {
        this.loading = true;
        await this.$refs.select_error.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'payment_transaction_error_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.payment_transaction_error.get_id() ? "actualizado" : "añadido";
        this.payment_transaction_error
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'payment_transaction_error_list'}):this.payment_transaction_error=mb.instance('Payment_transaction_error');
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
@import "payment_transaction_error_form.css";
</style>

