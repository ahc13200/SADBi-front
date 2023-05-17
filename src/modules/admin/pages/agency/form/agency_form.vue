<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Agency').feedbacks"
        :vobject="$v"
        nested="agency"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_name</label>
        <tc-input placeholder='Ingrese el valor' name='agency_name' v-model="agency.agency_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Language<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='language' v-model="agency.language"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Low_funds_warning<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='low_funds_warning' v-model="agency.low_funds_warning"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_code<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='sentai_code' v-model="agency.sentai_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Funds_balance<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='funds_balance' v-model="agency.funds_balance"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Funds_work<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='funds_work' v-model="agency.funds_work"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>State<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="agency.state"/>
          </div>
        </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Accept_reject<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="agency.accept_reject"/>
          </div>
        </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Self_sending<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="agency.self_sending"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Fee_percent</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='fee_percent' v-model="agency.fee_percent"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Fee</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Fee"
              name="fee_id"
              ref="select_fee"
              :successFeed="false"
              idKey="id"
              textKey="sentai_id"
              :defaultValue="agency.fee_id"
              v-model="agency.fee_id"
              :url="mb.statics('Fee').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatefee">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatefee = false"
          v-if="showModalCreatefee"
          class="modal-form"
          :title="'Añadir Fee'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <fee_form :model="null" :modal="true" @close_modal="feeAdded"/>
        </a-modal>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_code<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='agency_code' v-model="agency.agency_code"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>In_accounting<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="agency.in_accounting"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Issuing_bank</label>
        <tc-input placeholder='Ingrese el valor' name='issuing_bank' v-model="agency.issuing_bank"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!agency.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!agency.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import fee_form from '@/modules/admin/pages/fee/form/fee_form';

export default {
  name: "agency_form",
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
  validations: mb.statics('Agency').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      agency: mb.instance( 'Agency'),
      showModalCreatefee: false,
      fee_list: [],
    };
  },
  computed: {
    agencyFeedbacks() {
      return mb.statics('Agency').feedbacks;
    },
    button_text() {
      return this.agency.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.agency = mb.instance( 'Agency',this.model);
  },
  components: {
    fee_form,
  },
  methods: {
      openModalCreatefee() {
        this.showModalCreatefee = true;
      },
      feeAdded(refresh) {
        this.showModalCreatefee = false;
        refresh?this.refreshfee():'';
      },
      async refreshfee() {
        this.loading = true;
        await this.$refs.select_fee.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'agency_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.agency.get_id() ? "actualizado" : "añadido";
        this.agency
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'agency_list'}):this.agency=mb.instance('Agency');
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
@import "agency_form.css";
</style>

