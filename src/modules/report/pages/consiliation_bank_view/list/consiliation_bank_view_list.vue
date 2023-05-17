<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Consiliation_bank_view</h4>
      </div>
      <div class="col-md-5">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home" />
            <router-link :to="{name:'index'}">Inicio</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <span>Report</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
           <span>Consiliation_bank_view</span>
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
        :title="selected_consiliation_bank_view.get_id()?'Actualizar consiliation_bank_view':'Añadir consiliation_bank_view'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <consiliation_bank_view_form  :modal=true :model="selected_consiliation_bank_view" />
      </a-modal>
      <consiliation_bank_view_table
       :columns="columns"
       table_name="Consiliation_bank_view"
       id_table="bank_name"
       ref="consiliation_bank_view_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import consiliation_bank_view_form from "../form/consiliation_bank_view_form";
import consiliation_bank_view_table from "./consiliation_bank_view.table";

export default {
  name: "consiliation_bank_view_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.consiliation_bank_view_table.load_data()
        },
        setSelectedConsiliation_bank_view: this.setSelectedConsiliation_bank_view
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Consiliation_bank_view').columns,
      selected_consiliation_bank_view: mb.instance( 'Consiliation_bank_view'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    consiliation_bank_view_form,
    consiliation_bank_view_table
  },
  methods: {
    setSelectedConsiliation_bank_view(model) {
      this.selected_consiliation_bank_view = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_consiliation_bank_view = mb.instance('Consiliation_bank_view');
      this.show_modal_form = false;
      reload_data ? this.$refs.consiliation_bank_view_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.consiliation_bank_view_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Consiliation_bank_view').delete_by_ids(
                _this.$refs.consiliation_bank_view_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.consiliation_bank_view_table.selectedRowKeys=[];
              _this.$refs.consiliation_bank_view_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.consiliation_bank_view_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "consiliation_bank_view_list.css";
</style>

