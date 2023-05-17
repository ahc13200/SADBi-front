<template>
    <div>
        <div class="row row-breadcrumb">
            <div class="col-md-6">
                <h4>Listado de Agency</h4>
            </div>
            <div class="col-md-5">
                <a-breadcrumb>
                    <a-breadcrumb-item href="">
                        <a-icon type="home"/>
                        <router-link :to="{name:'index'}">Inicio</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item href="">
                        <span>Admin</span>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <span>Agency</span>
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
                    :title="selected_agency.get_id()?'Actualizar agency':'Añadir agency'"
                    class="modal-form"
                    width="55rem"
                    :visible="show_modal_form"
                    :destroyOnClose="true"
                    on-ok="handleOk"
                    :header="null"
                    :footer="null"
                    :maskClosable="false"
            >
                <agency_form :modal=true :model="selected_agency"/>
            </a-modal>
            <agency_table
                    :columns="columns"
                    table_name="Agency"
                    id_table="id"
                    ref="agency_table"
                    :params_search="params_search"
                    :paginate="paginate"
            >
                <div :slot="'state'" slot-scope='record' :record='record'>
                    <a-tooltip placement="topLeft"
                               title="La agencia está activa o no">
                        <i v-if="record.record" class="mdi mdi-checkbox-marked-circle"
                           style="color: #0ab39c;font-size: 20px"></i>
                        <i v-else class="mdi mdi-close-circle" style="color: #ff4d4f;font-size: 20px"></i>
                    </a-tooltip>
                </div>
                <div :slot="'accept_reject'" slot-scope='record' :record='record'>
                    <a-tooltip placement="topLeft"
                               title="La agencia permitirá o no, aceptar la transferencia aunque no tenga fondos">
                        <i v-if="record.record" class="mdi mdi-checkbox-marked-circle"
                           style="color: #0ab39c;font-size: 20px"></i>
                        <i v-else class="mdi mdi-close-circle" style="color: #ff4d4f;font-size: 20px"></i>
                    </a-tooltip>
                </div>
                <div :slot="'self_sending'" slot-scope='record' :record='record'>
                    <a-tooltip placement="topLeft"
                               title="La agencia permite el autoenvío">
                        <i v-if="record.record" class="mdi mdi-checkbox-marked-circle"
                           style="color: #0ab39c;font-size: 20px"></i>
                        <i v-else class="mdi mdi-close-circle" style="color: #ff4d4f;font-size: 20px"></i>
                    </a-tooltip>
                </div>
                <div :slot="'in_accounting'" slot-scope='record' :record='record'>
                    <a-tooltip placement="topLeft"
                               title="La agencia permite el autoenvío">
                        <i v-if="record.record" class="mdi mdi-checkbox-marked-circle"
                           style="color: #0ab39c;font-size: 20px"></i>
                        <i v-else class="mdi mdi-close-circle" style="color: #ff4d4f;font-size: 20px"></i>
                    </a-tooltip>
                </div>
            </agency_table>
        </div>
    </div>
</template>
<script>
    import * as utils from "@/helpers/helpers/utils";
    import * as mb from "@/helpers/loaders/model.load";
    import agency_form from "../form/agency_form";
    import agency_table from "./agency.table";

    export default {
        name: "agency_list",
        provide: function () {
            return {
                close_modal: this.onCloseModal,
                show_form: this.show_form,
                load_data: () => {
                    this.$refs.agency_table.load_data()
                },
                setSelectedAgency: this.setSelectedAgency
            }
        },
        data() {
            return {
                data: [],
                self: null,
                columns: mb.statics('Agency').columns,
                selected_agency: mb.instance('Agency'),
                show_modal_form: false,
                paginate: false,
                params_search: {relations: ['fee']},
                mb
            };
        },
        components: {
            agency_form,
            agency_table
        },
        methods: {
            setSelectedAgency(model) {
                this.selected_agency = model
            },
            onCloseModal(e, reload_data = false) {
                this.selected_agency = mb.instance('Agency');
                this.show_modal_form = false;
                reload_data ? this.$refs.agency_table.load_data() : ''
            },
            show_form() {
                this.show_modal_form = !this.show_modal_form;
            },
            showDeleteConfirm() {
                if (this.$refs.agency_table.selectedRowKeys.length === 0) {
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
                            const response = await mb.statics('Agency').delete_by_ids(
                                _this.$refs.agency_table.selectedRowKeys
                            );
                            utils.process_response(response, "deleted");
                            _this.$refs.agency_table.selectedRowKeys = [];
                            _this.$refs.agency_table.load_data();
                        } catch (error) {
                            utils.process_error(error);
                            _this.$refs.agency_table.selectedRowKeys = [];
                        }
                    },
                    onCancel() {
                    }
                });
            },
        },
    };
</script>

<style>
    @import "agency_list.css";
</style>

