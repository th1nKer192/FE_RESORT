<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="my-4 text-center">
                    <!-- <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="" /> -->
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG KÝ TRỞ THÀNH SHIPPER CÙNG DZFULLSTACK</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr />
                            </div>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label class="form-label">Họ Và Tên</label>
                                        <input v-model="them_shipper.ho_va_ten" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Email</label>
                                        <input v-model="them_shipper.email" type="email" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input v-model="them_shipper.so_dien_thoai" type="text" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">CCCD</label>
                                        <input v-model="them_shipper.cccd" type="text" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Mật Khẩu</label>
                                        <input v-model="them_shipper.password" type="password" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Nhập Lại Mật Khẩu</label>
                                        <input v-model="them_shipper.re_password" type="password" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Quận Huyện</label>
                                        <select class="form-select" v-model="them_shipper.id_quan_huyen">
                                            <template v-for="(value, index) in list_quan_huyen" :key="index">
                                                <option :value="value.id">{{ value.ten_quan_huyen }}</option>
                                            </template>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label>Địa chỉ thường trú</label>
                                        <textarea v-model="them_shipper.dia_chi"
                                            class="form-control"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="button" v-on:click="dangKyShipper()"
                                                class="btn btn-primary w-100">
                                                <i class="bx bx-user"></i>Đăng Ký
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <router-link to="/shipper/dang-nhap">
                                            <button type="button" class="btn btn-secondary w-100">
                                                <i class="fa-solid fa-arrow-left"></i>Quay Lại Đăng Nhập
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
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_quan_huyen: [],
            list_tinh_thanh: [],
            them_shipper: {}
        }
    },

    mounted() {
        this.loadDataTinhThanh();
        this.loadDataQuanHuyen();
    },

    methods: {
        loadDataTinhThanh() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tinh-thanh/data-open')
                .then((res) => {
                    this.list_tinh_thanh = res.data.data;
                })
        },
        loadDataQuanHuyen() {
            axios
                .get('http://127.0.0.1:8000/api/admin/quan-huyen/data-open')
                .then((res) => {
                    this.list_quan_huyen = res.data.data;
                })
        },
        dangKyShipper() {
            axios
                .post("http://127.0.0.1:8000/api/shipper/dang-ky", this.them_shipper)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.them_shipper = {}
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
};
</script>
<style></style>
