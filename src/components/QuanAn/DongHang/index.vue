<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h5>DANH SÁCH ĐƠN HÀNG</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-primary align-middle text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Thời Gian Nhận Đơn</th>
                                    <th>Mã Đơn Hàng</th>
                                    <th>Tên Khách Hàng</th>
                                    <th>Tên Shipper</th>
                                    <th>Tiền Hàng</th>
                                    <th>DS Món Ăn</th>
                                    <th>Tình Trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td class="text-center">key + 1</td>
                                    <td class="text-center">value.created_at</td>
                                    <td class="text-center">value.ma_don_hang</td>
                                    <td class="text-end">value.tien_hang</td>
                                    <td>value.ten_nguoi_nhan</td>
                                    <td>value.ho_va_ten_shipper</td>
                                    <td>
                                        <span>v.ten_mon_an - v.ghi_chu</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-warning btn-sm w-100">Đang làm</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>