<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Rejection_error</h4>
      </div>
      <div class="col-md-5">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home" />
            <router-link :to="{name:'index'}">Inicio</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <span>Services</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
           <span>Rejection_error</span>
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
        :title="selected_rejection_error.get_id()?'Actualizar rejection_error':'Añadir rejection_error'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <rejection_error_form  :modal=true :model="selected_rejection_error" />
      </a-modal>
      <rejection_error_table
       :columns="columns"
       table_name="Rejection_error"
       id_table="id"
       ref="rejection_error_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import rejection_error_form from "../form/rejection_error_form";
import rejection_error_table from "./rejection_error.table";

export default {
  name: "rejection_error_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.rejection_error_table.load_data()
        },
        setSelectedRejection_error: this.setSelectedRejection_error
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Rejection_error').columns,
      selected_rejection_error: mb.instance( 'Rejection_error'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    rejection_error_form,
    rejection_error_table
  },
  methods: {
    setSelectedRejection_error(model) {
      this.selected_rejection_error = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_rejection_error = mb.instance('Rejection_error');
      this.show_modal_form = false;
      reload_data ? this.$refs.rejection_error_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.rejection_error_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Rejection_error').delete_by_ids(
                _this.$refs.rejection_error_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.rejection_error_table.selectedRowKeys=[];
              _this.$refs.rejection_error_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.rejection_error_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "rejection_error_list.css";
</style>

