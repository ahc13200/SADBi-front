<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Municipality</h4>
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
           <span>Municipality</span>
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
        :title="selected_municipality.get_id()?'Actualizar municipality':'Añadir municipality'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <municipality_form  :modal=true :model="selected_municipality" />
      </a-modal>
      <municipality_table
       :columns="columns"
       table_name="Municipality"
       id_table="id"
       ref="municipality_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import municipality_form from "../form/municipality_form";
import municipality_table from "./municipality.table";

export default {
  name: "municipality_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.municipality_table.load_data()
        },
        setSelectedMunicipality: this.setSelectedMunicipality
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Municipality').columns,
      selected_municipality: mb.instance( 'Municipality'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['province']},
      mb
    };
  },
  components: {
    municipality_form,
    municipality_table
  },
  methods: {
    setSelectedMunicipality(model) {
      this.selected_municipality = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_municipality = mb.instance('Municipality');
      this.show_modal_form = false;
      reload_data ? this.$refs.municipality_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.municipality_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Municipality').delete_by_ids(
                _this.$refs.municipality_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.municipality_table.selectedRowKeys=[];
              _this.$refs.municipality_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.municipality_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "municipality_list.css";
</style>

