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
                                    Website chuyên cung cấp cho bạn địa điểm nghỉ dưỡng tuyệt vời để bạn có thể trải nghiệm!
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
                                    Giảm đến 50% phí dịch vụ cho tất cả các khu nghỉ dưỡng. Hàng ngàn món ăn ngon đang chờ bạn khám
                                    phá! Nhanh tay đặt ngay để không bỏ lỡ!
                                </span>
                                <p class="mt-4"><button class="btn btn-outline-dark rounded-4"> <b>ĐẶT PHÒNG NGAY</b> </button></p>
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
                    <div class="row">
                        <div class="col-lg-8">
                            <h5 class="mt-2 text-danger">
                                Danh Mục Các Món Ăn <i class="fa-solid fa-bowl-food ms-1"></i>
                            </h5>
                        </div>
                        <div class="col-lg-2">
                            <div>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="">-- Danh Mục Món Ăn --</option>
                                    <template v-for="(v, k) in phanLoai" :key="k">
                                        <option :value="v.id">{{ v.ten_phan_loai }}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="btn-group w-100" role="group">
                                <button type="button" class="btn btn-white w-100">Chọn Mức Giá</button>
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button"
                                        class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bx bx-slider ms-1"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
                                        <li><a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('under50')">Dưới 50.000 VNĐ</a></li>
                                        <li><a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('50to100')">50.000 - 100.000 VNĐ</a>
                                        </li>
                                        <li><a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('100to200')">100.000 - 200.000
                                                VNĐ</a></li>
                                        <li><a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('200to300')">200.000 - 300.000
                                                VNĐ</a></li>
                                        <li><a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('above300')">Trên 300.000 VNĐ</a>
                                        </li>
                                    </ul>
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
                                            <span class="text-primary">-30%</span>
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
                <h4><b>QUÁN ĂN ĐƯỢC YÊU THÍCH NHIỀU NHẤT</b></h4>
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
                    <h5 class="mt-3"><b class="">VOUCHER HẤP DẪN KHI ĐẶT MÓN</b></h5>
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
                    ten_mon_an: "Phở Bò",
                    id_quan_an: 1,
                    ten_quan_an: "Quán Phở Gia Truyền",
                    gia_ban: 50000,
                    gia_khuyen_mai: 45000,
                    hinh_anh:
                        "https://hongphatfood.com/wp-content/uploads/2020/05/vifon-beef-pho-6.jpg",
                },
                {
                    ten_mon_an: "Bún Chả",
                    id_quan_an: 1,
                    ten_quan_an: "Quán Phở Gia Truyền",
                    gia_ban: 40000,
                    gia_khuyen_mai: 35000,
                    hinh_anh:
                        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_12_638406880045931692_cach-lam-bun-cha-ha-noi-0.jpg",
                },
                {
                    ten_mon_an: "Bánh Canh",
                    id_quan_an: 1,
                    ten_quan_an: "Quán Phở Gia Truyền",
                    gia_ban: 30000,
                    gia_khuyen_mai: 25000,
                    hinh_anh:
                        "https://cdn.tgdd.vn/2020/11/CookRecipe/GalleryStep/thanh-pham-622.jpg",
                },
                {
                    ten_mon_an: "Chả Cá",
                    id_quan_an: 1,
                    ten_quan_an: "Quán Phở Gia Truyền",
                    gia_ban: 60000,
                    gia_khuyen_mai: 55000,
                    hinh_anh:
                        "https://i.ytimg.com/vi/ZLwCwyIDJJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC28T49o72JuvhoihtNNUQvmAyCWA",
                },

                {
                    ten_mon_an: "Bánh Mì Thịt",
                    id_quan_an: 2,
                    ten_quan_an: "Tiệm Bánh Mì Ngon",
                    gia_ban: 20000,
                    gia_khuyen_mai: 18000,
                    hinh_anh:
                        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_11_638406025402324906_banh-mi-thit_.jpg",
                },
                {
                    ten_mon_an: "Gỏi Cuốn",
                    id_quan_an: 2,
                    ten_quan_an: "Tiệm Bánh Mì Ngon",
                    gia_ban: 15000,
                    gia_khuyen_mai: 12000,
                    hinh_anh: "https://heyyofoods.com/wp-content/uploads/2024/03/3-4.jpg",
                },
                {
                    ten_mon_an: "Mì Quảng",
                    id_quan_an: 2,
                    ten_quan_an: "Tiệm Bánh Mì Ngon",
                    gia_ban: 35000,
                    gia_khuyen_mai: 30000,
                    hinh_anh:
                        "https://duonggiahotel.vn/wp-content/uploads/2023/09/mi-quang-da-nang-AB.jpg",
                },
                {
                    ten_mon_an: "Bánh Bèo",
                    id_quan_an: 2,
                    ten_quan_an: "Tiệm Bánh Mì Ngon",
                    gia_ban: 15000,
                    gia_khuyen_mai: 13000,
                    hinh_anh:
                        "https://vietfood.org.vn/wp-content/uploads/2021/05/BanhBeo2.jpg",
                },

                {
                    ten_mon_an: "Cơm Gà",
                    id_quan_an: 3,
                    ten_quan_an: "Cơm Gà Hải Nam",
                    gia_ban: 35000,
                    gia_khuyen_mai: 30000,
                    hinh_anh:
                        "https://danangfantasticity.com/wp-content/uploads/2024/10/com-ga-da-nang-com-ga-xoi-mo-09.jpg",
                },
                {
                    ten_mon_an: "Bánh Xèo",
                    id_quan_an: 3,
                    ten_quan_an: "Cơm Gà Hải Nam",
                    gia_ban: 45000,
                    gia_khuyen_mai: 40000,
                    hinh_anh:
                        "https://daotaobeptruong.vn/wp-content/uploads/2020/01/cach-do-banh-xeo-ngon-gion-lau.jpg",
                },
                {
                    ten_mon_an: "Cơm Tấm",
                    id_quan_an: 3,
                    ten_quan_an: "Cơm Gà Hải Nam",
                    gia_ban: 40000,
                    gia_khuyen_mai: 37000,
                    hinh_anh:
                        "https://i-giadinh.vnecdn.net/2024/03/07/7-Hoan-thien-thanh-pham-1-6244-1709800134.jpg",
                },
                {
                    ten_mon_an: "Gà Rán",
                    id_quan_an: 3,
                    ten_quan_an: "Cơm Gà Hải Nam",
                    gia_ban: 70000,
                    gia_khuyen_mai: 65000,
                    hinh_anh:
                        "https://cokhiviendong.com/wp-content/uploads/2019/01/kinnh-nghi%E1%BB%87m-m%E1%BB%9F-qu%C3%A1n-g%C3%A0-r%C3%A1n-7.jpg",
                },
                {
                    ten_mon_an: "Hủ Tiếu",
                    id_quan_an: 4,
                    ten_quan_an: "Hủ Tiếu Mỹ Tho",
                    gia_ban: 30000,
                    gia_khuyen_mai: 25000,
                    hinh_anh:
                        "https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg",
                },
                {
                    ten_mon_an: "Lẩu Thái",
                    id_quan_an: 4,
                    ten_quan_an: "Hủ Tiếu Mỹ Tho",
                    gia_ban: 120000,
                    gia_khuyen_mai: 100000,
                    hinh_anh:
                        "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg",
                },
                {
                    ten_mon_an: "Bún Mắm",
                    id_quan_an: 4,
                    ten_quan_an: "Hủ Tiếu Mỹ Tho",
                    gia_ban: 50000,
                    gia_khuyen_mai: 45000,
                    hinh_anh:
                        "https://www.cet.edu.vn/wp-content/uploads/2018/04/bun-mam-nem-da-nang.jpg",
                },
                {
                    ten_mon_an: "Súp Cua",
                    id_quan_an: 4,
                    ten_quan_an: "Hủ Tiếu Mỹ Tho",
                    gia_ban: 40000,
                    gia_khuyen_mai: 35000,
                    hinh_anh:
                        "https://mevacon.giaoduc.edu.vn/wp-content/uploads/2023/02/cach-nau-sup-cua-1.jpeg",
                },

                {
                    ten_mon_an: "Cháo Lòng",
                    id_quan_an: 5,
                    ten_quan_an: "Quán Cháo Lòng Ngon",
                    gia_ban: 25000,
                    gia_khuyen_mai: 22000,
                    hinh_anh:
                        "https://static.vinwonders.com/production/chao-long-da-nang-4-1.jpg",
                },
                {
                    ten_mon_an: "Nem Nướng",
                    id_quan_an: 5,
                    ten_quan_an: "Quán Cháo Lòng Ngon",
                    gia_ban: 40000,
                    gia_khuyen_mai: 35000,
                    hinh_anh:
                        "https://cdn.tgdd.vn/2021/09/CookDish/cach-lam-nem-nuong-nha-trang-bang-noi-chien-khong-dau-thom-avt-1200x676.jpg",
                },
                {
                    ten_mon_an: "Bánh Đúc",
                    id_quan_an: 5,
                    ten_quan_an: "Quán Cháo Lòng Ngon",
                    gia_ban: 20000,
                    gia_khuyen_mai: 18000,
                    hinh_anh:
                        "https://i-giadinh.vnecdn.net/2021/05/17/1-1621220538-7560-1621220858.jpg",
                },
                {
                    ten_mon_an: "Bánh Cuốn",
                    id_quan_an: 5,
                    ten_quan_an: "Quán Cháo Lòng Ngon",
                    gia_ban: 30000,
                    gia_khuyen_mai: 27000,
                    hinh_anh:
                        "https://img-global.cpcdn.com/recipes/b235f5db0142062d/400x400cq70/photo.jpg",
                },
                {
                    ten_mon_an: "Combo Gà Rán và Khoai Tây",
                    id_quan_an: 6,
                    ten_quan_an: "Chicken House",
                    gia_ban: 150000,
                    gia_khuyen_mai: 130000,
                    hinh_anh:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ujAHUkTeiROINht5b1qDd__UGoc9Mnbx5w&s",
                },
                {
                    ten_mon_an: "Combo Bò Lúc Lắc và Salad",
                    id_quan_an: 7,
                    ten_quan_an: "Steak Corner",
                    gia_ban: 180000,
                    gia_khuyen_mai: 160000,
                    hinh_anh:
                        "https://blog.nhahanggiobien.com/wp-content/uploads/2021/12/BO-LUC-LAC-KHOAI-TAY.jpg",
                },
                {
                    ten_mon_an: "Combo Lẩu Thái và Hải Sản",
                    id_quan_an: 8,
                    ten_quan_an: "Lẩu Thái Tomyum",
                    gia_ban: 250000,
                    gia_khuyen_mai: 220000,
                    hinh_anh:
                        "https://bizweb.dktcdn.net/100/090/383/files/01-combo-haisan-1.jpg?v=1586015019703",
                },
                {
                    ten_mon_an: "Combo Sushi Đặc Biệt",
                    id_quan_an: 9,
                    ten_quan_an: "Sushi World",
                    gia_ban: 280000,
                    gia_khuyen_mai: 260000,
                    hinh_anh:
                        "https://ichibanmarket.com.vn/wp-content/uploads/2023/08/131-3.jpg",
                },
                {
                    ten_mon_an: "Combo Lẩu Nướng và Thịt Tổng Hợp",
                    id_quan_an: 10,
                    ten_quan_an: "BBQ Paradise",
                    gia_ban: 350000,
                    gia_khuyen_mai: 320000,
                    hinh_anh:
                        "https://channel.mediacdn.vn/prupload/879/2017/09/img20170917232722780.jpg",
                },
                {
                    ten_mon_an: "Combo Tiệc 5 Món Cao Cấp",
                    id_quan_an: 11,
                    ten_quan_an: "Fine Dining Restaurant",
                    gia_ban: 500000,
                    gia_khuyen_mai: 450000,
                    hinh_anh:
                        "https://thietbidungcubuffet.com/images/tin-tuc/mon-ngon-dai-tiec-cuoi.jpg",
                },
            ],

            list_voucher: [
                {
                    anh: "https://mms.img.susercontent.com/vn-11134512-7ras8-m4rbu9mg5dcfd2@resize_ss320x320!@crop_w320_h320_cT",
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
