<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Auth_user').feedbacks"
        :vobject="$v"
        nested="auth_user"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Password<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='password' v-model="auth_user.password"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Last_login</label>
        <tc-input placeholder='Ingrese el valor' name='last_login' v-model="auth_user.last_login"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Is_superuser<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="auth_user.is_superuser"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Username<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='username' v-model="auth_user.username"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>First_name<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='first_name' v-model="auth_user.first_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Last_name<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='last_name' v-model="auth_user.last_name"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Email<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='email' v-model="auth_user.email"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Is_staff<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="auth_user.is_staff"/>
          </div>
        </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Is_active<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="auth_user.is_active"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Date_joined<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='date_joined' v-model="auth_user.date_joined"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!auth_user.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!auth_user.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  name: "auth_user_form",
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
  validations: mb.statics('Auth_user').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      auth_user: mb.instance( 'Auth_user'),
    };
  },
  computed: {
    auth_userFeedbacks() {
      return mb.statics('Auth_user').feedbacks;
    },
    button_text() {
      return this.auth_user.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.auth_user = mb.instance( 'Auth_user',this.model);
  },
  components: {
  },
  methods: {
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'auth_user_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.auth_user.get_id() ? "actualizado" : "añadido";
        this.auth_user
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'auth_user_list'}):this.auth_user=mb.instance('Auth_user');
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
@import "auth_user_form.css";
</style>

