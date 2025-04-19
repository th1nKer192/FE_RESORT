<template>
    <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <h2 class="card-title mb-0 fw-bold">Danh Sách Các Món Ăn</h2>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm btn-outline-primary px-3">
                        <i class="fas fa-sort-amount-down-alt me-1"></i>
                        Tăng dần
                    </button>
                    <button class="btn btn-sm btn-outline-primary px-3">
                        <i class="fas fa-sort-amount-up-alt me-1"></i>
                        Giảm dần
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row ">
        <template v-for="(value, index) in list_mon_an" :key="index">
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card shadow-sm">
                    <img v-bind:src="value.hinh_anh" class="card-img-top" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">{{ value.ten_mon_an }}</h6>
                        <p class="text-muted small mb-2">{{ value.ten_quan_an }}</p>
                        <span class="mb-0 d-flex">
                            <del class="text-muted">{{ formatVND(value.gia_ban) }}</del>
                            <h5 class="ms-2 text-danger mb-0"><b>{{ formatVND(value.gia_khuyen_mai) }}</b></h5>
                        </span>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_mon_an: []
        }
    },
    mounted() {
        this.loadMonAn()
    },
    methods: {
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number,)
        },
        loadMonAn() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/data-mon-an', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
                    },
                })
                .then((res) => {
                    this.list_mon_an = res.data.data;
                })
                .catch(res => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
    }
}
</script>

<style></style>