<template>
    <div id="app">
        <div class="main-wrapper main-wrapper-1">
            <v-header/>
            <v-left-sidebar/>
            <div class="main-content">
                <section class="section">
                    <div class="section-body">
                        <a-spin :spinning="$store.site.loading" :tip="$store.site.tip">
                            <router-view/>
                        </a-spin>
                    </div>
                </section>
            </div>
            <!-- Footer -->
            <v-footer/>

        </div>
    </div>
</template>
<script>
    import Vue from "vue"
    import VHeader from "../elements/VHeader"
    import VLeftSidebar from "../elements/VLeftSidebar"
    import VFooter from "../elements/VFooter"

    export default {
        name: "home",
        props: {
            logout: Function
        },
        data() {
            return {}
        },
        components: {VFooter, VLeftSidebar, VHeader},
        beforeCreate() {
        },
        mounted() {
            document.body.style["overflow-y"] = "scroll"
            sessionStorage.setItem("data-topbar", "dark")
            sessionStorage.setItem("data-preloader", "enabled")
        },
        created() {
        },
        beforeDestroy() {
            const recaptchaScripts = document.querySelectorAll("script")
            for (let i = 0; i < recaptchaScripts.length; i += 1) {
                recaptchaScripts[i].parentElement.removeChild(recaptchaScripts[i])
            }
        },
        async beforeMount() {
            //Ponga todos los javascripts del template
            await Vue.loadScript("/static/assets/js/app.min.js")
            await Vue.loadScript("/static/assets/js/scripts.js")
            await Vue.loadScript("/static/assets/js/custom.js")
        }
    }
</script>
<style scoped>
    .body {
        overflow-y: hidden !important;
        background-image: none !important;
    }

    .main-content {
        padding-right: 0% !important;
    }

    .container {
        margin-left: 1% !important;
    }
</style>
