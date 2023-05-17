<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Province</h4>
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
           <span>Province</span>
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
        :title="selected_province.get_id()?'Actualizar province':'Añadir province'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <province_form  :modal=true :model="selected_province" />
      </a-modal>
      <province_table
       :columns="columns"
       table_name="Province"
       id_table="id"
       ref="province_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import province_form from "../form/province_form";
import province_table from "./province.table";

export default {
  name: "province_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.province_table.load_data()
        },
        setSelectedProvince: this.setSelectedProvince
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Province').columns,
      selected_province: mb.instance( 'Province'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['country']},
      mb
    };
  },
  components: {
    province_form,
    province_table
  },
  methods: {
    setSelectedProvince(model) {
      this.selected_province = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_province = mb.instance('Province');
      this.show_modal_form = false;
      reload_data ? this.$refs.province_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.province_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Province').delete_by_ids(
                _this.$refs.province_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.province_table.selectedRowKeys=[];
              _this.$refs.province_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.province_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "province_list.css";
</style>

