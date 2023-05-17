<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Sentai_batch').feedbacks"
        :vobject="$v"
        nested="sentai_batch"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Send_date<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='send_date' v-model="sentai_batch.send_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='state' v-model="sentai_batch.state"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group px-3 col-12">
        <label>Sentai_trans_no</label>
        <tc-input :text_area="true" size="large" name="sentai_trans_no" v-model="sentai_batch.sentai_trans_no"/>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Agency</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Agency"
              name="agency_id"
              ref="select_agency"
              :successFeed="false"
              idKey="id"
              textKey="agency_name"
              :defaultValue="sentai_batch.agency_id"
              v-model="sentai_batch.agency_id"
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
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_batch_datetime</label>
        <tc-input placeholder='Ingrese el valor' name='sentai_batch_datetime' v-model="sentai_batch.sentai_batch_datetime"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_home_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='sentai_home_amount' v-model="sentai_batch.sentai_home_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_home_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='sentai_home_fee' v-model="sentai_batch.sentai_home_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_trans_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='sentai_trans_amount' v-model="sentai_batch.sentai_trans_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sentai_trans_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='sentai_trans_fee' v-model="sentai_batch.sentai_trans_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group px-3 col-12">
        <label>Sentai_error</label>
        <tc-input :text_area="true" size="large" name="sentai_error" v-model="sentai_batch.sentai_error"/>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!sentai_batch.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!sentai_batch.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "sentai_batch_form",
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
  validations: mb.statics('Sentai_batch').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      sentai_batch: mb.instance( 'Sentai_batch'),
      showModalCreateagency: false,
      agency_list: [],
    };
  },
  computed: {
    sentai_batchFeedbacks() {
      return mb.statics('Sentai_batch').feedbacks;
    },
    button_text() {
      return this.sentai_batch.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.sentai_batch = mb.instance( 'Sentai_batch',this.model);
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
        this.modal?this.close_modal(null,false):this.$router.push({name: 'sentai_batch_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.sentai_batch.get_id() ? "actualizado" : "añadido";
        this.sentai_batch
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'sentai_batch_list'}):this.sentai_batch=mb.instance('Sentai_batch');
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
@import "sentai_batch_form.css";
</style>

