<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Cust_identification_report</h4>
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
           <span>Cust_identification_report</span>
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
        :title="selected_cust_identification_report.get_id()?'Actualizar cust_identification_report':'Añadir cust_identification_report'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <cust_identification_report_form  :modal=true :model="selected_cust_identification_report" />
      </a-modal>
      <cust_identification_report_table
       :columns="columns"
       table_name="Cust_identification_report"
       id_table="id"
       ref="cust_identification_report_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import cust_identification_report_form from "../form/cust_identification_report_form";
import cust_identification_report_table from "./cust_identification_report.table";

export default {
  name: "cust_identification_report_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.cust_identification_report_table.load_data()
        },
        setSelectedCust_identification_report: this.setSelectedCust_identification_report
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Cust_identification_report').columns,
      selected_cust_identification_report: mb.instance( 'Cust_identification_report'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    cust_identification_report_form,
    cust_identification_report_table
  },
  methods: {
    setSelectedCust_identification_report(model) {
      this.selected_cust_identification_report = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_cust_identification_report = mb.instance('Cust_identification_report');
      this.show_modal_form = false;
      reload_data ? this.$refs.cust_identification_report_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.cust_identification_report_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Cust_identification_report').delete_by_ids(
                _this.$refs.cust_identification_report_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.cust_identification_report_table.selectedRowKeys=[];
              _this.$refs.cust_identification_report_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.cust_identification_report_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "cust_identification_report_list.css";
</style>

