
hienThidanhSachGioHang();

function hienThidanhSachGioHang() {

    var danhSachGioHang = loaddulieu("danhSachGioHang");

    var HTML = chuyenDanhSachGioHangVaoHTML(danhSachGioHang);

    var nodeGioHang = document.getElementById('giohang');

    nodeGioHang.innerHTML =nodeGioHang.innerHTML + HTML;
}


function chuyenDanhSachGioHangVaoHTML(danhSachGioHang) {
    var htmlTong = '';
    for (var i = 0; i < danhSachGioHang.length; i++) {
        html = chuyenDoiTuongGioHangVaoHTML(laySanPhamTheoId(danhSachGioHang[i].id), danhSachGioHang[i].soluong);
        htmlTong = htmlTong + html;
    }
    return htmlTong;
}


function chuyenDoiTuongGioHangVaoHTML(sanPham, soluong) {
    var html = `   <div class="item-gio-hang">  ` +
        `  <div class="hinhAnh">  ` +
        `  <img src="${sanPham.hinhAnh}">  ` +
        `  </div>  ` +
        `  <p class="ten">${sanPham.ten}</p>  ` +
        `  <div class="gia">  ` +
        `  <span class="gia-goc">${sanPham.giaGoc} đ</span>  ` +
        `  <span class="gia-ban">${sanPham.tinhGiaban()} đ</span>  ` +
        `  </div>  ` +
        `  <input type="number" class="soLuong" value = "${soluong}" oninput="onInputSoLuong('${sanPham.id}')">  ` +
        `  <p class="tongTien">${sanPham.tinhGiaban() * soluong}</p>  ` +
        `  <div class="hanhh-dong" >  ` +
        `  <i class="fas fa-trash" onclick="onClickXoaSanPham('${sanPham.id}')" ></i>  ` +
        `  </div>  ` +
        `  </div>  `;
    return html;
}

function onClickXoaSanPham(id) {
    let nodeCha = event.target.parentElement;
    let nodeSanPham = nodeCha.parentElement;
    nodeSanPham.remove();

    let danhSachGioHang = loaddulieu("danhSachGioHang");
    let vitri = danhSachGioHang.findIndex(sp => sp.id == id);
    danhSachGioHang.splice(vitri, 1);
    ghidulieu(danhSachGioHang, "danhSachGioHang");

}
function onInputSoLuong(id) {
    let nodeCha = event.target.parentElement;
    let nodeTongtien = nodeCha.getElementsByClassName("tongTien")[0];

    let danhSachGioHang = loaddulieu("danhSachGioHang");

    let vitri = -1;
    for (let i = 0; i < danhSachGioHang.length; i++) {
        if (danhSachGioHang[i].id == id) {

            vitri = i;
            break;
        }
    }

    let sanpham = laySanPhamTheoId(id);

    if (parseInt(event.target.value) >= 1) {

        danhSachGioHang[vitri].soluong = parseInt(event.target.value);
    }
    ghidulieu(danhSachGioHang, "danhSachGioHang");


    console.log(sanpham.tinhGiaban());
    nodeTongtien.innerHTML = sanpham.tinhGiaban() * event.target.value;
}



function dangKy() {

    //b1:ktra dữ liệu có hợ lệ ko
    if (kiemTraHopLeFormDangKy() == true) {
        //b2: thực hiện xử lí đăng ký
        console.log("thực hiện đăng ký");
    }

}
/* mô tả:  kiểm tra form đăng ký có hợp lệ không , nếu hợp lệ thì trả về true còn không thì 
trả về false và hiển thị thông báo lỗi*/
function kiemTraHopLeFormDangKy() {
    var hopLe = true;
    //kiểm tra hợp lệ
    //b1: truy cập node để lấy dữ liệu
    var nodeHoTen = document.getElementById('hoTen');
    var nodeSoDienThoai = document.getElementById('soDienThoai');
    var nodeGmail = document.getElementById('gmail');
    var nodeNgaySinh = document.getElementById('ngaySinh');
    var nodeThoiGian = document.getElementById('thoiGian')

    var hoTen = nodeHoTen.value;
    var soDienThoai = nodeSoDienThoai.value;
    var gmail = nodeGmail.value;
    var ngaySinh = nodeNgaySinh.value;
    var thoiGian = nodeThoiGian.value;

    console.log("họ tên:" + hoTen);
    console.log("số điện thoại:" + soDienThoai);
    console.log("gmail: " + gmail);
    console.log("Ngày Sinh: " + ngaySinh);
    console.log("Thời Gian: " + thoiGian);

    var nodethongBaoloiChoHoTen = document.getElementById('thongBaoloiChoHoTen');
    nodethongBaoloiChoHoTen.innerHTML = " ";

    var nodethongBaoloiChoSDT = document.getElementById('thongBaoloiChoSDT');
    nodethongBaoloiChoSDT.innerHTML = " ";

    var nodethongBaoloiChoGmail = document.getElementById('thongBaoloiChoGmail');
    nodethongBaoloiChoGmail.innerHTML = /[a-z]+@[a-z]+.[a-z]{2,}$/;

    var nodethongBaoloiChoNgaySinh = document.getElementById('thongBaoloiChoNgaySinh');
    nodethongBaoloiChoNgaySinh.innerHTML = " ";

    var nodethongBaoloiChoThoiGian = document.getElementById('thongBaoloiChoThoiGian');
    nodethongBaoloiChoThoiGian.innerHTML = " ";
    //b2: kiểm tra dữ liệu : có hợp lệ ko ->
    if (hoTen == null || hoTen.length <= 0) {
        nodethongBaoloiChoHoTen.innerHTML = "Họ tên ko được để trống !";

        hopLe = false;

    }
    if (soDienThoai == null || soDienThoai.length < 10 || soDienThoai.length > 11) {
        nodethongBaoloiChoSDT.innerHTML = "Số điện thoại ko được để trống !";
        hopLe = false;

    }
    if (gmail == null || gmail.length <= 0) {
        nodethongBaoloiChoGmail.innerHTML = "Gmail ko được để trống !";

        hopLe = false;

    }
    if (ngaySinh == null || ngaySinh.length < 30) {
        nodethongBaoloiChoNgaySinh.innerHTML = "Ngày sinh ko được để trống !";
        hopLe = false;

    }
    if (thoiGian == null || thoiGian.length < 24) {
        nodethongBaoloiChoThoiGian.innerHTML = "Thời gian ko được để trống !";

        hopLe = false;

    }

    return hopLe;


}
