<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Auditlog_logentry').feedbacks"
        :vobject="$v"
        nested="auditlog_logentry"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Object_pk<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='object_pk' v-model="auditlog_logentry.object_pk"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Object_id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='object_id' v-model="auditlog_logentry.object_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group px-3 col-12">
        <label>Object_repr<span class='required_field'>*</span></label>
        <tc-input :text_area="true" size="large" name="object_repr" v-model="auditlog_logentry.object_repr"/>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Action<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='action' v-model="auditlog_logentry.action"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group px-3 col-12">
        <label>Changes<span class='required_field'>*</span></label>
        <tc-input :text_area="true" size="large" name="changes" v-model="auditlog_logentry.changes"/>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Timestamp<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='timestamp' v-model="auditlog_logentry.timestamp"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Actor_id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='actor_id' v-model="auditlog_logentry.actor_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Content_type_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='content_type_id' v-model="auditlog_logentry.content_type_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Remote_addr</label>
        <tc-input placeholder='Ingrese el valor' name='remote_addr' v-model="auditlog_logentry.remote_addr"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Additional_data</label>
        <tc-input placeholder='Ingrese el valor' name='additional_data' v-model="auditlog_logentry.additional_data"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Serialized_data</label>
        <tc-input placeholder='Ingrese el valor' name='serialized_data' v-model="auditlog_logentry.serialized_data"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!auditlog_logentry.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!auditlog_logentry.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "auditlog_logentry_form",
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
  validations: mb.statics('Auditlog_logentry').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      auditlog_logentry: mb.instance( 'Auditlog_logentry'),
    };
  },
  computed: {
    auditlog_logentryFeedbacks() {
      return mb.statics('Auditlog_logentry').feedbacks;
    },
    button_text() {
      return this.auditlog_logentry.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.auditlog_logentry = mb.instance( 'Auditlog_logentry',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'auditlog_logentry_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.auditlog_logentry.get_id() ? "actualizado" : "añadido";
        this.auditlog_logentry
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'auditlog_logentry_list'}):this.auditlog_logentry=mb.instance('Auditlog_logentry');
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
@import "auditlog_logentry_form.css";
</style>

