<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Payment_transaction').feedbacks"
        :vobject="$v"
        nested="payment_transaction"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Transaction_date<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='transaction_date' v-model="payment_transaction.transaction_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Request_date<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='request_date' v-model="payment_transaction.request_date"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Agency_trans_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='agency_trans_id' v-model="payment_transaction.agency_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_trans_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='bank_trans_id' v-model="payment_transaction.bank_trans_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_firstname<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_firstname' v-model="payment_transaction.cust_firstname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_lastname<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_lastname' v-model="payment_transaction.cust_lastname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_address<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_address' v-model="payment_transaction.cust_address"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_identification<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_identification' v-model="payment_transaction.cust_identification"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Cust_phone_number<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='cust_phone_number' v-model="payment_transaction.cust_phone_number"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Account_card<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='account_card' v-model="payment_transaction.account_card"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_amount<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_amount' v-model="payment_transaction.trans_amount"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Trans_fee<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='trans_fee' v-model="payment_transaction.trans_fee"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_firstname<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='sender_firstname' v-model="payment_transaction.sender_firstname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_lastname<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='sender_lastname' v-model="payment_transaction.sender_lastname"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_address<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='sender_address' v-model="payment_transaction.sender_address"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_identification<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='sender_identification' v-model="payment_transaction.sender_identification"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_identification_type</label>
        <tc-input placeholder='Ingrese el valor' name='sender_identification_type' v-model="payment_transaction.sender_identification_type"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_birth_country</label>
        <tc-input placeholder='Ingrese el valor' name='sender_birth_country' v-model="payment_transaction.sender_birth_country"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Sender_birth_date</label>
          <div class="d-flex flex-row">
            <tc-date-picker name="sender_birth_date" v-model="payment_transaction.sender_birth_date"></tc-date-picker>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_fin_inst</label>
        <tc-input placeholder='Ingrese el valor' name='sender_fin_inst' v-model="payment_transaction.sender_fin_inst"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_account_card</label>
        <tc-input placeholder='Ingrese el valor' name='sender_account_card' v-model="payment_transaction.sender_account_card"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Completed<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="payment_transaction.completed"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Msg_id<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='msg_id' v-model="payment_transaction.msg_id"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Msg_creation_datetime</label>
        <tc-input placeholder='Ingrese el valor' name='msg_creation_datetime' v-model="payment_transaction.msg_creation_datetime"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Send_bank<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="payment_transaction.send_bank"/>
          </div>
        </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Agency<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Agency"
              name="agency_id"
              ref="select_agency"
              :successFeed="false"
              idKey="id"
              textKey="agency_name"
              :defaultValue="payment_transaction.agency_id"
              v-model="payment_transaction.agency_id"
              :url="mb.statics('Agency').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreateagency">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreateagency = false"
          v-if="showModalCreateagency"
          class="modal-form"
          :title="'Añadir Agency'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <agency_form :model="null" :modal="true" @close_modal="agencyAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Bank<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Bank"
              name="bank_id"
              ref="select_bank"
              :successFeed="false"
              idKey="id"
              textKey="bank_code"
              :defaultValue="payment_transaction.bank_id"
              v-model="payment_transaction.bank_id"
              :url="mb.statics('Bank').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatebank">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatebank = false"
          v-if="showModalCreatebank"
          class="modal-form"
          :title="'Añadir Bank'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <bank_form :model="null" :modal="true" @close_modal="bankAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Currency</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Currency"
              name="currency_id"
              ref="select_currency"
              :successFeed="false"
              idKey="id"
              textKey="currency_name"
              :defaultValue="payment_transaction.currency_id"
              v-model="payment_transaction.currency_id"
              :url="mb.statics('Currency').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatecurrency">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatecurrency = false"
          v-if="showModalCreatecurrency"
          class="modal-form"
          :title="'Añadir Currency'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <currency_form :model="null" :modal="true" @close_modal="currencyAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Municipality</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Municipality"
              name="cust_municip_id"
              ref="select_cust_municip"
              :successFeed="false"
              idKey="id"
              textKey="municipality_code"
              :defaultValue="payment_transaction.cust_municip_id"
              v-model="payment_transaction.cust_municip_id"
              :url="mb.statics('Municipality').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatecust_municip">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatecust_municip = false"
          v-if="showModalCreatecust_municip"
          class="modal-form"
          :title="'Añadir Municipality'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <municipality_form :model="null" :modal="true" @close_modal="cust_municipAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Province</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Province"
              name="cust_prov_id"
              ref="select_cust_prov"
              :successFeed="false"
              idKey="id"
              textKey="province_code"
              :defaultValue="payment_transaction.cust_prov_id"
              v-model="payment_transaction.cust_prov_id"
              :url="mb.statics('Province').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatecust_prov">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatecust_prov = false"
          v-if="showModalCreatecust_prov"
          class="modal-form"
          :title="'Añadir Province'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <province_form :model="null" :modal="true" @close_modal="cust_provAdded"/>
        </a-modal>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Sender_city_id</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='sender_city_id' v-model="payment_transaction.sender_city_id"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Country</label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Country"
              name="sender_country_id"
              ref="select_sender_country"
              :successFeed="false"
              idKey="id"
              textKey="country_code"
              :defaultValue="payment_transaction.sender_country_id"
              v-model="payment_transaction.sender_country_id"
              :url="mb.statics('Country').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatesender_country">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatesender_country = false"
          v-if="showModalCreatesender_country"
          class="modal-form"
          :title="'Añadir Country'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <country_form :model="null" :modal="true" @close_modal="sender_countryAdded"/>
        </a-modal>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Transaction_state<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Transaction_state"
              name="transaction_state_id"
              ref="select_transaction_state"
              :successFeed="false"
              idKey="id"
              textKey="state_code"
              :defaultValue="payment_transaction.transaction_state_id"
              v-model="payment_transaction.transaction_state_id"
              :url="mb.statics('Transaction_state').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatetransaction_state">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatetransaction_state = false"
          v-if="showModalCreatetransaction_state"
          class="modal-form"
          :title="'Añadir Transaction_state'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <transaction_state_form :model="null" :modal="true" @close_modal="transaction_stateAdded"/>
        </a-modal>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>State_source<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='state_source' v-model="payment_transaction.state_source"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Reconcilied_bank<span class='required_field'>*</span></label>
          <div>
            <a-switch  v-model="payment_transaction.reconcilied_bank"/>
          </div>
        </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Transaction_reference<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='transaction_reference' v-model="payment_transaction.transaction_reference"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Bank_fee</label>
        <tc-input placeholder='Ingrese el valor'   type_car='num'  name='bank_fee' v-model="payment_transaction.bank_fee"></tc-input>
      </tc-form-item>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!payment_transaction.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!payment_transaction.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Cancelar acción">
          <a-button :disabled="loading"  type="danger" @click="cancel()">Cancel</a-button>
        </a-tooltip>
      </a-button-group>
    </div>
  </div>
