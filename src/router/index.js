import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkNhanVienLogin from "./checkNhanVienLogin";
import checkKhachHang from "./checkKhachHang";
import checkQuanAn from "./checkQuanAn";
const routes = [
	// Admin
	{
		path: "/admin/khach-hang",
		component: () => import("../components/Admin/KhachHang/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/danh-muc",
		component: () => import("../components/Admin/DanhMuc/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/danh-sach-don-dat",
		component: () => import("../components/Admin/DanhSachDonDat/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/quan-an",
		component: () => import("../components/Admin/QuanAn/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/voucher",
		component: () => import("../components/Admin/Voucher/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/phan-quyen",
		component: () => import("../components/Admin/PhanQuyen/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/nhan-vien",
		component: () => import("../components/Admin/NhanVien/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/profile",
		component: () => import("../components/Admin/Profile/index.vue"),
		beforeEnter: checkNhanVienLogin,
	},
	{
		path: "/admin/dang-nhap",
		component: () => import("../components/Admin/DangNhap/index.vue"),
		meta: { layout: "blank" },
	},

	//  Khách Hàng
	{
		path: "/",
		component: () => import("../components/KhachHang/TrangChu/index.vue"),
		meta: { layout: "client" },
	},
	{
		path: "/khach-hang/dang-nhap",
		component: () => import("../components/KhachHang/DangNhap/index.vue"),
		meta: { layout: "blank" },
	},
	{
		path: "/khach-hang/resort",
		component: () => import("../components/KhachHang/Resort/index.vue"),
		meta: { layout: "client" },
	},
	{
		path: "/khach-hang/dang-ky",
		component: () => import("../components/KhachHang/DangKi/index.vue"),
		meta: { layout: "blank" },
	},
	{
		path: "/khach-hang/profile",
		component: () => import("../components/KhachHang/Profile/index.vue"),
		meta: { layout: "client" },
		beforeEnter: checkKhachHang,
	},
	// Từng resort nội dung hiển thị sẽ khác nhau. Giống về cấu trúc
	// Làm sao để ta biết là khác nhau ra sao => dựa vào id_resort
	{
		path: "/khach-hang/don-dat-hang/:id_quan",
		component: () => import("../components/KhachHang/DonDatHang/index.vue"),
		meta: { layout: "client" },
		props: true,
		beforeEnter: checkKhachHang,
	},
	{
		path: "/khach-hang/don-hang",
		component: () => import("../components/KhachHang/DonHang/index.vue"),
		meta: { layout: "client" },
		beforeEnter: checkKhachHang,
	},

	{
		path: "/khach-hang/Test",
		component: () => import("../components/KhachHang/Test/index.vue"),
		meta: { layout: "client" },
	},

	{
		path: "/khach-hang/mon-an",
		component: () => import("../components/KhachHang/MonAn/index.vue"),
		meta: { layout: "client" },
		beforeEnter: checkKhachHang,
	},
	// Quán Ăn
	{
		path: "/quan-an/dang-ky",
		component: () => import("../components/QuanAn/DangKy/index.vue"),
		meta: { layout: "blank" },
	},
	{
		path: "/quan-an/dang-nhap",
		component: () => import("../components/QuanAn/DangNhap/index.vue"),
		meta: { layout: "blank" },
	},
	{
		path: "/quan-an/don-hang",
		component: () => import("../components/QuanAn/DongHang/index.vue"),
		meta: { layout: "quan_an" },
	},
	{
		path: "/quan-an/test",
		component: () => import("../components/QuanAn/Test/index.vue"),
		meta: { layout: "quan_an" },
	},
	{
		path: "/quan-an/profile",
		component: () => import("../components/QuanAn/Profile/index.vue"),
		meta: { layout: "quan_an" },
		beforeEnter: checkQuanAn,
	},
	{
		path: "/quan-an/danh-muc",
		component: () => import("../components/QuanAn/DanhMuc/index.vue"),
		meta: { layout: "quan_an" },
		beforeEnter: checkQuanAn,
	},
	{
		path: "/quan-an/mon-an",
		component: () => import("../components/QuanAn/MonAn/index.vue"),
		meta: { layout: "quan_an" },
		beforeEnter: checkQuanAn,
	},

	{
		path: "/quan-an/voucher",
		component: () => import("../components/QuanAn/Voucher/index.vue"),
		meta: { layout: "quan_an" },
		beforeEnter: checkQuanAn,
	},
	{
		path: "/quan-an/thong-ke",
		component: () => import("../components/QuanAn/ThongKe/DoanhThu/index.vue"),
		meta: { layout: "quan_an" },
		beforeEnter: checkQuanAn,
	},
	// Shipper
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
