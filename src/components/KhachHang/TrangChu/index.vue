<template>
    <div class="row">
        <div id="carouselExampleControls" class="carousel slide pointer-event" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-current="true">
                </li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item rounded-4" data-bs-interval="2000" style="background-color: #e74c3c;">
                    <div class="row">
                        <div class="col-6 d-flex align-items-center">
                            <div class="container ms-5">
                                <h2 class="text-white mb-4">Đặt Ngay Resort cho chuyến du lịch của bạn!
                                    <i class="fa-brands fa-square-web-awesome-stroke text-warning"></i>
                                </h2>
                                <span class="text-white">
                                    Website chuyên cung cấp cho bạn địa điểm nghỉ dưỡng tuyệt vời để bạn có thể trải
                                    nghiệm!
                                </span>
                                <p class="mt-4"><button class="btn btn-outline-light rounded-4"> <b>TRẢI NGHIỆM
                                            NGAY</b> </button></p>
                            </div>
                        </div>
                        <div class="col-6">
                            <img src="https://th.bing.com/th/id/R.a7b81a3204d4a02200d70b443db746c5?rik=VRl6A2UfBpIV7w&pid=ImgRaw&r=0"
                                class="d-block w-100 rounded-4" alt="..."
                                style="width: 400px; height: 500px; object-fit: cover;">
                        </div>
                    </div>
                </div>
                <div class="carousel-item active rounded-4" data-bs-interval="10000" style="background-color: #5dade2;">
                    <div class="row">
                        <div class="col-6 d-flex align-items-center">
                            <div class="container ms-5">
                                <h2 class="text-dark mb-4">Ưu đãi hấp dẫn - Đặt ngay hôm nay!
                                    <i class="fa-brands fa-square-web-awesome-stroke text-warning"></i>
                                </h2>
                                <span class="text-dark">
                                    Giảm đến 50% phí dịch vụ cho tất cả các khu nghỉ dưỡng. Hàng ngàn món ăn ngon đang
                                    chờ bạn khám
                                    phá! Nhanh tay đặt ngay để không bỏ lỡ!
                                </span>
                                <p class="mt-4"><button class="btn btn-outline-dark rounded-4"> <b>ĐẶT PHÒNG NGAY</b>
                                    </button></p>
                            </div>
                        </div>
                        <div class="col-6">
                            <img src="https://saigon-car.com/wp-content/uploads/2021/10/1499008859.jpg"
                                class="d-block w-100 rounded-4" alt="..."
                                style="width: 450px; height: 500px; object-fit: cover;">
                        </div>
                    </div>
                </div>
                <div class="carousel-item rounded-4" style="background-color: #f7dc6f;">
                    <div class="row">
                        <div class="col-6 d-flex align-items-center">
                            <div class="container ms-5">
                                <h2 class="text-dark mb-4">Khám phá thế giới ẩm thực tại khu nghỉ dưỡng!
                                </h2>
                                <span class="text-dark">
                                    Hàng ngàn món ăn từ Việt Nam, Âu, Á, Fusion đang sẵn sàng phục vụ bạn!
                                </span>
                                <p class="mt-4"><button class="btn btn-outline-dark rounded-4"> <b>THỬ NGAY</b>
                                    </button></p>
                            </div>
                        </div>
                        <div class="col-6">
                            <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock371955106huge-1675245432977.jpg"
                                class="d-block w-100 rounded-4" alt="..."
                                style="width: 450px; height: 500px; object-fit: cover;">
                        </div>
                    </div>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-lg-12 text-center mb-2">
            <div class="d-inline-block">
                <h2><b>Rong chơi bốn phương, giá vẫn "yêu thương"</b></h2>
                <div class="text-center">
                    <hr class="bg-secondary mb-3" style="width: 100%; height: 3px; border: none; border-radius: 5px" />
                </div>
            </div>
        </div>

    </div>
    <div class="row mt-4">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <h3 class="mt-2 text-danger text-center">
                                Đặt Phòng <i class="fa-solid fa-bowl-food ms-1"></i>
                            </h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <label for="">Từ ngày</label>
                                <input type="date" class="form-control mt-2 mb-2" v-model="day_begin">
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <label for="">Đến ngày</label>
                                <input type="date" class="form-control mt-2" v-model="day_end">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="">Chọn Thành Phố</label>
                                <div>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="">-- Chọn Thành Phố --</option>
                                        <template>
                                            <option></option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label for="">Số lượng</label>
                                <div class="btn-group w-100" role="group">
                                    <button type="button" class="btn btn-white w-100">2 Người Lớn, 0 Trẻ Em - 1 Phòng</button>
                                    <div class="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button"
                                            class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bx bx-slider ms-1"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row product-grid">
                        <template v-for="(v, k) in monAnData" :key="k">
                            <div class="col-lg-2 d-flex" v-if="k < 8">
                                <div class="card flex-fill">
                                    <img :src="v.hinh_anh" class="card-img-top" style="height: 200px" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer">
                                            {{ v.ten_mon_an }}

                                        </h6>
                                        <div class="clearfix">
                                            <p class="mb-0 float-start">{{ v.ten_quan_an }}</p>
                                        </div>
                                        <p class="mt-2">
                                            <del>{{ v.gia_ban }}đ</del>
                                            <strong class="ms-2">{{ v.gia_khuyen_mai }}đ</strong>
                                        </p>
                                        <div class="d-flex align-items-center mt-auto">
                                            <i class="fa-solid fa-tag text-danger me-2"></i>
                                            <span class="text-primary">-32%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="col-lg-12 text-center">
                            <button type="button" class="btn btn-lg btn-outline-success" style="width: 30%;"><i
                                    class="fa-regular fa-hand-point-up"></i>Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-lg-12 text-center">
            <div class="d-inline-block">
                <h4><b>BLOG</b></h4>
                <div class="text-center">
                    <hr class="bg-primary my-2" style="width: 100%; height: 3px; border: none; border-radius: 5px" />
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row product-grid">
                    <template v-for="(v, k) in quanAn" :key="k">
                        <div class="col-lg-4 d-flex" v-if="k < 6">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img :src="v.hinh_anh" class="img-fluid rounded-start" alt="..."
                                                style="height: 100%;">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>
                                                        {{ v.ten_quan }}</b></h5>
                                                <p>{{ v.dia_chi_quan }}
                                                </p>
                                                <p><i class="fa-solid fa-tags me-1"></i> Tối thiểu {{
                                                    v.toi_thieu }} <i
                                                        class="fa-solid fa-circle-dollar-to-slot ms-3 me-1"></i>
                                                    Giá
                                                    {{ v.gia }}</p>
                                                <div class="d-flex align-items-center mt-3">
                                                    <i class="fa-solid fa-tag text-danger me-2"></i> <span
                                                        class="text-primary"><b>Giảm hết {{ v.giam_gia
                                                        }}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="col-lg-12 text-center">
                        <button type="button" class="btn btn-lg btn-outline-success" style="width: 30%;"><i
                                class="fa-regular fa-hand-point-up"></i>Xem Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-3"><b class="">VOUCHER HẤP DẪN KHI ĐẶT RESORT</b></h5>
                </div>
                <div class="card-body">
                    <div class="row product-grid">
                        <template v-for="(v, k) in list_voucher" :key="k">
                            <div class="col-lg-2 d-flex">
                                <div class="card flex-fill">
                                    <img :src="v.anh" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer">{{ v.ten_voucher }}</h6>
                                        <div class="clearfix">
                                            <p class="mb-0 float-start">{{ v.dia_diem }} địa điểm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="col-lg-12 text-center">
                            <button type="button" class="btn btn-lg btn-outline-success" style="width: 30%;"><i
                                    class="fa-regular fa-hand-point-up"></i>Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phanLoai: [
                { ten_phan_loai: "Đồ ăn" },
                { ten_phan_loai: "Đồ uống" },
                { ten_phan_loai: "Đồ chay" },
                { ten_phan_loai: "Bánh kem" },
                { ten_phan_loai: "Tráng miệng" },
                { ten_phan_loai: "Pizza/Burger" },
                { ten_phan_loai: "Món lẩu" },
                { ten_phan_loai: "Sushi" },
                { ten_phan_loai: "Mì phở" },
                { ten_phan_loai: "Cơm hộp" },
            ],

            quanAn: [
                {
                    ten_quan: "Bún Bò Huế Ngon",
                    dia_chi_quan: "123 Đường Lê Lợi, Quận 1, TP.HCM",
                    hinh_anh:
                        "https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsv4kujdxehl63@resize_ss280x175!@crop_w280_h175_cT",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Phở Thìn Hà Nội",
                    dia_chi_quan: "456 Đường Nguyễn Văn Trỗi, Quận 3, TP.HCM",
                    hinh_anh:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRd5rlVktjl029OJYgVUqNBKHiKWPJH0ZeA&s",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Bánh Mì Thịt Nướng",
                    dia_chi_quan: "789 Đường Trần Hưng Đạo, Quận 5, TP.HCM",
                    hinh_anh:
                        "https://blog.onelife.vn/wp-content/uploads/2021/11/cach-lam-banh-mi-thit-nuong-mon-an-sang-227560043900.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Hủ Tiếu Nam Vang",
                    dia_chi_quan: "1010 Đường Lý Thường Kiệt, Quận 10, TP.HCM",
                    hinh_anh:
                        "https://i-giadinh.vnecdn.net/2023/05/15/Buoc-8-Thanh-pham-1-8-8366-1684125654.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Cơm Tấm Sài Gòn",
                    dia_chi_quan: "1111 Đường Nguyễn Tri Phương, Quận 10, TP.HCM",
                    hinh_anh: "https://sakos.vn/wp-content/uploads/2024/09/bia.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Bún Riêu Cua",
                    dia_chi_quan: "1212 Đường Bạch Đằng, Bình Thạnh, TP.HCM",
                    hinh_anh:
                        "https://static.vinwonders.com/production/bun-rieu-cua-da-nang-16_optimized.jpeg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Gỏi Cuốn Tôm Thịt",
                    dia_chi_quan: "1313 Đường Phan Văn Trị, Gò Vấp, TP.HCM",
                    hinh_anh: "https://heyyofoods.com/wp-content/uploads/2024/03/4-4.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Lẩu Thái Tom Yum",
                    dia_chi_quan: "1414 Đường Nguyễn Đình Chiểu, Quận 3, TP.HCM",
                    hinh_anh:
                        "https://file.hstatic.net/1000115147/article/tom-yum12_0e693e4c58e34765bd1386b10a0ffdb2.png",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Cháo Sườn Hàng Xanh",
                    dia_chi_quan: "1515 Đường Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM",
                    hinh_anh:
                        "https://cdn.tgdd.vn/2021/05/CookProduct/axresdefault(1)-1200x676.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },
                {
                    ten_quan: "Bánh Xèo Miền Trung",
                    dia_chi_quan: "1616 Đường Điện Biên Phủ, Quận 3, TP.HCM",
                    hinh_anh:
                        "https://bizweb.dktcdn.net/100/514/078/products/banh-xeo-3-mien-day-nghe-rosa-bien-hoa-dong-nai-2.jpg?v=1716438613080",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%",
                },

                {
                    ten_quan: "Phúc Long Coffee & Tea Express",
                    dia_chi_quan: "Địa điểm không xác định",
                    hinh_anh:
                        "https://dtex.vn/Image/Picture/New/Quan-Cafe/logo-Phuc-Long.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ uống
                },
                {
                    ten_quan: "Burger House - Cơm Mì Mã Lai",
                    dia_chi_quan: "Địa điểm không xác định",
                    hinh_anh:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPoIfe0PzE7z4o-98U7Yyy_xPJQJFFyeGcw&s",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Cơm hộp
                },
                {
                    ten_quan: "FA - Bánh Tráng Trứng Muối Mỡ Hành",
                    dia_chi_quan: "55 Nguyễn Phúc Chu, Tân Bình, TP. HCM",
                    hinh_anh: "https://i.ytimg.com/vi/ETbQbKEwglo/maxresdefault.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ ăn
                },
                {
                    ten_quan: "KOI Thé - Việt Nam",
                    dia_chi_quan: "Địa điểm không xác định",
                    hinh_anh:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaZ1PIi2BBS9RIboyhMHQxjmtp8i9egoHag&s",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ uống
                },
                {
                    ten_quan: "Khoai Bistro - Bánh Mì Chảo, Beefsteak & Mì Ý",
                    dia_chi_quan: "405/9 Thống Nhất, P. 11, Gò Vấp, TP. HCM",
                    hinh_anh:
                        "https://media.be.com.vn/bizops/image/018b9ad7-47d2-11ef-a271-b60dedd57ab8/resized_thumbnail_w480_h480",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ ăn
                },
                {
                    ten_quan: "Gà Cơ Bắp - Chuyên Các Món Gà",
                    dia_chi_quan: "Địa điểm không xác định",
                    hinh_anh:
                        "https://gacobap.com/wp-content/uploads/2018/01/ga-co-bap.png",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ ăn
                },
                {
                    ten_quan: "Khoai Lang Lắc Xí Muội - Nguyễn Thượng Hiền",
                    dia_chi_quan: "7 Nguyễn Thượng Hiền, Quận 3, TP. HCM",
                    hinh_anh: "https://i.ytimg.com/vi/9aXdX2uvd9s/maxresdefault.jpg",
                    toi_thieu: "30k",
                    gia: "50k",
                    giam_gia: "30%", // Đồ ăn
                },
            ],

            monAnData: [],

            originalMonAnData: [
                {
                    ten_mon_an: "TP. Hồ Chí Minh",
                    id_quan_an: 1,
                    ten_quan_an: "15,546 chỗ",
                    gia_ban: 300000,
                    gia_khuyen_mai: 270000,
                    hinh_anh:
                        "https://divui.com/blog/wp-content/uploads/2018/08/Du-lich-Sai-Gon.jpg",
                },
                {
                    ten_mon_an: "Vũng Tàu",
                    id_quan_an: 1,
                    ten_quan_an: "6,329 chỗ",
                    gia_ban: 2500000,
                    gia_khuyen_mai: 1999999,
                    hinh_anh:
                        "https://www.tienland.vn/media/uploads/uploads/25113751-ba-ria-vung-tau.jpg",
                },
                {
                    ten_mon_an: "Đà Nẵng",
                    id_quan_an: 1,
                    ten_quan_an: "5,534 chỗ",
                    gia_ban: 30000,
                    gia_khuyen_mai: 25000,
                    hinh_anh:
                        "https://media2.gody.vn/public/images/destination/1/48/cau-rong-da-nang/pl618f263bb7134-1636771387.jpeg",
                },
                {
                    ten_mon_an: "Hà Nội",
                    id_quan_an: 1,
                    ten_quan_an: "10,329 chỗ",
                    gia_ban: 60000,
                    gia_khuyen_mai: 55000,
                    hinh_anh:
                        "https://cloudcdnvod.tek4tv.vn/Mam/attach/upload/06112024170600/170601_webdscf230217098688013631709868804633548541249.jpg",
                },

                {
                    ten_mon_an: "Đà Lạt",
                    id_quan_an: 2,
                    ten_quan_an: "8,329 chỗ",
                    gia_ban: 20000,
                    gia_khuyen_mai: 18000,
                    hinh_anh:
                        "https://th.bing.com/th/id/OIP.MBP9gKqcNhXgL71tXdSTjgHaE7?rs=1&pid=ImgDetMain",
                },
                {
                    ten_mon_an: "Nha Trang",
                    id_quan_an: 2,
                    ten_quan_an: "2,329 chỗ",
                    gia_ban: 15000,
                    gia_khuyen_mai: 12000,
                    hinh_anh: "https://a.cdn-hotels.com/gdcs/production85/d1610/b384252c-2359-4ab8-b054-528d34450ca1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
                },
                {
                    ten_mon_an: "Phan Thiết",
                    id_quan_an: 2,
                    ten_quan_an: "1,329 chỗ",
                    gia_ban: 35000,
                    gia_khuyen_mai: 30000,
                    hinh_anh:
                        "https://ik.imagekit.io/tvlk/blog/2023/05/du-lich-phan-thiet-tu-tuc-4.jpeg?tr=dpr-2,w-675",
                },
                {
                    ten_mon_an: "Hội An",
                    id_quan_an: 2,
                    ten_quan_an: "3,329 chỗ",
                    gia_ban: 40000,
                    gia_khuyen_mai: 35000,
                    hinh_anh:
                        "https://www.tonkinvoyage.com/upload/tonkin/Blog/hoian/hoi-an.jpg",
                },
                {
                    ten_mon_an: "Cần Thơ",
                    id_quan_an: 2,
                    ten_quan_an: "4,329 chỗ",
                    gia_ban: 50000,
                    gia_khuyen_mai: 45000,
                    hinh_anh:
                        "https://ik.imagekit.io/tvlk/blog/2023/05/du-lich-phan-thiet-tu-tuc-4.jpeg?tr=dpr-2,w-675",
                },
                {
                    ten_mon_an: "Hải Phòng",
                    id_quan_an: 2,
                    ten_quan_an: "7,329 chỗ",
                    gia_ban: 60000,
                    gia_khuyen_mai: 55000,
                    hinh_anh:
                        "https://ik.imagekit.io/tvlk/blog/2023/05/du-lich-phan-thiet-tu-tuc-4.jpeg?tr=dpr-2,w-675",
                },
                {
                    ten_mon_an: "Ninh Bình",
                    id_quan_an: 2,
                    ten_quan_an: "9,329 chỗ",
                    gia_ban: 70000,
                    gia_khuyen_mai: 65000,
                    hinh_anh:
                        "https://ik.imagekit.io/tvlk/blog/2023/05/du-lich-phan-thiet-tu-tuc-4.jpeg?tr=dpr-2,w-675",
                },
            ],

            list_voucher: [
                {
                    anh: "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/vi-vn.png",
                    ten_voucher: "Giảm giá 50%",
                    dia_diem: 150,
                },
                {
                    anh: "https://mms.img.susercontent.com/vn-11134512-7ras8-m3bl1govb4q0cc@resize_ss320x320!@crop_w320_h320_cT",
                    ten_voucher: "Giảm giá 75k",
                    dia_diem: 200,
                },
                {
                    anh: "https://mms.img.susercontent.com/vn-11134512-7ras8-m3zwp0918z340c@resize_ss320x320!@crop_w320_h320_cT",
                    ten_voucher: "Giảm tới 55k",
                    dia_diem: 250,
                },
                {
                    anh: "https://mms.img.susercontent.com/vn-11134512-7ras8-m3n07r3kqsos22@resize_ss320x320!@crop_w320_h320_cT",
                    ten_voucher: "Giảm giá 100k ",
                    dia_diem: 100,
                },
                {
                    anh: "https://mms.img.susercontent.com/vn-11134512-7ras8-m4eh4krctfbj4e@resize_ss320x320!@crop_w320_h320_cT",
                    ten_voucher: "Giảm giá 0 đồng",
                    dia_diem: 134,
                },
            ],
        };
    },
    methods: {
        filterByPrice(range) {
            switch (range) {
                case "under50":
                    this.monAnData = this.originalMonAnData.filter(
                        (item) => item.gia_khuyen_mai < 50000
                    );
                    break;
                case "50to100":
                    this.monAnData = this.originalMonAnData.filter(
                        (item) => item.gia_khuyen_mai >= 50000 && item.gia_khuyen_mai <= 100000
                    );
                    break;
                case "100to200":
                    this.monAnData = this.originalMonAnData.filter(
                        (item) => item.gia_khuyen_mai > 100000 && item.gia_khuyen_mai <= 200000
                    );
                    break;
                case "200to300":
                    this.monAnData = this.originalMonAnData.filter(
                        (item) => item.gia_khuyen_mai > 200000 && item.gia_khuyen_mai <= 300000
                    );
                    break;
                case "above300":
                    this.monAnData = this.originalMonAnData.filter(
                        (item) => item.gia_khuyen_mai > 300000
                    );
                    break;
                default:
                    this.monAnData = this.originalMonAnData; // Hiển thị tất cả nếu không có bộ lọc
                    break;
            }
        }
    },
    created() {
        // Hiển thị tất cả dữ liệu ban đầu
        this.monAnData = this.originalMonAnData;
    },
};
</script>
<style></style>
