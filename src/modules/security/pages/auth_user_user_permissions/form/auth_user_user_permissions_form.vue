<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Auth_user_user_permissions').feedbacks"
        :vobject="$v"
        nested="auth_user_user_permissions"
        ref="form"
        class="form-row"
      >
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Auth_user<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Auth_user"
              name="user_id"
              ref="select_user"
              :successFeed="false"
              idKey="id"
              textKey="password"
              :defaultValue="auth_user_user_permissions.user_id"
              v-model="auth_user_user_permissions.user_id"
              :url="mb.statics('Auth_user').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreateuser">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreateuser = false"
          v-if="showModalCreateuser"
          class="modal-form"
          :title="'Añadir Auth_user'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <auth_user_form :model="null" :modal="true" @close_modal="userAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Auth_permission<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Auth_permission"
              name="permission_id"
              ref="select_permission"
              :successFeed="false"
              idKey="id"
              textKey="name"
              :defaultValue="auth_user_user_permissions.permission_id"
              v-model="auth_user_user_permissions.permission_id"
              :url="mb.statics('Auth_permission').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatepermission">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatepermission = false"
          v-if="showModalCreatepermission"
          class="modal-form"
          :title="'Añadir Auth_permission'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <auth_permission_form :model="null" :modal="true" @close_modal="permissionAdded"/>
        </a-modal>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!auth_user_user_permissions.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!auth_user_user_permissions.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import auth_permission_form from '@/modules/security/pages/auth_permission/form/auth_permission_form';
  import auth_user_form from '@/modules/security/pages/auth_user/form/auth_user_form';

export default {
  name: "auth_user_user_permissions_form",
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
  validations: mb.statics('Auth_user_user_permissions').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      auth_user_user_permissions: mb.instance( 'Auth_user_user_permissions'),
      showModalCreatepermission: false,
      auth_permission_list: [],
      showModalCreateuser: false,
      auth_user_list: [],
    };
  },
  computed: {
    auth_user_user_permissionsFeedbacks() {
      return mb.statics('Auth_user_user_permissions').feedbacks;
    },
    button_text() {
      return this.auth_user_user_permissions.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.auth_user_user_permissions = mb.instance( 'Auth_user_user_permissions',this.model);
  },
  components: {
    auth_permission_form,
    auth_user_form,
  },
  methods: {
      openModalCreatepermission() {
        this.showModalCreatepermission = true;
      },
      permissionAdded(refresh) {
        this.showModalCreatepermission = false;
        refresh?this.refreshpermission():'';
      },
      async refreshpermission() {
        this.loading = true;
        await this.$refs.select_permission.load();
        this.loading = false;
      },
      openModalCreateuser() {
        this.showModalCreateuser = true;
      },
      userAdded(refresh) {
        this.showModalCreateuser = false;
        refresh?this.refreshuser():'';
      },
      async refreshuser() {
        this.loading = true;
        await this.$refs.select_user.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'auth_user_user_permissions_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.auth_user_user_permissions.get_id() ? "actualizado" : "añadido";
        this.auth_user_user_permissions
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'auth_user_user_permissions_list'}):this.auth_user_user_permissions=mb.instance('Auth_user_user_permissions');
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
@import "auth_user_user_permissions_form.css";
</style>

