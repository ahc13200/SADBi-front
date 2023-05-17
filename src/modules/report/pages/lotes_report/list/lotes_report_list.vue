<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Lotes_report</h4>
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
           <span>Lotes_report</span>
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
        :title="selected_lotes_report.get_id()?'Actualizar lotes_report':'Añadir lotes_report'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <lotes_report_form  :modal=true :model="selected_lotes_report" />
      </a-modal>
      <lotes_report_table
       :columns="columns"
       table_name="Lotes_report"
       id_table="id"
       ref="lotes_report_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import lotes_report_form from "../form/lotes_report_form";
import lotes_report_table from "./lotes_report.table";

export default {
  name: "lotes_report_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.lotes_report_table.load_data()
        },
        setSelectedLotes_report: this.setSelectedLotes_report
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Lotes_report').columns,
      selected_lotes_report: mb.instance( 'Lotes_report'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    lotes_report_form,
    lotes_report_table
  },
  methods: {
    setSelectedLotes_report(model) {
      this.selected_lotes_report = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_lotes_report = mb.instance('Lotes_report');
      this.show_modal_form = false;
      reload_data ? this.$refs.lotes_report_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.lotes_report_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Lotes_report').delete_by_ids(
                _this.$refs.lotes_report_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.lotes_report_table.selectedRowKeys=[];
              _this.$refs.lotes_report_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.lotes_report_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "lotes_report_list.css";
</style>

