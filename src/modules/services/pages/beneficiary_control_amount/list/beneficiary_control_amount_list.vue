<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Beneficiary_control_amount</h4>
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
           <span>Beneficiary_control_amount</span>
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
        :title="selected_beneficiary_control_amount.get_id()?'Actualizar beneficiary_control_amount':'Añadir beneficiary_control_amount'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <beneficiary_control_amount_form  :modal=true :model="selected_beneficiary_control_amount" />
      </a-modal>
      <beneficiary_control_amount_table
       :columns="columns"
       table_name="Beneficiary_control_amount"
       id_table="id"
       ref="beneficiary_control_amount_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import beneficiary_control_amount_form from "../form/beneficiary_control_amount_form";
import beneficiary_control_amount_table from "./beneficiary_control_amount.table";

export default {
  name: "beneficiary_control_amount_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.beneficiary_control_amount_table.load_data()
        },
        setSelectedBeneficiary_control_amount: this.setSelectedBeneficiary_control_amount
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Beneficiary_control_amount').columns,
      selected_beneficiary_control_amount: mb.instance( 'Beneficiary_control_amount'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['agency']},
      mb
    };
  },
  components: {
    beneficiary_control_amount_form,
    beneficiary_control_amount_table
  },
  methods: {
    setSelectedBeneficiary_control_amount(model) {
      this.selected_beneficiary_control_amount = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_beneficiary_control_amount = mb.instance('Beneficiary_control_amount');
      this.show_modal_form = false;
      reload_data ? this.$refs.beneficiary_control_amount_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.beneficiary_control_amount_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Beneficiary_control_amount').delete_by_ids(
                _this.$refs.beneficiary_control_amount_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.beneficiary_control_amount_table.selectedRowKeys=[];
              _this.$refs.beneficiary_control_amount_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.beneficiary_control_amount_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "beneficiary_control_amount_list.css";
</style>

