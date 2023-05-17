<template>
    <div id="app">
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h4>Login</h4>
                            </div>
                            <div class="card-body">
                                <tc-form
                                        nested="user"
                                        :vobject="$v"
                                        ref="form"
                                >
                                    <div class="form-group">
                                        <tc-form-item>
                                            <label class="control-label">Correo<span
                                                    class="required_field">*</span></label>
                                            <tc-input type="text" v-model.trim="user.email" name="email"
                                                      placeholder="Nombre de usuario"
                                                      class="login-input"/>
                                        </tc-form-item>
                                        <div class="invalid-feedback">
                                            Please fill in your email
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <tc-form-item>
                                            <div class="d-block">
                                                <label class="control-label">Password<span
                                                        class="required_field">*</span></label>
                                                <tc-input type="password" name="password" v-model="user.password"
                                                          placeholder="Password"/>
                                                <div class="float-right">
                                                    <a href="auth-forgot-password.html" class="text-small">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="invalid-feedback">
                                                please fill in your password
                                            </div>
                                        </tc-form-item>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" name="remember" class="custom-control-input"
                                                   tabindex="3" id="remember-me">
                                            <label class="custom-control-label" for="remember-me">Remember Me</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a-button type="button" :loading="loading" @click="login_action" class="btn btn-primary btn-lg btn-block"
                                                tabindex="4">
                                            Login
                                        </a-button>
                                    </div>
                                    <div class="text-center mt-4 mb-3">
                                        <div class="text-job text-muted">Login With Social</div>
                                    </div>
                                    <div class="row sm-gutters">
                                        <div class="col-6">
                                            <a class="btn btn-block btn-social btn-facebook">
                                                <span class="fab fa-facebook"></span> Facebook
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="btn btn-block btn-social btn-twitter">
                                                <span class="fab fa-twitter"></span> Twitter
                                            </a>
                                        </div>
                                    </div>
                                </tc-form>
                            </div>
                        </div>
                        <div class="mt-5 text-muted text-center">
                            Don't have an account? <a href="auth-register.html">Create One</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    import '@/assets/css/authentication.css'

    export default {
        name: 'Login',
        inject: {
            login: {
                default: () => {
                }
            }
        },
        validations: {
            user: {
                email: {
                    required,
                    email
                },
                password: {
                    required
                }
            }
        },
        mounted() {
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
                error: false,
                loading: false,
                message_error: 'Error en usuario o contraseña'
            }
        },
        methods: {
            async login_action() {
                this.error = false
                this.loading = true
                if (this.$refs.form.validate()) {
                    await this.$store.site.login(this.user).then(async () => {
                        this.login()
                    }).catch((error) => {
                        !error.response || error.response.status != 422 ? this.message_error = 'Unknow error, please contact with administrator' : ''
                        this.error = true
                    })
                }
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    .ant-btn:hover, .ant-btn:focus, .ant-btn:active {
        color: white;
        background-color: rgba(26, 74, 164, 0.97) !important;
        border-color: rgba(26, 74, 164, 0.97) !important;
    }

    .ant-btn, .ant-btn {
        color: white;
        background-color: #405189 !important;
        border-color: #405189 !important;
    }

    .content-body {
        height: 35rem !important;
        margin-top: 10rem !important;
        margin-left: 10% !important;
        margin-bottom: 5px !important;
    }

    .app-content {
        margin-left: 0px !important;
        overflow: hidden;
    }
</style>

