<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Fee_details').feedbacks"
        :vobject="$v"
        nested="fee_details"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Fee_type<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='fee_type' v-model="fee_details.fee_type"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Range_init</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='range_init' v-model="fee_details.range_init"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Range_end<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='range_end' v-model="fee_details.range_end"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Fee_value<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='fee_value' v-model="fee_details.fee_value"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Fee<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Fee"
              name="fee_id"
              ref="select_fee"
              :successFeed="false"
              idKey="id"
              textKey="sentai_id"
              :defaultValue="fee_details.fee_id"
              v-model="fee_details.fee_id"
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
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!fee_details.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!fee_details.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "fee_details_form",
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
  validations: mb.statics('Fee_details').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      fee_details: mb.instance( 'Fee_details'),
      showModalCreatefee: false,
      fee_list: [],
    };
  },
  computed: {
    fee_detailsFeedbacks() {
      return mb.statics('Fee_details').feedbacks;
    },
    button_text() {
      return this.fee_details.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.fee_details = mb.instance( 'Fee_details',this.model);
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
        this.modal?this.close_modal(null,false):this.$router.push({name: 'fee_details_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.fee_details.get_id() ? "actualizado" : "añadido";
        this.fee_details
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'fee_details_list'}):this.fee_details=mb.instance('Fee_details');
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
@import "fee_details_form.css";
</style>

