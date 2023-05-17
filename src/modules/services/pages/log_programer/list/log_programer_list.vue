<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Log_programer</h4>
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
           <span>Log_programer</span>
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
        :title="selected_log_programer.get_id()?'Actualizar log_programer':'Añadir log_programer'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <log_programer_form  :modal=true :model="selected_log_programer" />
      </a-modal>
      <log_programer_table
       :columns="columns"
       table_name="Log_programer"
       id_table="id"
       ref="log_programer_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import log_programer_form from "../form/log_programer_form";
import log_programer_table from "./log_programer.table";

export default {
  name: "log_programer_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.log_programer_table.load_data()
        },
        setSelectedLog_programer: this.setSelectedLog_programer
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Log_programer').columns,
      selected_log_programer: mb.instance( 'Log_programer'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    log_programer_form,
    log_programer_table
  },
  methods: {
    setSelectedLog_programer(model) {
      this.selected_log_programer = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_log_programer = mb.instance('Log_programer');
      this.show_modal_form = false;
      reload_data ? this.$refs.log_programer_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.log_programer_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Log_programer').delete_by_ids(
                _this.$refs.log_programer_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.log_programer_table.selectedRowKeys=[];
              _this.$refs.log_programer_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.log_programer_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "log_programer_list.css";
</style>

