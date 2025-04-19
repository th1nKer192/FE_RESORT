<template>
<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="my-4 text-center">
                    <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG NHẬP SHIPPER</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr />
                            </div>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">Email</label>
                                        <div class="input-group">
                                            <div class="input-group-text bg-transparent">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>
                                            <input v-model="user.email" @keyup.enter="Login()" type="email" class="form-control border-end-0">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Password</label>
                                        <div class="input-group">
                                            <div class="input-group-text bg-transparent"><i class="fa-solid fa-lock"></i></div>
                                            <input v-model="user.password" @keyup.enter="Login()" type="password" class="form-control border-end-0">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="button" class="btn btn-primary w-100" v-on:click="Login()">
                                            <i class="fa-solid fa-lock-open"></i> Đăng Nhập
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <router-link to="/shipper/dang-ky">
                                            <button type="button" class="btn btn-danger w-100">
                                                <i class='bx bx-user'></i> Đăng Ký
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user : {
                email: '',
                password: ''
            }   
        }
    },
    methods: {
        Login() {
            axios
                .post("http://127.0.0.1:8000/api/shipper/dang-nhap", this.user)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        localStorage.setItem('shipper_login', res.data.token);
                        this.$router.push('/shipper/profile');
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }
    },
}
</script>

<style></style>
