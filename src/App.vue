<template>
    <a-config-provider>
        <div>
            <Home v-if="auth"/>
            <Login v-if="!auth"/>
        </div>
    </a-config-provider>
</template>
<script>
    import es_ES from 'ant-design-vue/lib/locale-provider/es_ES'
    import Login from '@/core/layout/templates/Login'
    import Home from '@/core/layout/templates/Home'

    export default {
        name: 'app',
        provide: function () {
            return {
                logout: this.logout,
                login: this.login
            }
        },
        data() {
            return {
                es_ES,
                auth: this.$store.site.user != null
            }
        },
        computed: {},

        methods: {
            async logout() {
                this.$store.site.loading = true
                this.$store.site.tip = "Cerrando Sesion..."
                const response = await this.$store.site.logout().catch((error => {
                    console.log("Token expired")
                    return {success: true}
                }))
                this.auth = !response.success
                this.$store.site.loading = false
                this.$router.push({name: 'index'}).catch(() => {
                })
            },
            login() {
                console.log("Pase por el login")
                this.auth = !!this.$store.site.user
                if (this.auth) {
                    location.reload()
                }
            }
        },
        components: {Login, Home},
        mounted() {
        }
    }
</script>

<style scoped>
</style>

