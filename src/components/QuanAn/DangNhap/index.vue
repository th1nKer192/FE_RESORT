<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="my-4 text-center">
                    <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="">
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG NHẬP QUÁN ĂN</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr>
                            </div>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="row">
                                        <div class="row g-3">
                                            <div class="col-lg-12">
                                                <label for="inputEmailAddress" class="form-label">Email</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="user.email" @keyup.enter="Login()" type="email" class="form-control" placeholder="Nhập Email">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="inputEmailAddress" class="form-label">Password</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="user.password" @keyup.enter="Login()" type="password" class="form-control"
                                                        placeholder="Nhập Mật Khẩu">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-4">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button v-on:click="Login()" type="button" class="btn btn-primary radius-30 w-100">Đăng
                                                        Nhập</button>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-4">
                                                <p class="mb-0">Bạn chưa có tài khoản?
                                                    <router-link to="/quan-an/dang-ky">
                                                        <a href="/quan-an/dang-ky">Đăng Kí</a>
                                                    </router-link>
                                                </p>
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
                .post("http://127.0.0.1:8000/api/quan-an/dang-nhap", this.user)
                .then((res) => {
                    if (res.data.status) {
                        localStorage.setItem('quan_an_login', res.data.token);
                        this.$toast.success(res.data.message);
                        this.$router.push('/quan-an/profile');
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