<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Payment_transaction_error</h4>
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
           <span>Payment_transaction_error</span>
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
        :title="selected_payment_transaction_error.get_id()?'Actualizar payment_transaction_error':'Añadir payment_transaction_error'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <payment_transaction_error_form  :modal=true :model="selected_payment_transaction_error" />
      </a-modal>
      <payment_transaction_error_table
       :columns="columns"
       table_name="Payment_transaction_error"
       id_table="id"
       ref="payment_transaction_error_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import payment_transaction_error_form from "../form/payment_transaction_error_form";
import payment_transaction_error_table from "./payment_transaction_error.table";

export default {
  name: "payment_transaction_error_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.payment_transaction_error_table.load_data()
        },
        setSelectedPayment_transaction_error: this.setSelectedPayment_transaction_error
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Payment_transaction_error').columns,
      selected_payment_transaction_error: mb.instance( 'Payment_transaction_error'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['transaction','error']},
      mb
    };
  },
  components: {
    payment_transaction_error_form,
    payment_transaction_error_table
  },
  methods: {
    setSelectedPayment_transaction_error(model) {
      this.selected_payment_transaction_error = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_payment_transaction_error = mb.instance('Payment_transaction_error');
      this.show_modal_form = false;
      reload_data ? this.$refs.payment_transaction_error_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.payment_transaction_error_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Payment_transaction_error').delete_by_ids(
                _this.$refs.payment_transaction_error_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.payment_transaction_error_table.selectedRowKeys=[];
              _this.$refs.payment_transaction_error_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.payment_transaction_error_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "payment_transaction_error_list.css";
</style>

