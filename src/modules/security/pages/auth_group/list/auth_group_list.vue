<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Auth_group</h4>
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
           <span>Auth_group</span>
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
        :title="selected_auth_group.get_id()?'Actualizar auth_group':'Añadir auth_group'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <auth_group_form  :modal=true :model="selected_auth_group" />
      </a-modal>
      <auth_group_table
       :columns="columns"
       table_name="Auth_group"
       id_table="id"
       ref="auth_group_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import auth_group_form from "../form/auth_group_form";
import auth_group_table from "./auth_group.table";

export default {
  name: "auth_group_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.auth_group_table.load_data()
        },
        setSelectedAuth_group: this.setSelectedAuth_group
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Auth_group').columns,
      selected_auth_group: mb.instance( 'Auth_group'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    auth_group_form,
    auth_group_table
  },
  methods: {
    setSelectedAuth_group(model) {
      this.selected_auth_group = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_auth_group = mb.instance('Auth_group');
      this.show_modal_form = false;
      reload_data ? this.$refs.auth_group_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.auth_group_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Auth_group').delete_by_ids(
                _this.$refs.auth_group_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.auth_group_table.selectedRowKeys=[];
              _this.$refs.auth_group_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.auth_group_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "auth_group_list.css";
</style>

