<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Transaction_state</h4>
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
           <span>Transaction_state</span>
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
        :title="selected_transaction_state.get_id()?'Actualizar transaction_state':'Añadir transaction_state'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <transaction_state_form  :modal=true :model="selected_transaction_state" />
      </a-modal>
      <transaction_state_table
       :columns="columns"
       table_name="Transaction_state"
       id_table="id"
       ref="transaction_state_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import transaction_state_form from "../form/transaction_state_form";
import transaction_state_table from "./transaction_state.table";

export default {
  name: "transaction_state_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.transaction_state_table.load_data()
        },
        setSelectedTransaction_state: this.setSelectedTransaction_state
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Transaction_state').columns,
      selected_transaction_state: mb.instance( 'Transaction_state'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    transaction_state_form,
    transaction_state_table
  },
  methods: {
    setSelectedTransaction_state(model) {
      this.selected_transaction_state = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_transaction_state = mb.instance('Transaction_state');
      this.show_modal_form = false;
      reload_data ? this.$refs.transaction_state_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.transaction_state_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Transaction_state').delete_by_ids(
                _this.$refs.transaction_state_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.transaction_state_table.selectedRowKeys=[];
              _this.$refs.transaction_state_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.transaction_state_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "transaction_state_list.css";
</style>

