<template>
    <div class="container mt-5">
        <div class="row w-100">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="card shadow p-4">
                    <h1 class="text-center mb-3">📝 Đăng Ký Tài Khoản</h1>
                    <p class="text-center text-muted">Tham gia ngay để thưởng thức những món ăn tuyệt vời!</p>

                    <form>
                        <div class="mb-3">
                            <label>👤 Họ và Tên:</label>
                            <input v-model="dang_ki.ho_va_ten" type="text" class="form-control"
                                placeholder="Nhập họ và tên của bạn">
                        </div>

                        <div class="mb-3">
                            <label>📧 Email:</label>
                            <input v-model="dang_ki.email" type="email" class="form-control"
                                placeholder="Nhập email của bạn">
                        </div>

                        <div class="mb-3">
                            <label>📱 Số Điện Thoại:</label>
                            <input v-model="dang_ki.so_dien_thoai" type="number" class="form-control"
                                placeholder="Nhập số điện thoại của bạn">
                        </div>

                        <div class="mb-3">
                            <label>🎂 Ngày Sinh:</label>
                            <input v-model="dang_ki.ngay_sinh" type="date" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label>🔒 Mật Khẩu:</label>
                            <input v-model="dang_ki.password" type="password" class="form-control"
                                placeholder="Nhập mật khẩu">
                        </div>

                        <div class="mb-3">
                            <label>🔄 Xác Nhận Mật Khẩu:</label>
                            <input v-model="dang_ki.re_password" type="password" class="form-control"
                                placeholder="Xác nhận mật khẩu">
                        </div>

                        <div class="d-grid">
                            <button v-on:click="dangKi()" type="button" class="btn btn-success">
                                Đăng Ký
                            </button>
                        </div>
                    </form>

                    <div class="text-center mt-3">
                        <p>Đã có tài khoản?
                            <router-link to="/khach-hang/dang-nhap">
                                <a href="#" class="text-decoration-none">🚀 Đăng Nhập</a>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            dang_ki: {
                'email': "",
                'so_dien_thoai': "",
                'ho_va_ten': "",
                'password': "",
                're_password': "",
                'ngay_sinh': "",
            }
        }
    },

    methods: {
        dangKi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/register', this.dang_ki)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.dang_ki = {
                            'email': "",
                            'so_dien_thoai': "",
                            'ho_va_ten': "",
                            'password': "",
                            're_password': "",
                            'ngay_sinh': "",
                        }
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                 .catch(res => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        }
    },
}
</script>
<style></style>