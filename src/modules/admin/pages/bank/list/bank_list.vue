<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Bank</h4>
      </div>
      <div class="col-md-5">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home" />
            <router-link :to="{name:'index'}">Inicio</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <span>Admin</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
           <span>Bank</span>
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
        :title="selected_bank.get_id()?'Actualizar bank':'Añadir bank'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <bank_form  :modal=true :model="selected_bank" />
      </a-modal>
      <bank_table
       :columns="columns"
       table_name="Bank"
       id_table="id"
       ref="bank_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import bank_form from "../form/bank_form";
import bank_table from "./bank.table";

export default {
  name: "bank_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.bank_table.load_data()
        },
        setSelectedBank: this.setSelectedBank
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Bank').columns,
      selected_bank: mb.instance( 'Bank'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['fee']},
      mb
    };
  },
  components: {
    bank_form,
    bank_table
  },
  methods: {
    setSelectedBank(model) {
      this.selected_bank = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_bank = mb.instance('Bank');
      this.show_modal_form = false;
      reload_data ? this.$refs.bank_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.bank_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Bank').delete_by_ids(
                _this.$refs.bank_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.bank_table.selectedRowKeys=[];
              _this.$refs.bank_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.bank_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "bank_list.css";
</style>

