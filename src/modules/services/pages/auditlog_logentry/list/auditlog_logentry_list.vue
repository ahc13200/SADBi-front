<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Auditlog_logentry</h4>
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
           <span>Auditlog_logentry</span>
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
        :title="selected_auditlog_logentry.get_id()?'Actualizar auditlog_logentry':'Añadir auditlog_logentry'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <auditlog_logentry_form  :modal=true :model="selected_auditlog_logentry" />
      </a-modal>
      <auditlog_logentry_table
       :columns="columns"
       table_name="Auditlog_logentry"
       id_table="id"
       ref="auditlog_logentry_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import auditlog_logentry_form from "../form/auditlog_logentry_form";
import auditlog_logentry_table from "./auditlog_logentry.table";

export default {
  name: "auditlog_logentry_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.auditlog_logentry_table.load_data()
        },
        setSelectedAuditlog_logentry: this.setSelectedAuditlog_logentry
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Auditlog_logentry').columns,
      selected_auditlog_logentry: mb.instance( 'Auditlog_logentry'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    auditlog_logentry_form,
    auditlog_logentry_table
  },
  methods: {
    setSelectedAuditlog_logentry(model) {
      this.selected_auditlog_logentry = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_auditlog_logentry = mb.instance('Auditlog_logentry');
      this.show_modal_form = false;
      reload_data ? this.$refs.auditlog_logentry_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.auditlog_logentry_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Auditlog_logentry').delete_by_ids(
                _this.$refs.auditlog_logentry_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.auditlog_logentry_table.selectedRowKeys=[];
              _this.$refs.auditlog_logentry_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.auditlog_logentry_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "auditlog_logentry_list.css";
</style>

