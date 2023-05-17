<template>
  <a-table
      :columns="columns"
      :rowKey="record => record[id_table]"
      :dataSource="data"
      :rowSelection="show_selection?rowSelection:null"
      :loading="loading"
      :pagination="pagination.$data"
      :scroll="{ x: '100%' }"
      @change="change_table"
  >
    <template slot="title">
      <div class="row" v-if="visible_heading">
           <div class="form-group col-md-6 ml-3">
             <div class="input-group mb-3">
               <a-tooltip placement="topLeft" title="Buscar..">
                 <tc-input
                   type="text"
                   class="form-control-filter"
                   v-model="filter"
                   placeholder="Buscar"
                   aria-label
                   :debounce="paginate"
                   @input="update_filter_debounce"
                 />
               </a-tooltip>
               <a-tooltip placement="topLeft" title="Limpiar Filtros">
                   <a-button
                     style="text-align: end"
                     class="rounded"
                     type="primary"
                     @click="filter=''"
                   >
                     <i class="fa fa-eraser" style="margin-right: 10px" />Limpiar
                   </a-button>
               </a-tooltip>
             </div>
      </div>
        <div v-if="show_selection" class="col-md-3" style="text-align: end">
          <p class="export_table" >
            Elementos seleccionados  {{ selectedRowKeys.length }}/{{ data.length }}
          </p>
        </div>
        <div class="col-md-2">
           <a-tooltip placement="topLeft" class="export_table" title="Exportar">
               <a-dropdown-button style="">
                 <a-icon type="export"/> 
                 <a-menu slot="overlay">
                   <a-menu-item key="1" @click="exportToExcel">
                        <a-icon type="file-excel" theme="twoTone" twoToneColor="#52c41a"/>
                     EXCEL
                   </a-menu-item>
                   <a-menu-item key="2">
                     <a-icon type="file-pdf" theme="twoTone" twoToneColor="#c41c33"/>
                     PDF
                   </a-menu-item>
                   <a-menu-item key="3" @click="exportToCSV">
                     <a-icon type="file-text" theme="twoTone" twoToneColor="#2771c4"/>
                     CSV
                   </a-menu-item>
                    </a-menu>
               </a-dropdown-button>
           </a-tooltip>
        </div>
      </div>
    </template>
    <a slot="action" v-if="visible_actions" slot-scope="record" href="javascript:;">
      <action_buttons 
       :object="record" 
       :visible_view="visible_view"
       :visible_edit="visible_edit"
       :visible_delete="visible_delete"
       :v_instance="self"
       :class_name="selected_model.class_name()"
       />
    </a>

    <slot :slot="'id'" slot-scope='record' name='id' :record='record'/>
    <slot :slot="'transaction_date'" slot-scope='record' name='transaction_date' :record='record'/>
    <slot :slot="'request_date'" slot-scope='record' name='request_date' :record='record'/>
    <slot :slot="'agency_trans_id'" slot-scope='record' name='agency_trans_id' :record='record'/>
    <slot :slot="'bank_trans_id'" slot-scope='record' name='bank_trans_id' :record='record'/>
    <slot :slot="'cust_firstname'" slot-scope='record' name='cust_firstname' :record='record'/>
    <slot :slot="'cust_lastname'" slot-scope='record' name='cust_lastname' :record='record'/>
    <slot :slot="'cust_address'" slot-scope='record' name='cust_address' :record='record'/>
    <slot :slot="'cust_identification'" slot-scope='record' name='cust_identification' :record='record'/>
    <slot :slot="'cust_phone_number'" slot-scope='record' name='cust_phone_number' :record='record'/>
    <slot :slot="'account_card'" slot-scope='record' name='account_card' :record='record'/>
    <slot :slot="'trans_amount'" slot-scope='record' name='trans_amount' :record='record'/>
    <slot :slot="'trans_fee'" slot-scope='record' name='trans_fee' :record='record'/>
    <slot :slot="'sender_firstname'" slot-scope='record' name='sender_firstname' :record='record'/>
    <slot :slot="'sender_lastname'" slot-scope='record' name='sender_lastname' :record='record'/>
    <slot :slot="'sender_address'" slot-scope='record' name='sender_address' :record='record'/>
    <slot :slot="'sender_identification'" slot-scope='record' name='sender_identification' :record='record'/>
    <slot :slot="'sender_identification_type'" slot-scope='record' name='sender_identification_type' :record='record'/>
    <slot :slot="'sender_birth_country'" slot-scope='record' name='sender_birth_country' :record='record'/>
    <slot :slot="'sender_birth_date'" slot-scope='record' name='sender_birth_date' :record='record'/>
    <slot :slot="'sender_fin_inst'" slot-scope='record' name='sender_fin_inst' :record='record'/>
    <slot :slot="'sender_account_card'" slot-scope='record' name='sender_account_card' :record='record'/>
    <slot :slot="'completed'" slot-scope='record' name='completed' :record='record'/>
    <slot :slot="'msg_id'" slot-scope='record' name='msg_id' :record='record'/>
    <slot :slot="'msg_creation_datetime'" slot-scope='record' name='msg_creation_datetime' :record='record'/>
    <slot :slot="'send_bank'" slot-scope='record' name='send_bank' :record='record'/>
    <slot :slot="'agency_id'" slot-scope='record' name='agency_id' :record='record'/>
    <slot :slot="'bank_id'" slot-scope='record' name='bank_id' :record='record'/>
    <slot :slot="'currency_id'" slot-scope='record' name='currency_id' :record='record'/>
    <slot :slot="'cust_municip_id'" slot-scope='record' name='cust_municip_id' :record='record'/>
    <slot :slot="'cust_prov_id'" slot-scope='record' name='cust_prov_id' :record='record'/>
    <slot :slot="'sender_city_id'" slot-scope='record' name='sender_city_id' :record='record'/>
    <slot :slot="'sender_country_id'" slot-scope='record' name='sender_country_id' :record='record'/>
    <slot :slot="'transaction_state_id'" slot-scope='record' name='transaction_state_id' :record='record'/>
    <slot :slot="'state_source'" slot-scope='record' name='state_source' :record='record'/>
    <slot :slot="'reconcilied_bank'" slot-scope='record' name='reconcilied_bank' :record='record'/>
    <slot :slot="'transaction_reference'" slot-scope='record' name='transaction_reference' :record='record'/>
    <slot :slot="'bank_fee'" slot-scope='record' name='bank_fee' :record='record'/>
  </a-table>
