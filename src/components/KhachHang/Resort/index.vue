<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <div class="position-relative"><input type="text" class="form-control ps-5"
                                    placeholder="Tìm kiếm quán ăn..."> <span
                                    class="position-absolute top-50 product-show translate-middle-y"><i
                                        class="bx bx-search"></i></span></div>
                        </div>
                        <div class="col-lg-9 col-xl-10">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="btn-group" role="group"><button type="button"
                                                class="btn btn-white">159 Kết quả</button>
                                            <div class="btn-group" role="group"><button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        class="bx bx-slider"></i></button>
                                                <ul class="dropdown-menu dropdown-menu-start"
                                                    aria-labelledby="btnGroupDrop1">
                                                    <li><a class="dropdown-item" href="#">Đúng nhất</a></li>
                                                    <li><a class="dropdown-item" href="#">Gần tôi</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row product-grid">
        <template v-for="(v, k) in list_quan_an" :key="k">
            <div class="col-lg-2 d-flex">
                <router-link :to="'/khach-hang/don-dat-hang/' + v.id">
                    <div class="card flex-fill">
                        <img v-bind:src="v.hinh_anh" class="card-img-top" alt="..." style="height: 200px;">
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">{{ v.ten_quan_an }}</h6>
                            <div class="clearfix mt-auto">
                                <p class="mb-0 float-start">{{ v.dia_chi }}</p>
                            </div>
                            <p class="mt-2"><i class="fa-solid fa-tags me-1"></i> Tối thiểu {{ numberFormat(v.gia_thap)
                                }} </p>
                            <p class="mt-2"><i class="fa-solid fa-circle-dollar-to-slot me-1"></i> Giá {{
                                numberFormat(v.gia_cao) }}</p>
                            <div class="d-flex align-items-center mt-auto"><i
                                    class="fa-solid fa-tag text-danger me-2"></i>
                                <span class="text-primary"><b>Giảm hết 30%</b></span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </template>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_quan_an: []
        }
    },
    mounted() {
        this.getListQuanAn();
    },
    methods: {
        numberFormat(number) {
            return new Intl.NumberFormat("vi-VI", { style: "currency", currency: "VND" }).format(
                number,
            );
        },
        getListQuanAn() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/quan-an/ds-quan-an')
                .then((res) => {
                    this.list_quan_an = res.data.data;
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