<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Deposit_for_payment</h4>
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
           <span>Deposit_for_payment</span>
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
        :title="selected_deposit_for_payment.get_id()?'Actualizar deposit_for_payment':'Añadir deposit_for_payment'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <deposit_for_payment_form  :modal=true :model="selected_deposit_for_payment" />
      </a-modal>
      <deposit_for_payment_table
       :columns="columns"
       table_name="Deposit_for_payment"
       id_table="id"
       ref="deposit_for_payment_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import deposit_for_payment_form from "../form/deposit_for_payment_form";
import deposit_for_payment_table from "./deposit_for_payment.table";

export default {
  name: "deposit_for_payment_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.deposit_for_payment_table.load_data()
        },
        setSelectedDeposit_for_payment: this.setSelectedDeposit_for_payment
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Deposit_for_payment').columns,
      selected_deposit_for_payment: mb.instance( 'Deposit_for_payment'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    deposit_for_payment_form,
    deposit_for_payment_table
  },
  methods: {
    setSelectedDeposit_for_payment(model) {
      this.selected_deposit_for_payment = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_deposit_for_payment = mb.instance('Deposit_for_payment');
      this.show_modal_form = false;
      reload_data ? this.$refs.deposit_for_payment_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.deposit_for_payment_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Deposit_for_payment').delete_by_ids(
                _this.$refs.deposit_for_payment_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.deposit_for_payment_table.selectedRowKeys=[];
              _this.$refs.deposit_for_payment_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.deposit_for_payment_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "deposit_for_payment_list.css";
</style>

