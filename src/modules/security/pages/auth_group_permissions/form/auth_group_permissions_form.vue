<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Auth_group_permissions').feedbacks"
        :vobject="$v"
        nested="auth_group_permissions"
        ref="form"
        class="form-row"
      >
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Auth_group<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Auth_group"
              name="group_id"
              ref="select_group"
              :successFeed="false"
              idKey="id"
              textKey="name"
              :defaultValue="auth_group_permissions.group_id"
              v-model="auth_group_permissions.group_id"
              :url="mb.statics('Auth_group').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreategroup">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreategroup = false"
          v-if="showModalCreategroup"
          class="modal-form"
          :title="'Añadir Auth_group'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <auth_group_form :model="null" :modal="true" @close_modal="groupAdded"/>
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
              :defaultValue="auth_group_permissions.permission_id"
              v-model="auth_group_permissions.permission_id"
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
        <a-tooltip placement="topLeft" :title="!auth_group_permissions.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!auth_group_permissions.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import auth_group_form from '@/modules/security/pages/auth_group/form/auth_group_form';
  import auth_permission_form from '@/modules/security/pages/auth_permission/form/auth_permission_form';

export default {
  name: "auth_group_permissions_form",
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
  validations: mb.statics('Auth_group_permissions').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      auth_group_permissions: mb.instance( 'Auth_group_permissions'),
      showModalCreategroup: false,
      auth_group_list: [],
      showModalCreatepermission: false,
      auth_permission_list: [],
    };
  },
  computed: {
    auth_group_permissionsFeedbacks() {
      return mb.statics('Auth_group_permissions').feedbacks;
    },
    button_text() {
      return this.auth_group_permissions.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.auth_group_permissions = mb.instance( 'Auth_group_permissions',this.model);
  },
  components: {
    auth_group_form,
    auth_permission_form,
  },
  methods: {
      openModalCreategroup() {
        this.showModalCreategroup = true;
      },
      groupAdded(refresh) {
        this.showModalCreategroup = false;
        refresh?this.refreshgroup():'';
      },
      async refreshgroup() {
        this.loading = true;
        await this.$refs.select_group.load();
        this.loading = false;
      },
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
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'auth_group_permissions_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.auth_group_permissions.get_id() ? "actualizado" : "añadido";
        this.auth_group_permissions
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'auth_group_permissions_list'}):this.auth_group_permissions=mb.instance('Auth_group_permissions');
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
@import "auth_group_permissions_form.css";
</style>