</template>

<script>
import action_buttons from "@/core/shared/table/action_buttons/action_buttons";
import vantdpagination from "@/core/shared/table/pagination/antd_pagination";
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load";
import Vue from "vue";

export default {
  name: "payment_transaction_table",
  components: {action_buttons},
  provide: function(){
    return{
      load_data: this.load_data,
    }
  },
  inject: {
    close_modal: {
      default: () => {
      }
    },
    show_form: {
      default: () => {
      }
    },
    setSelectedPayment_transaction: {
      default: () => {
      }
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    show_selection:{
      type:Boolean,
      default:true
    },
    type_selection: {
      type: String,
      default: 'checkbox'
    },
    hide_default_selection: {
      type: Boolean,
      default: true
    },    params_search: {
      type: Object,
      default: () => {
      }
    },
    paginate: {
      type: Boolean,
      default: false
    },
    visible_heading: {
      type: Boolean,
      default: true
    },
    load_init: {
      type: Boolean,
      default: true
    },
    table_name: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: null
    },
    id_table: {
      type: String,
      default: ""
    },

    visible_actions:{
      type:Boolean,
      default:true
    },
    visible_edit:{
      type:Boolean,
      default:true
    },
    visible_delete:{
      type:Boolean,
      default:true
    },
    visible_view:{
      type:Boolean,
      default:false
    },
   static_data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      text_select: "Seleccionar todo",
      selectedRowKeys: [],
      list:[],
      page:1,
      pageSize:10,
      orderby_params: {},
      pagination:new Vue(vantdpagination),
      selected_model: mb.instance(this.table_name),
      loading: false,
      data: !this.static_data ? [] : this.static_data,
      filter:'',
      filter_debounce:'',
      show_modal_form: false,
      page_params_search: {},
    }
  },
  computed: {
    page_params() {
      return {
        pagination: {
          page: this.page,
          pageSize: this.pageSize
        }
      }
    },
    rowSelection() {
      const {selectedRowKeys} = this;
      return {
        selectedRowKeys,
        type:this.type_selection,
        hideDefaultSelections: this.hide_default_selection,
        selections: [
          {
            key: "all-data",
            text: this.text_select,
            onSelect: () => {
              if (this.selectedRowKeys.length === this.data.length) {
                this.selectedRowKeys = [];
              } else {
                this.selectedRowKeys = this.data.map(e => {
                  return e[this.id_table];
                });
              }
            }
          }
        ],
        onSelection: this.onSelection,
        onChange: this.onChange
      };
    }
  },
  watch: {
    filter: function () {
      if (!this.paginate) {
        this.data = this.list.data.filter(this.filter_data);
        this.pagination.total = this.data.length
      }
    },
    params_search(newValue, oldValue) {
      this.load_data()
    },
    filter_debounce: function (value, oldValue) {
      if (this.paginate) {
        this.page_params_search ={... mb.statics(this.table_name).filter_params(this.filter_debounce,this.columns)}
        this.load_data()
      }
    },
    selectedRowKeys: function () {
      if (this.selectedRowKeys.length === this.data.length) {
        this.text_select = "Desseleccionar todo";
      } else {
        this.text_select = "Seleccionar todo";
      }
    }
  },
  methods: {
    params() {
      return this.paginate ? {...this.page_params_search, ...this.page_params, ...this.orderby_params,...this.params_search} : this.params_search
    },
    exportToExcel() {
      utils.exportToExcelVinstance(this)
    },
    update_filter_debounce(newVal) {
      this.filter_debounce = newVal
    },
    exportToCSV() {
      utils.exportToCSV(this)
    },
    filter_data(object) {
      return utils.filter_object_column(object, this.filter, this.columns);
    },
    onChange: function (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    showDeleteConfirm() {
      if (this.selectedRowKeys.length === 0) {
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
            const response = await mb.statics(this.table_name).delete_by_ids(
                _this.selectedRowKeys
            );
            utils.process_response(response, "deleted");
            _this.selectedRowKeys = [];
            _this.load_data();
          } catch (error) {
            utils.process_error(error);
            _this.selectedRowKeys = [];
          }
        },
        onCancel() {
        }
      });
    },
    change_table (pagination, filters, sorter) {
      if (this.paginate) {
        this.page = pagination.current
        this.pageSize = pagination.pageSize
        if (JSON.stringify(sorter) !== '{}') {
          const asc_desc = sorter.order === 'ascend' ? "asc" : "desc"
          this.orderby_params.orderby = []
          this.orderby_params.orderby.push({[sorter.field]: asc_desc})
        }
        this.load_data()
      }
    },
    async load_data() {
      if (this.static_data)
        return 0
      try {
        this.loading = true;
        this.list = this.url ==null ?await mb.statics(this.table_name).list(this.params()):await mb.statics(this.table_name).custom('get',this.url,this.params());
        this.data = this.paginate ? this.list.data.data : this.list.data.filter(this.filter_data);
        this.loading = false;
        this.pagination.total = !this.paginate?this.data.length:this.list.data.total
      } catch (error) {
        utils.process_error(error);
        this.loading = false;
      }
    },
    onEditing(model) {
      this.selected_model = mb.instance(this.table_name, model);
      this.setSelectedPayment_transaction(this.selected_model)
      this.show_form();
    }
  },
  mounted() {
    if (this.load_init)
      this.load_data();
    this.self = this;
  }

}
</script>

<style scoped>

</style>
