<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Sentai_batch_details').feedbacks"
        :vobject="$v"
        nested="sentai_batch_details"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='state' v-model="sentai_batch_details.state"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Batch_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='batch_id' v-model="sentai_batch_details.batch_id"></tc-input>
      </tc-form-item>
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
              :defaultValue="sentai_batch_details.transaction_id"
              v-model="sentai_batch_details.transaction_id"
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
        <a-tooltip placement="topLeft" :title="!sentai_batch_details.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!sentai_batch_details.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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

export default {
  name: "sentai_batch_details_form",
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
  validations: mb.statics('Sentai_batch_details').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      sentai_batch_details: mb.instance( 'Sentai_batch_details'),
      showModalCreatetransaction: false,
      payment_transaction_list: [],
    };
  },
  computed: {
    sentai_batch_detailsFeedbacks() {
      return mb.statics('Sentai_batch_details').feedbacks;
    },
    button_text() {
      return this.sentai_batch_details.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.sentai_batch_details = mb.instance( 'Sentai_batch_details',this.model);
  },
  components: {
    payment_transaction_form,
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
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'sentai_batch_details_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.sentai_batch_details.get_id() ? "actualizado" : "añadido";
        this.sentai_batch_details
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'sentai_batch_details_list'}):this.sentai_batch_details=mb.instance('Sentai_batch_details');
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
@import "sentai_batch_details_form.css";
</style>

