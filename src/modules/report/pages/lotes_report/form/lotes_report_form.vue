<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Lotes_report').feedbacks"
        :vobject="$v"
        nested="lotes_report"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='id' v-model="lotes_report.id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Transaction_reference</label>
        <tc-input placeholder='Ingrese el valor' name='transaction_reference' v-model="lotes_report.transaction_reference"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_trans_id</label>
        <tc-input placeholder='Ingrese el valor' name='agency_trans_id' v-model="lotes_report.agency_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_name</label>
        <tc-input placeholder='Ingrese el valor' name='bank_name' v-model="lotes_report.bank_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_trans_id</label>
        <tc-input placeholder='Ingrese el valor' name='bank_trans_id' v-model="lotes_report.bank_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_amount' v-model="lotes_report.trans_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_fee' v-model="lotes_report.trans_fee"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!lotes_report.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!lotes_report.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "lotes_report_form",
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
  validations: mb.statics('Lotes_report').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      lotes_report: mb.instance( 'Lotes_report'),
    };
  },
  computed: {
    lotes_reportFeedbacks() {
      return mb.statics('Lotes_report').feedbacks;
    },
    button_text() {
      return this.lotes_report.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.lotes_report = mb.instance( 'Lotes_report',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'lotes_report_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.lotes_report.get_id() ? "actualizado" : "añadido";
        this.lotes_report
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'lotes_report_list'}):this.lotes_report=mb.instance('Lotes_report');
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
@import "lotes_report_form.css";
</style>

