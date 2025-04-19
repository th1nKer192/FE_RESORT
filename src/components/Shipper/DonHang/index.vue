<template>
	<div class="row">
		<div class="col-12">
			<div class="card border-0 shadow bg-primary">
				<div class="card-body ">
					<div class="d-flex justify-content-between align-items-center flex-wrap">
						<div class="d-flex align-items-center">
							<div>
								<h2 class="h3 text-white mb-1">Quản lý đơn hàng</h2>
							</div>
						</div>
						<div class="d-flex align-items-center gap-3 mt-md-0">
							<div class="text-end">
								<h3 class="mb-0 mt-1 text-white">Nguyễn Văn A</h3>
							</div>
							<div
								class="rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center">
								<img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;"
									class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
									alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-body">
			<ul class="nav nav-tabs mb-3" id="orderTabs">
				<li class="nav-item">
					<a class="nav-link active" id="available-tab" data-bs-toggle="tab" href="#available">
						<i class="bi bi-list-ul me-1"></i> Đơn có thể nhận
						<span class="badge bg-primary ms-1">3</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="accepted-tab" data-bs-toggle="tab" href="#accepted">
						<i class="bi bi-check-circle me-1"></i> Đơn đã nhận
						<span class="badge bg-success ms-1">3</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="completed-tab" data-bs-toggle="tab" href="#completed">
						<i class="bi bi-archive me-1"></i> Đơn đã hoàn thành
					</a>
				</li>
			</ul>
			<div class="row mb-3">
				<div class="col-lg-5 col-sm-6">
					<select class="form-select">
						<option selected>Khu vực</option>
						<option>Quận 1</option>
						<option>Quận 2</option>
						<option>Quận 3</option>
						<option>Quận Bình Thạnh</option>
					</select>
				</div>
				<div class="col-lg-5 col-sm-6">
					<select class="form-select">
						<option selected>Sắp xếp theo</option>
						<option>Thời gian gần nhất</option>
						<option>Khoảng cách gần nhất</option>
						<option>Giá trị cao nhất</option>
					</select>
				</div>
				<div class="col-lg-2 col-sm-6">
					<button class="btn btn-primary w-100 ">
						Lọc
					</button>
				</div>
			</div>
			<div class="tab-content">
				<div class="tab-pane fade show active" id="available">
					<div class="row d-flex">
						<div class="col-lg-4 col-md-6 col-12 d-flex">
							<div class="card w-100">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5830</span>
									<span class="text-light small"><b>10 phút trước</b></span>
								</div>
								<div class="card-body">
									<div class="row mb-3">
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3" style="align-content: center;">
													<img style="width: 80px; height: 60px; object-fit: cover;"
														class="img-fluid"
														src="https://cdn.brvn.vn/editor_news/2020/02/19933_Pho24_2_1582541813.jpg"
														alt="">
												</div>
												<div>
													<h6>Nhà hàng Phở 24</h6>
													<p class="text-muted mb-0 small">123 Nguyễn Văn Linh, Quận 7</p>
													<div class="small text-success">2.5km từ vị trí của bạn</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3">
													<img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;"
														class="img-fluid"
														src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
														alt="">
												</div>
												<div>
													<h6>Nguyễn Thị B</h6>
													<p class="text-muted mb-0 small">56 Nguyễn Hữu Thọ, Quận 7</p>
													<div class="small text-muted">5.2km • ~15 phút</div>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">150.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">COD</span>
										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row">
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-primary w-100">Chi tiết</button>
										</div>
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-success w-100">Nhận đơn</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12 d-flex">
							<div class="card w-100">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5830</span>
									<span class="text-light small"><b>10 phút trước</b></span>
								</div>
								<div class="card-body">
									<div class="row mb-3">
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3" style="align-content: center;">
													<img style="width: 80px; height: 60px; object-fit: cover;"
														class="img-fluid"
														src="https://statics.vincom.com.vn/xu-huong/nha-hang-sushi/Kohaku-nha-hang-sushi.jpg"
														alt="">
												</div>
												<div>
													<h6>Nhà hàng Sushi Nhật Bản</h6>
													<p class="text-muted mb-0 small">45 Lê Thánh Tôn, Quận 1</p>
													<div class="small text-success">2.1km từ vị trí của bạn</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3">
													<img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;"
														class="img-fluid"
														src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
														alt="">
												</div>
												<div>
													<h6>Nguyên Văn C</h6>
													<p class="text-muted mb-0 small">112 Nguyễn Đình Chiểu, Quận 3</p>
													<div class="small text-muted">4.4km • ~15 phút</div>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">150.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">Đã thanh toán</span>
										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row">
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-primary w-100">Chi tiết</button>
										</div>
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-success w-100">Nhận đơn</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12 d-flex">
							<div class="card w-100">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5830</span>
									<span class="text-light small"><b>10 phút trước</b></span>
								</div>
								<div class="card-body">
									<div class="row mb-3">
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3" style="align-content: center;">
													<img style="width: 80px; height: 60px; object-fit: cover;"
														class="img-fluid"
														src="https://welcome.deliveryk.com/wp-content/uploads/2023/12/deliveryk-thit-nuong-han-quoc-o-da-nang-5.jpg"
														alt="">
												</div>
												<div>
													<h6>Nhà hàng BBQ Hàn Quốc</h6>
													<p class="text-muted mb-0 small">45 Lê Thánh Tôn, Quận 1</p>
													<div class="small text-success">2.1km từ vị trí của bạn</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="d-flex">
												<div class="me-3">
													<img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;"
														class="img-fluid"
														src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
														alt="">
												</div>
												<div>
													<h6>Phan Văn D</h6>
													<p class="text-muted mb-0 small">84 Phan Đình Phùng, Quận 3</p>
													<div class="small text-muted">7.8km • ~20 phút</div>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">150.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">Đã thanh toán</span>
										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row">
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-primary w-100">Chi tiết</button>
										</div>
										<div class="col-lg-6 col-md-12">
											<button class="btn btn-success w-100">Nhận đơn</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="accepted">
					<div class="row g-3">
						<div class="col-lg-4">
							<div class="card border-warning">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5823</span>
									<span class="badge bg-secondary text-white">Đang lấy hàng</span>
								</div>
								<div class="card-body">
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/bun-dau-mam-tom-2-e1505460520519.jpg"
												alt="">
										</div>
										<div>
											<h6 class="mt-3">Bún Đậu Mắm Tôm A Chảnh</h6>
											<p class="text-muted mb-0 small">94 Nguyễn Du, Quận 1</p>
											<div class="small text-warning"><i class="bi bi-hourglass-split me-1"></i>
												Đang lấy hàng</div>
										</div>
									</div>
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="">
										</div>
										<div>
											<h6 class="mt-3">Trân Văn A</h6>
											<p class="text-muted mb-0 small">35 Trần Hưng Đạo, Quận 5</p>
											<div class="small text-muted"><i class="bi bi-clock-history me-1"></i>
												Chờ lấy hàng</div>
										</div>
									</div>
									<div class="progress mb-3" style="height: 8px;">
										<div class="progress-bar bg-success" role="progressbar" style="width: 40%;"
											aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="d-flex justify-content-between mb-3">
										<div class="text-center">
											<i class="bi bi-check-circle-fill text-success"></i>
											<div class="small">Nhận đơn</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle-fill text-warning"></i>
											<div class="small">Lấy hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Giao hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Hoàn thành</div>
										</div>
									</div>

									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">180.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">Đã thanh toán</span>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white">
									<div class="d-flex justify-content-between">
										<span class="text-muted small"><i class="bi bi-clock me-1"></i> Nhận đơn 20
											phút trước</span>
										<div>
											<button class="btn btn-outline-warning ">Đã lấy hàng</button>
											<button class="btn btn-outline-danger  ms-2">Gặp vấn đề</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card border-warning">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5823</span>
									<span class="badge bg-secondary text-white">Đang lấy hàng</span>
								</div>
								<div class="card-body">
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://danviet.mediacdn.vn/upload/2-2015/images/2015-05-13/1434170342-ytlacover_1_lhzg.jpg"
												alt="">
										</div>
										<div>
											<h6 class="mt-3">Cháo Lòng Hà Còi</h6>
											<p class="text-muted mb-0 small">94 Nguyễn Du, Quận 1</p>
											<div class="small text-warning"><i class="bi bi-hourglass-split me-1"></i>
												Đang lấy hàng</div>
										</div>
									</div>
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="">
										</div>
										<div>
											<h6 class="mt-3">Định Văn C</h6>
											<p class="text-muted mb-0 small">40 Trưng Nữ Vương, Quận 5</p>
											<div class="small text-muted"><i class="bi bi-clock-history me-1"></i>
												Chờ lấy hàng</div>
										</div>
									</div>
									<div class="progress mb-3" style="height: 8px;">
										<div class="progress-bar bg-success" role="progressbar" style="width: 40%;"
											aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="d-flex justify-content-between mb-3">
										<div class="text-center">
											<i class="bi bi-check-circle-fill text-success"></i>
											<div class="small">Nhận đơn</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle-fill text-warning"></i>
											<div class="small">Lấy hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Giao hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Hoàn thành</div>
										</div>
									</div>

									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">180.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">Đã thanh toán</span>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white">
									<div class="d-flex justify-content-between">
										<span class="text-muted small"><i class="bi bi-clock me-1"></i> Nhận đơn 10
											phút trước</span>
										<div>
											<button class="btn btn-outline-warning ">Đã lấy hàng</button>
											<button class="btn btn-outline-danger  ms-2">Gặp vấn đề</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card border-warning">
								<div class="card-header bg-warning d-flex justify-content-between align-items-center">
									<span class="fw-bold text-white">#ORD-5823</span>
									<span class="badge bg-success text-white">Đang giao hàng</span>
								</div>
								<div class="card-body">
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://acnoshotel.com/grand/wp-content/uploads/2024/07/Acnos-pho-hoa-01.jpg"
												alt="">
										</div>
										<div>
											<h6 class="mt-3">Phở Hoà Pasture</h6>
											<p class="text-muted mb-0 small">94 Nguyễn Du, Quận 1</p>
											<div class="small text-warning"><i class="bi bi-hourglass-split me-1"></i>
												Đang lấy hàng</div>
										</div>
									</div>
									<div class="d-flex mb-3">
										<div class="me-3">
											<img style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
												class="img-fluid"
												src="https://w7.pngwing.com/pngs/661/914/png-transparent-woman-female-avatar-business-avatar-icon.png"
												alt="">
										</div>
										<div>
											<h6 class="mt-3">Nguyễn Thị B</h6>
											<p class="text-muted mb-0 small">26 Đống Đa, Quận 5</p>
											<div class="small text-muted"><i class="bi bi-clock-history me-1"></i>
												Chờ lấy hàng</div>
										</div>
									</div>
									<div class="progress mb-3" style="height: 8px;">
										<div class="progress-bar bg-success" role="progressbar" style="width: 60%;"
											aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="d-flex justify-content-between mb-3">
										<div class="text-center">
											<i class="bi bi-check-circle-fill text-success"></i>
											<div class="small">Nhận đơn</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle-fill text-warning"></i>
											<div class="small">Lấy hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Giao hàng</div>
										</div>
										<div class="text-center">
											<i class="bi bi-circle text-muted"></i>
											<div class="small">Hoàn thành</div>
										</div>
									</div>

									<div class="d-flex justify-content-between border-top pt-3">
										<div>
											<span class="d-block">Giá trị đơn hàng:</span>
											<span class="fw-bold text-success">180.000đ</span>
										</div>
										<div>
											<span class="d-block">Phí vận chuyển:</span>
											<span class="fw-bold text-primary">35.000đ</span>
										</div>
										<div>
											<span class="d-block">Thanh toán:</span>
											<span class="fw-bold">Đã thanh toán</span>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white">
									<div class="d-flex justify-content-between">
										<span class="text-muted small"><i class="bi bi-clock me-1"></i> Nhận đơn 30
											phút trước</span>
										<div>
											<button class="btn btn-outline-success ">Đang giao hàng</button>
											<button class="btn btn-outline-danger  ms-2">Gặp vấn đề</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="completed">
					<div class="completed-orders-header mb-4">
						<div class="card">
							<div class="card-body">
								<div class="d-flex justify-content-between align-items-center">
									<div>
										<h4 class="mb-1">Lịch sử giao hàng</h4>
										<p class="text-muted mb-0">Các đơn hàng đã hoàn thành trong ngày</p>
									</div>
									<div class="d-flex gap-2">
										<div class="input-group">
											<input type="date" class="form-control" placeholder="Chọn ngày">
											<button class="btn btn-outline-primary">
												Lọc
											</button>
										</div>
										<button class="btn btn-outline-success">
											Xuất báo cáo
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row g-4">
						<div class="col-lg-4">
							<div class="card ">
								<div class="card-header bg-warning border-bottom-0">
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex align-items-center gap-2">
											<i class="bi bi-check-circle-fill text-success fs-5"></i>
											<span class="fw-bold text-white">#ORD-5810</span>
										</div>

									</div>
								</div>
								<div class="card-body">
									<div class="restaurant-info d-flex align-items-center mb-4">
										<div class="restaurant-image me-3">
											<img src="https://st.nhipcaudautu.vn/staticFile/Subject/2024/06/24/processed-30cb0c56-9519-4d0e-8ea3-e0fe86135b4a_58erc59t_11022882.jpeg"
												class="rounded-3 shadow-sm"
												style="width: 100px; height: 100px; object-fit: cover;" alt="">
										</div>
										<div class="restaurant-details">
											<h5 class="mb-2">Cơm Tấm Phúc Lộc Thọ</h5>
											<p class="text-muted mb-1">
												<i class="bi bi-geo-alt me-1"></i>
												189 Cống Quỳnh, Quận 1
											</p>
											<div class="d-flex align-items-center gap-3">
												<span class="text-muted small">
													<i class="bi bi-clock-history me-1"></i>
													2 giờ trước
												</span>
											</div>
										</div>
									</div>
									<div class="delivery-info bg-light rounded-4 p-3 mb-4">
										<div class="d-flex align-items-center">
											<div class="customer-avatar me-3">
												<img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-woman-with-glasses-user-vector-png-image_5322589.png"
													class="rounded-circle shadow-sm"
													style="width: 50px; height: 50px; object-fit: cover;" alt="">
											</div>
											<div class="customer-info">
												<h6 class="mb-1">Nguyễn Thị Lan</h6>
												<p class="text-muted mb-0 small">
													<i class="bi bi-geo-alt me-1"></i>
													45 Bùi Viện, Quận 1
												</p>
											</div>
										</div>
									</div>

									<div class="delivery-timeline mb-4">
										<div class="progress" style="height: 3px;">
											<div class="progress-bar bg-success" role="progressbar" style="width: 100%">
											</div>
										</div>
										<div class="d-flex justify-content-between mt-3">
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Nhận đơn</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Lấy hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Giao hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Hoàn thành</div>
											</div>
										</div>
									</div>
									<div class="order-summary bg-light rounded-4 p-3">
										<div class="row g-3">
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Giá trị đơn hàng</div>
													<div class="fw-bold text-success">85.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Phí ship</div>
													<div class="fw-bold text-primary">25.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Thanh toán</div>
													<div class="fw-bold">Đã thanh toán</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white border-top-0 p-3">
									<button class="btn btn-outline-primary w-100">
										<i class="bi bi-eye me-2"></i>
										Xem chi tiết đơn hàng
									</button>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card ">
								<div class="card-header bg-warning border-bottom-0">
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex align-items-center gap-2">
											<i class="bi bi-check-circle-fill text-success fs-5"></i>
											<span class="fw-bold text-white">#ORD-5815</span>
										</div>

									</div>
								</div>
								<div class="card-body">
									<div class="restaurant-info d-flex align-items-center mb-4">
										<div class="restaurant-image me-3">
											<img src="https://i.ytimg.com/vi/PSlxC2yJm-U/maxresdefault.jpg"
												class="rounded-3 shadow-sm"
												style="width: 100px; height: 100px; object-fit: cover;" alt="">
										</div>
										<div class="restaurant-details">
											<h5 class="mb-2">Bún Bò Huế O Xuân</h5>
											<p class="text-muted mb-1">
												<i class="bi bi-geo-alt me-1"></i>
												72 Huỳnh Mẫn Đạt, Quận 5
											</p>
											<div class="d-flex align-items-center gap-3">
												<span class="text-muted small">
													<i class="bi bi-clock-history me-1"></i>
													3 giờ trước
												</span>
											</div>
										</div>
									</div>
									<div class="delivery-info bg-light rounded-4 p-3 mb-4">
										<div class="d-flex align-items-center">
											<div class="customer-avatar me-3">
												<img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-woman-with-glasses-user-vector-png-image_5322589.png"
													class="rounded-circle shadow-sm"
													style="width: 50px; height: 50px; object-fit: cover;" alt="">
											</div>
											<div class="customer-info">
												<h6 class="mb-1">Lê Thị Hương</h6>
												<p class="text-muted mb-0 small">
													<i class="bi bi-geo-alt me-1"></i>
													42 Nguyễn Biểu, Quận 5
												</p>
											</div>
										</div>
									</div>
									<div class="delivery-timeline mb-4">
										<div class="progress" style="height: 3px;">
											<div class="progress-bar bg-success" role="progressbar" style="width: 100%">
											</div>
										</div>
										<div class="d-flex justify-content-between mt-3">
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Nhận đơn</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Lấy hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Giao hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Hoàn thành</div>
											</div>
										</div>
									</div>

									<div class="order-summary bg-light rounded-4 p-3">
										<div class="row g-3">
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Giá trị đơn hàng</div>
													<div class="fw-bold text-success">150.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Phí ship</div>
													<div class="fw-bold text-primary">35.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Thanh toán</div>
													<div class="fw-bold">COD</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white border-top-0 p-3">
									<button class="btn btn-outline-primary w-100">
										<i class="bi bi-eye me-2"></i>
										Xem chi tiết đơn hàng
									</button>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card ">
								<div class="card-header bg-warning border-bottom-0">
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex align-items-center gap-2">
											<i class="bi bi-check-circle-fill text-success fs-5"></i>
											<span class="fw-bold text-white">#ORD-5876</span>
										</div>

									</div>
								</div>
								<div class="card-body">
									<div class="restaurant-info d-flex align-items-center mb-4">
										<div class="restaurant-image me-3">
											<img src="https://daivietourist.vn/wp-content/uploads/2024/10/banh-trang-cuon-thit-heo-4.jpg"
												class="rounded-3 shadow-sm"
												style="width: 100px; height: 100px; object-fit: cover;" alt="">
										</div>
										<div class="restaurant-details">
											<h5 class="mb-2">Bánh Tráng Cuốn Thịt Heo - Dì Hằng</h5>
											<p class="text-muted mb-1">
												<i class="bi bi-geo-alt me-1"></i>
												72 Huỳnh Mẫn Đạt, Quận 5
											</p>
											<div class="d-flex align-items-center gap-3">
												<span class="text-muted small">
													<i class="bi bi-clock-history me-1"></i>
													3 giờ trước
												</span>
											</div>
										</div>
									</div>
									<div class="delivery-info bg-light rounded-4 p-3 mb-4">
										<div class="d-flex align-items-center">
											<div class="customer-avatar me-3">
												<img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-woman-with-glasses-user-vector-png-image_5322589.png"
													class="rounded-circle shadow-sm"
													style="width: 50px; height: 50px; object-fit: cover;" alt="">
											</div>
											<div class="customer-info">
												<h6 class="mb-1">Hồ Xuân Huyền</h6>
												<p class="text-muted mb-0 small">
													<i class="bi bi-geo-alt me-1"></i>
													50 Nguyễn Hiền, Quận 5
												</p>
											</div>
										</div>
									</div>
									<div class="delivery-timeline mb-4">
										<div class="progress" style="height: 3px;">
											<div class="progress-bar bg-success" role="progressbar" style="width: 100%">
											</div>
										</div>
										<div class="d-flex justify-content-between mt-3">
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Nhận đơn</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Lấy hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Giao hàng</div>
											</div>
											<div class="timeline-point completed">
												<div class="point-icon">
													<i class="bi bi-check-circle-fill"></i>
												</div>
												<div class="point-label">Hoàn thành</div>
											</div>
										</div>
									</div>

									<div class="order-summary bg-light rounded-4 p-3">
										<div class="row g-3">
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Giá trị đơn hàng</div>
													<div class="fw-bold text-success">750.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Phí ship</div>
													<div class="fw-bold text-primary">35.000đ</div>
												</div>
											</div>
											<div class="col-4">
												<div class="text-center">
													<div class="text-muted small mb-1">Thanh toán</div>
													<div class="fw-bold">COD</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-footer bg-white border-top-0 p-3">
									<button class="btn btn-outline-primary w-100">
										<i class="bi bi-eye me-2"></i>
										Xem chi tiết đơn hàng
									</button>
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
export default {

}
</script>
<style></style>
