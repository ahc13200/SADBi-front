<template>
  <div ref="form_container" class="card position-relative mb-0" v-on:keyup.enter="save_model()">
    <spinner v-if="loading" />
    <div class="card-body p-0" >

      <tc-form
        :feedbacks="mb.statics('Municipality').feedbacks"
        :vobject="$v"
        nested="municipality"
        ref="form"
        class="form-row"
      >
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Municipality_code<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='municipality_code' v-model="municipality.municipality_code"></tc-input>
      </tc-form-item>
      <tc-form-item class="form-group mb-0 col-md-6 px-3">
        <label>Municipality_name<span class='required_field'>*</span></label>
        <tc-input placeholder='Ingrese el valor' name='municipality_name' v-model="municipality.municipality_name"></tc-input>
      </tc-form-item>
        <tc-form-item class="form-group mb-0 col-md-6 px-3">
          <label>Province<span class='required_field'>*</span></label>
          <div class="d-flex flex-row">
            <tc-autocomplete
              placeholder="Seleccione el Province"
              name="province_id"
              ref="select_province"
              :successFeed="false"
              idKey="id"
              textKey="province_code"
              :defaultValue="municipality.province_id"
              v-model="municipality.province_id"
              :url="mb.statics('Province').select_2_url"
            />
            <a-button type="dashed"
                      icon="plus"
                      class="dashed-primary rounded mt-1 ml-2"
                      @click="openModalCreateprovince">
            </a-button>
          </div>
        </tc-form-item>

        <a-modal
          @cancel="showModalCreateprovince = false"
          v-if="showModalCreateprovince"
          class="modal-form"
          :title="'Añadir Province'"
          :visible="true"
          :header="null"
          :footer="null"
          :maskClosable="false"
        >
          <province_form :model="null" :modal="true" @close_modal="provinceAdded"/>
        </a-modal>
      </tc-form>
    </div>
    <div class="card-footer p-0">
      <a-button-group style="margin-bottom: 10px;margin-top: 10px">
        <a-tooltip placement="topLeft" :title="!municipality.get_id()  ? 'Añadir nuevo elemento':'Actualizar elemento'">
          <a-button :disabled="loading"  type="primary"  @click="save_model()">{{button_text}}</a-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" title="Añadir y resetear para insertar nuevo elemento">
          <a-button v-if="!municipality.get_id()" :disabled="loading"  type="primary" @click="save_model(true)">Añadir y nuevo</a-button>
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
  import province_form from '@/modules/services/pages/province/form/province_form';

export default {
  name: "municipality_form",
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
  validations: mb.statics('Municipality').validations,
  data() {
    return {
      loading: false,
      mb,      // This property is for load static or instance class
      municipality: mb.instance( 'Municipality'),
      showModalCreateprovince: false,
      province_list: [],
    };
  },
  computed: {
    municipalityFeedbacks() {
      return mb.statics('Municipality').feedbacks;
    },
    button_text() {
      return this.municipality.get_id() ? "Actualizar" : "Añadir";
    },
  },

  mounted: function() {
    this.municipality = mb.instance( 'Municipality',this.model);
  },
  components: {
    province_form,
  },
  methods: {
      openModalCreateprovince() {
        this.showModalCreateprovince = true;
      },
      provinceAdded(refresh) {
        this.showModalCreateprovince = false;
        refresh?this.refreshprovince():'';
      },
      async refreshprovince() {
        this.loading = true;
        await this.$refs.select_province.load();
        this.loading = false;
      },
      cancel(){
        if (!this.model) {
          this.$emit('close_modal',false)
        } else {
        this.modal?this.close_modal(null,false):this.$router.push({name: 'municipality_list'})
       }
      },
    save_model(and_new=false) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const accion=this.municipality.get_id() ? "actualizado" : "añadido";
        this.municipality
          .save()
          .then((response) => {
            if(utils.process_response(response,accion)) {
              if (!this.model && !and_new && this.modal) {

                  this.$emit('close_modal',true)
                  return;
               }
                else {
                   !and_new?this.modal?this.close_modal(null,true):this.$router.push({name: 'municipality_list'}):this.municipality=mb.instance('Municipality');
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
@import "municipality_form.css";
</style>

