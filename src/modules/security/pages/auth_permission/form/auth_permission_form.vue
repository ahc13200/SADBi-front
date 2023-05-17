<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Auth_permission').feedbacks"
        :vobject="$v"
        nested="auth_permission"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Name<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='name' v-model="auth_permission.name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Content_type_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='content_type_id' v-model="auth_permission.content_type_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Codename<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='codename' v-model="auth_permission.codename"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!auth_permission.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!auth_permission.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "auth_permission_form",
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
  validations: mb.statics('Auth_permission').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      auth_permission: mb.instance( 'Auth_permission'),
    };
  },
  computed: {
    auth_permissionFeedbacks() {
      return mb.statics('Auth_permission').feedbacks;
    },
    button_text() {
      return this.auth_permission.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.auth_permission = mb.instance( 'Auth_permission',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'auth_permission_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.auth_permission.get_id() ? "actualizado" : "añadido";
        this.auth_permission
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'auth_permission_list'}):this.auth_permission=mb.instance('Auth_permission');
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
@import "auth_permission_form.css";
</style>

