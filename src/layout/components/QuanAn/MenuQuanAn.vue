<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item">
					<router-link to="/quan-an/test">
						<a class="nav-link" href="/quan-an/test">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Test</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/quan-an/danh-muc">
						<a class="nav-link" href="/quan-an/danh-muc">
							<div class="parent-icon"><i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Danh Mục</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/quan-an/mon-an">
						<a class="nav-link" href="/quan-an/mon-an">
							<div class="parent-icon"><i class="fa-solid fa-utensils"></i>
							</div>
							<div class="menu-title"> Món Ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/quan-an/voucher">
						<a class="nav-link" href="/quan-an/voucher">
							<div class="parent-icon"><i class="fa-solid fa-ticket"></i>
							</div>
							<div class="menu-title"> Voucher</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>