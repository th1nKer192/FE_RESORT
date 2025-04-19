<template>
    <div class="card border-top border-0 border-3 border-info">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <label for="">Tìm kiếm</label>
                    <div class="input-group mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="Tìm kiếm đơn đặt..." />
                        <button class="btn btn-primary">Tìm Kiếm</button>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <label for="">Từ ngày</label>
                    <input type="date" class="form-control mt-2 mb-2 w-100">
                </div>
                <div class="col-lg-3 col-md-6">
                    <label for="">Đến ngày</label>
                    <input type="date" class="form-control mt-2 mb-2">
                </div>
                <div class="col-lg-2 col-md-12">
                    <label for="">&nbsp;</label>
                    <button class="btn btn-primary w-100">Lọc</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card ">
        <div class="card-header">
            <h5 class="mt-2">DANH SÁCH ĐƠN ĐẶT HÀNG</h5>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="align-middle">
                        <tr class="text-center table-primary">
                            <th>Mã đơn</th>
                            <th>Thời Gian Đặt Hàng</th>
                            <th>Quán Ăn</th>
                            <th>Khách Hàng</th>
                            <th>Shipper</th>
                            <th>Tiền Hàng</th>
                            <th>Phí Ship</th>
                            <th>Tổng Tiền</th>
                            <th>Trạng thái</th>
                            <th>Chi Tiết Đơn Đặt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle">
                            <td class="align-middle text-center">value.ma_don_hang</td>
                            <td class="align-middle text-center">value.created_at</td>
                            <td class="align-middle">value.ten_quan_an</td>
                            <td class="align-middle">value.ho_va_ten_khach_hang</td>
                            <td class="align-middle">value.ho_va_ten_shipper</td>
                            <td class="align-middle text-end">value.tien_hang</td>
                            <td class="align-middle text-end">value.phi_ship</td>
                            <td class="align-middle text-end">value.tong_tien</td>
                            <td class="align-middle text-center">
                                <button class="btn btn-warning btn-sm w-100">Chờ xác nhận</button>
                            </td>
                            <td class="align-middle text-center">
                                <button class="btn btn-info w-100 btn-sm me-2" data-bs-toggle='modal'
                                    data-bs-target='#chiTietModal' style="color: white;">
                                    <i class="fas fa-eye"></i> Chi tiết
                                </button>
                            </td>
                            <td class="align-middle text-center">
                                <button class="btn btn-success btn-sm me-2">
                                    <i class="fas fa-check"></i> Xác nhận
                                </button>
                                <button class="btn btn-danger btn-sm" data-bs-toggle='modal' data-bs-target='#huyModal'>
                                    <i class="fas fa-times"></i> Hủy
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class='modal fade' id='chiTietModal' tabindex='-1' aria-labelledby='modalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <h5 class='modal-title' id='modalLabel'>Chi Tiết Đơn Hàng</h5>
                    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div class='modal-body'>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Tên Người Nhận</th>
                                <td>Nguyễn Văn A</td>
                            </tr>
                            <tr>
                                <th>Địa chỉ</th>
                                <td>123 Đường ABC, Quận 1, TP.HCM</td>
                            </tr>
                            <tr>
                                <th>Số điện thoại</th>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <th>Quán</th>
                                <td>Quán Ăn Ngon</td>
                            </tr>
                            <tr>
                                <th>Shippper</th>
                                <td>Nguyễn Văn A</td>
                            </tr>
                            <tr>
                                <th>Mã voucher</th>
                                <td>ABC123</td>
                            </tr>
                            <tr>
                                <th>Phí ship</th>
                                <td>20.000đ</td>
                            </tr>
                            <tr>
                                <th>Trạng thái</th>
                                <td><span class="badge bg-warning">Chờ xác nhận</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="huyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Hủy Đơn Hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">Cảnh Báo</h6>
                                <div class="text-dark">
                                    <span>Bạn muốn hủy đơn hàng <b>xxx</b> này</span> <br>
                                    <span>
                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="deleteQuyen()"
                        data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() { },
    methods: {}
};
</script>

<style></style>