</template>

<script>
import * as utils from "@/helpers/helpers/utils";
import * as mb from "@/helpers/loaders/model.load"
  import agency_form from '@/modules/admin/pages/agency/form/agency_form';
  import bank_form from '@/modules/admin/pages/bank/form/bank_form';
  import country_form from '@/modules/services/pages/country/form/country_form';
  import currency_form from '@/modules/services/pages/currency/form/currency_form';
  import municipality_form from '@/modules/services/pages/municipality/form/municipality_form';
  import province_form from '@/modules/services/pages/province/form/province_form';
  import transaction_state_form from '@/modules/services/pages/transaction_state/form/transaction_state_form';

export default {
  name: "payment_transaction_form",
  inject: {
      close_modal: { default: ()=>{} },
      load_data: {default: () => {} }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
      modal: {
        type: Boolean,
        default: false
      },
    popoverPlacement: {
      type: String,
      default: "bottomLeft"
    }
  },
  validations: mb.statics('Payment_transaction').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      payment_transaction: mb.instance( 'Payment_transaction'),
      showModalCreateagency: false,
      agency_list: [],
      showModalCreatebank: false,
      bank_list: [],
      showModalCreatesender_country: false,
      country_list: [],
      showModalCreatecurrency: false,
      currency_list: [],
      showModalCreatecust_municip: false,
      municipality_list: [],
      showModalCreatecust_prov: false,
      province_list: [],
      showModalCreatetransaction_state: false,
      transaction_state_list: [],
    };
  },
  computed: {
    payment_transactionFeedbacks() {
      return mb.statics('Payment_transaction').feedbacks;
    },
    button_text() {
      return this.payment_transaction.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.payment_transaction = mb.instance( 'Payment_transaction',this.model);
  },
  components: {
    agency_form,
    bank_form,
    country_form,
    currency_form,
    municipality_form,
    province_form,
    transaction_state_form,
  },
  methods: {
      openModalCreateagency() {
        this.showModalCreateagency = true;
      },
      agencyAdded(refresh) {
        this.showModalCreateagency = false;
        refresh?this.refreshagency():'';
      },
      async refreshagency() {
        this.loading = true;
        await this.$refs.select_agency.load();
        this.loading = false;
      },
      openModalCreatebank() {
        this.showModalCreatebank = true;
      },
      bankAdded(refresh) {
        this.showModalCreatebank = false;
        refresh?this.refreshbank():'';
      },
      async refreshbank() {
        this.loading = true;
        await this.$refs.select_bank.load();
        this.loading = false;
      },
      openModalCreatesender_country() {
        this.showModalCreatesender_country = true;
      },
      sender_countryAdded(refresh) {
        this.showModalCreatesender_country = false;
        refresh?this.refreshsender_country():'';
      },
      async refreshsender_country() {
        this.loading = true;
        await this.$refs.select_sender_country.load();
        this.loading = false;
      },
      openModalCreatecurrency() {
        this.showModalCreatecurrency = true;
      },
      currencyAdded(refresh) {
        this.showModalCreatecurrency = false;
        refresh?this.refreshcurrency():'';
      },
      async refreshcurrency() {
        this.loading = true;
        await this.$refs.select_currency.load();
        this.loading = false;
      },
      openModalCreatecust_municip() {
        this.showModalCreatecust_municip = true;
      },
      cust_municipAdded(refresh) {
        this.showModalCreatecust_municip = false;
        refresh?this.refreshcust_municip():'';
      },
      async refreshcust_municip() {
        this.loading = true;
        await this.$refs.select_cust_municip.load();
        this.loading = false;
      },
      openModalCreatecust_prov() {
        this.showModalCreatecust_prov = true;
      },
      cust_provAdded(refresh) {
        this.showModalCreatecust_prov = false;
        refresh?this.refreshcust_prov():'';
      },
      async refreshcust_prov() {
        this.loading = true;
        await this.$refs.select_cust_prov.load();
        this.loading = false;
      },
      openModalCreatetransaction_state() {
        this.showModalCreatetransaction_state = true;
      },
      transaction_stateAdded(refresh) {
        this.showModalCreatetransaction_state = false;
        refresh?this.refreshtransaction_state():'';
      },
      async refreshtransaction_state() {
        this.loading = true;
        await this.$refs.select_transaction_state.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'payment_transaction_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.payment_transaction.get_id() ? "actualizado" : "añadido";
        this.payment_transaction
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'payment_transaction_list'}):this.payment_transaction=mb.instance('Payment_transaction');
               }
               this.load_data()
               this.$refs.form.vobject.$reset()

            }
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            utils.process_error(error);
          });
      }
    }
  }
};
</script>

<style scoped>
@import "payment_transaction_form.css";
</style>

