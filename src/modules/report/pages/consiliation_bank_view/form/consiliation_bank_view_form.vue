<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Consiliation_bank_view').feedbacks"
        :vobject="$v"
        nested="consiliation_bank_view"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_name</label>
        <tc-input placeholder='Ingrese el valor' name='bank_name' v-model="consiliation_bank_view.bank_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='id' v-model="consiliation_bank_view.id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State_code</label>
        <tc-input placeholder='Ingrese el valor' name='state_code' v-model="consiliation_bank_view.state_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Count</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='count' v-model="consiliation_bank_view.count"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Total_amount</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='total_amount' v-model="consiliation_bank_view.total_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Total_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='total_fee' v-model="consiliation_bank_view.total_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Min</label>
        <tc-input placeholder='Ingrese el valor' name='min' v-model="consiliation_bank_view.min"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Max_date</label>
        <tc-input placeholder='Ingrese el valor' name='max_date' v-model="consiliation_bank_view.max_date"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!consiliation_bank_view.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!consiliation_bank_view.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "consiliation_bank_view_form",
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
  validations: mb.statics('Consiliation_bank_view').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      consiliation_bank_view: mb.instance( 'Consiliation_bank_view'),
    };
  },
  computed: {
    consiliation_bank_viewFeedbacks() {
      return mb.statics('Consiliation_bank_view').feedbacks;
    },
    button_text() {
      return this.consiliation_bank_view.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.consiliation_bank_view = mb.instance( 'Consiliation_bank_view',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'consiliation_bank_view_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.consiliation_bank_view.get_id() ? "actualizado" : "añadido";
        this.consiliation_bank_view
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'consiliation_bank_view_list'}):this.consiliation_bank_view=mb.instance('Consiliation_bank_view');
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
@import "consiliation_bank_view_form.css";
</style>

