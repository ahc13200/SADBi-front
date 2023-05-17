<template>
  <div>
    <div class="row row-breadcrumb">
      <div class="col-md-6">
        <h4>Listado de Sentai_batch_details</h4>
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
           <span>Sentai_batch_details</span>
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
        :title="selected_sentai_batch_details.get_id()?'Actualizar sentai_batch_details':'Añadir sentai_batch_details'"
        class="modal-form"
        width="55rem"
        :visible="show_modal_form"
        :destroyOnClose="true"
        on-ok="handleOk"
        :header="null"
        :footer="null"
        :maskClosable="false"
      >
        <sentai_batch_details_form  :modal=true :model="selected_sentai_batch_details" />
      </a-modal>
      <sentai_batch_details_table
       :columns="columns"
       table_name="Sentai_batch_details"
       id_table="id"
       ref="sentai_batch_details_table"
       :params_search="params_search"
       :paginate="paginate"
      />
    </div>
  </div>
</template>
<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import sentai_batch_details_form from "../form/sentai_batch_details_form";
import sentai_batch_details_table from "./sentai_batch_details.table";

export default {
  name: "sentai_batch_details_list",
    provide: function(){
      return{
        close_modal: this.onCloseModal,
        show_form: this.show_form,
        load_data: () => {
           this.$refs.sentai_batch_details_table.load_data()
        },
        setSelectedSentai_batch_details: this.setSelectedSentai_batch_details
      }
    },
  data() {
    return {
      data: [],
      self: null,
      columns: mb.statics('Sentai_batch_details').columns,
      selected_sentai_batch_details: mb.instance( 'Sentai_batch_details'),
      show_modal_form: false,
      paginate:false,
      params_search:{relations:['transaction']},
      mb
    };
  },
  components: {
    sentai_batch_details_form,
    sentai_batch_details_table
  },
  methods: {
    setSelectedSentai_batch_details(model) {
      this.selected_sentai_batch_details = model
    },
    onCloseModal(e,reload_data=false) {
      this.selected_sentai_batch_details = mb.instance('Sentai_batch_details');
      this.show_modal_form = false;
      reload_data ? this.$refs.sentai_batch_details_table.load_data() : ''
    },
    show_form() {
      this.show_modal_form = !this.show_modal_form;
    },
    showDeleteConfirm() {
      if (this.$refs.sentai_batch_details_table.selectedRowKeys.length === 0) {
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
            const response = await mb.statics('Sentai_batch_details').delete_by_ids(
                _this.$refs.sentai_batch_details_table.selectedRowKeys
              );
               utils.process_response(response, "deleted");
              _this.$refs.sentai_batch_details_table.selectedRowKeys=[];
              _this.$refs.sentai_batch_details_table.load_data();
            } catch (error) {
              utils.process_error(error);
              _this.$refs.sentai_batch_details_table.selectedRowKeys=[];
            }
        },
        onCancel() {}
      });
    },
  },
};
</script>

<style>
@import "sentai_batch_details_list.css";
</style>

