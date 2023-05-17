<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Rejection_error').feedbacks"
        :vobject="$v"
        nested="rejection_error"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Error_code<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='error_code' v-model="rejection_error.error_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Error_source<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='error_source' v-model="rejection_error.error_source"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Description_es<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='description_es' v-model="rejection_error.description_es"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Description_en<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='description_en' v-model="rejection_error.description_en"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!rejection_error.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!rejection_error.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "rejection_error_form",
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
  validations: mb.statics('Rejection_error').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      rejection_error: mb.instance( 'Rejection_error'),
    };
  },
  computed: {
    rejection_errorFeedbacks() {
      return mb.statics('Rejection_error').feedbacks;
    },
    button_text() {
      return this.rejection_error.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.rejection_error = mb.instance( 'Rejection_error',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'rejection_error_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.rejection_error.get_id() ? "actualizado" : "añadido";
        this.rejection_error
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'rejection_error_list'}):this.rejection_error=mb.instance('Rejection_error');
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
@import "rejection_error_form.css";
</style>

