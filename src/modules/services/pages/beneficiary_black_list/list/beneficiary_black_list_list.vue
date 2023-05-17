<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Beneficiary_black_list</h4>
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
           <span>Beneficiary_black_list</span>
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
        :title="selected_beneficiary_black_list.get_id()?'Actualizar beneficiary_black_list':'Añadir beneficiary_black_list'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <beneficiary_black_list_form  :modal=true :model="selected_beneficiary_black_list" />
      </a-modal>
      <beneficiary_black_list_table
       :columns="columns"
       table_name="Beneficiary_black_list"
       id_table="id"
       ref="beneficiary_black_list_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import beneficiary_black_list_form from "../form/beneficiary_black_list_form";
import beneficiary_black_list_table from "./beneficiary_black_list.table";

export default {
  name: "beneficiary_black_list_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.beneficiary_black_list_table.load_data()
        },
        setSelectedBeneficiary_black_list: this.setSelectedBeneficiary_black_list
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Beneficiary_black_list').columns,
      selected_beneficiary_black_list: mb.instance( 'Beneficiary_black_list'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:[]},
      mb
    };
  },
  components: {
    beneficiary_black_list_form,
    beneficiary_black_list_table
  },
  methods: {
    setSelectedBeneficiary_black_list(model) {
      this.selected_beneficiary_black_list = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_beneficiary_black_list = mb.instance('Beneficiary_black_list');
      this.show_modal_form = false;
      reload_data ? this.$refs.beneficiary_black_list_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.beneficiary_black_list_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Beneficiary_black_list').delete_by_ids(
                _this.$refs.beneficiary_black_list_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.beneficiary_black_list_table.selectedRowKeys=[];
              _this.$refs.beneficiary_black_list_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.beneficiary_black_list_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "beneficiary_black_list_list.css";
</style>

