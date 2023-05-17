<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Auth_user</h4>
      </div>
      <div class="col-md-5">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home" />
            <router-link :to="{name:'index'}">Inicio</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <span>Security</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
           <span>Auth_user</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
       </div>
      </div>
    <div class="container">
    <div>
      <div class="row">
        <div class="col-md-6">
          <a-button-group style="margin-bottom: 10px">
            <a-tooltip placement="topLeft" title="Añadir nuevo elemento">
              <a-button icon="plus" type="primary" @click="show_form">Añadir</a-button>
            </a-tooltip>
            <a-tooltip placement="topLeft" title="Eliminar elementos seleccionados">
              <a-button icon="delete" type="danger" @click="showDeleteConfirm">Eliminar</a-button>
            </a-tooltip>
          </a-button-group>
        </div>
        <div class="col-md-6" style="text-align: end;">
        </div>
      </div>
     </div>
    </div>
   <div>
      <a-modal
        @cancel="onCloseModal"
        :title="selected_auth_user.get_id()?'Actualizar auth_user':'Añadir auth_user'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <auth_user_form  :modal=true :model="selected_auth_user" />
      </a-modal>
      <auth_user_table
       :columns="columns"
       table_name="Auth_user"
       id_table="id"
       ref="auth_user_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import auth_user_form from "../form/auth_user_form";
import auth_user_table from "./auth_user.table";

export default {
  name: "auth_user_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.auth_user_table.load_data()
        },
        setSelectedAuth_user: this.setSelectedAuth_user
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Auth_user').columns,
      selected_auth_user: mb.instance( 'Auth_user'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    auth_user_form,
    auth_user_table
  },
  methods: {
    setSelectedAuth_user(model) {
      this.selected_auth_user = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_auth_user = mb.instance('Auth_user');
      this.show_modal_form = false;
      reload_data ? this.$refs.auth_user_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.auth_user_table.selectedRowKeys.length === 0) {
        utils.openNotificationWithIcon(
          "error",
          "Eliminar elementos seleccionados",
          "Debe seleccionar al menos un elemento"
        );
        return;
      }
      let _this = this;
      this.$confirm({
        title: "Eliminar elementos seleccionados?",
        icon: "delete",
        // icon:()=>{return ( <a-icon type="delete" style="color:red"/> )},
        okText: "Si",
        okType: "danger",
        class: "delete_confirm",
        cancelText: "No",
        async onOk() {
          try {
            const response = await mb.statics('Auth_user').delete_by_ids(
                _this.$refs.auth_user_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.auth_user_table.selectedRowKeys=[];
              _this.$refs.auth_user_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.auth_user_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "auth_user_list.css";
</style>

