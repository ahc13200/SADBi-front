<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Fee_details</h4>
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
           <span>Fee_details</span>
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
        :title="selected_fee_details.get_id()?'Actualizar fee_details':'Añadir fee_details'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <fee_details_form  :modal=true :model="selected_fee_details" />
      </a-modal>
      <fee_details_table
       :columns="columns"
       table_name="Fee_details"
       id_table="id"
       ref="fee_details_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import fee_details_form from "../form/fee_details_form";
import fee_details_table from "./fee_details.table";

export default {
  name: "fee_details_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.fee_details_table.load_data()
        },
        setSelectedFee_details: this.setSelectedFee_details
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Fee_details').columns,
      selected_fee_details: mb.instance( 'Fee_details'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['fee']},
      mb
    };
  },
  components: {
    fee_details_form,
    fee_details_table
  },
  methods: {
    setSelectedFee_details(model) {
      this.selected_fee_details = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_fee_details = mb.instance('Fee_details');
      this.show_modal_form = false;
      reload_data ? this.$refs.fee_details_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.fee_details_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Fee_details').delete_by_ids(
                _this.$refs.fee_details_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.fee_details_table.selectedRowKeys=[];
              _this.$refs.fee_details_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.fee_details_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "fee_details_list.css";
</style>

