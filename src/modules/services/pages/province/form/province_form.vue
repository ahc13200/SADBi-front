<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Province').feedbacks"
        :vobject="$v"
        nested="province"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Province_code<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='province_code' v-model="province.province_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Province_name<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='province_name' v-model="province.province_name"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Country<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Country"
              name="country_id"
              ref="select_country"
              :successFeed="false"
              idKey="id"
              textKey="country_code"
              :defaultValue="province.country_id"
              v-model="province.country_id"
              :url="mb.statics('Country').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreatecountry">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreatecountry = false"
          v-if="showModalCreatecountry"
          class="modal-form"
          :title="'Añadir Country'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <country_form :model="null" :modal="true" @close_modal="countryAdded"/>
        </a-modal>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!province.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!province.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import country_form from '@/modules/services/pages/country/form/country_form';

export default {
  name: "province_form",
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
  validations: mb.statics('Province').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      province: mb.instance( 'Province'),
      showModalCreatecountry: false,
      country_list: [],
    };
  },
  computed: {
    provinceFeedbacks() {
      return mb.statics('Province').feedbacks;
    },
    button_text() {
      return this.province.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.province = mb.instance( 'Province',this.model);
  },
  components: {
    country_form,
  },
  methods: {
      openModalCreatecountry() {
        this.showModalCreatecountry = true;
      },
      countryAdded(refresh) {
        this.showModalCreatecountry = false;
        refresh?this.refreshcountry():'';
      },
      async refreshcountry() {
        this.loading = true;
        await this.$refs.select_country.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'province_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.province.get_id() ? "actualizado" : "añadido";
        this.province
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'province_list'}):this.province=mb.instance('Province');
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
@import "province_form.css";
</style>

