<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Beneficiary_control_amount').feedbacks"
        :vobject="$v"
        nested="beneficiary_control_amount"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_identification<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_identification' v-model="beneficiary_control_amount.cust_identification"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Monthly_received_amount<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='monthly_received_amount' v-model="beneficiary_control_amount.monthly_received_amount"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Agency<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Agency"
              name="agency_id"
              ref="select_agency"
              :successFeed="false"
              idKey="id"
              textKey="agency_name"
              :defaultValue="beneficiary_control_amount.agency_id"
              v-model="beneficiary_control_amount.agency_id"
              :url="mb.statics('Agency').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreateagency">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreateagency = false"
          v-if="showModalCreateagency"
          class="modal-form"
          :title="'Añadir Agency'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <agency_form :model="null" :modal="true" @close_modal="agencyAdded"/>
        </a-modal>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!beneficiary_control_amount.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!beneficiary_control_amount.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import agency_form from '@/modules/admin/pages/agency/form/agency_form';

export default {
  name: "beneficiary_control_amount_form",
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
  validations: mb.statics('Beneficiary_control_amount').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      beneficiary_control_amount: mb.instance( 'Beneficiary_control_amount'),
      showModalCreateagency: false,
      agency_list: [],
    };
  },
  computed: {
    beneficiary_control_amountFeedbacks() {
      return mb.statics('Beneficiary_control_amount').feedbacks;
    },
    button_text() {
      return this.beneficiary_control_amount.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.beneficiary_control_amount = mb.instance( 'Beneficiary_control_amount',this.model);
  },
  components: {
    agency_form,
  },
  methods: {
      openModalCreateagency() {
        this.showModalCreateagency = true;
      },
      agencyAdded(refresh) {
        this.showModalCreateagency = false;
        refresh?this.refreshagency():'';
      },
      async refreshagency() {
        this.loading = true;
        await this.$refs.select_agency.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'beneficiary_control_amount_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.beneficiary_control_amount.get_id() ? "actualizado" : "añadido";
        this.beneficiary_control_amount
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'beneficiary_control_amount_list'}):this.beneficiary_control_amount=mb.instance('Beneficiary_control_amount');
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
@import "beneficiary_control_amount_form.css";
</style>

