function taoid() {
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + "-" + thoiGianHienTai;
    return id;
}

function loaddulieu(tendata) {
    var data = JSON.parse(localStorage.getItem(tendata));
    if (data == null)
        data = new Array();
    return data;
}

function ghidulieu(arrayDulieu, tendata) {
    localStorage.setItem(tendata, JSON.stringify(arrayDulieu));
}

function themChamVaoSo(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function taoSanPham(id, hinhAnh, ten, giaGoc, phanTram, khuVuc) {

    var sanPham = new Object();
    if (id == null)
        id = taoid();
    sanPham.id = id;
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTram = phanTram;
    sanPham.khuVuc = khuVuc;

    sanPham.tinhGiaban = function() {
        return this.giaGoc - this.giaGoc * (this.phanTram / 100);
    }
    return sanPham;
}

function chuyenDoiTuongThanhHTML(sanPham) {
    var html = '';

    html += `<div class="san-pham">`;
    html += ` <div class = "hinh-anh-san-pham" >`;

    if(sanPham.phanTram > 0)
    html += `      <div class="giam-gia"> -${sanPham.phanTram}%</div>`;

    html += ` <img src="${sanPham.hinhAnh}">`;
    html += `</div>`;
    html += ` <h1 class="ten-san-pham" >${sanPham.ten}</h1>`;

    if(sanPham.phanTram > 0)
    html += `<p class="gia-goc-san-pham">${themChamVaoSo(sanPham.giaGoc)} đ</p>`;
    
    html += ` <p class = "gia-ban" >${themChamVaoSo(sanPham.tinhGiaban())} đ </p>`;
    html += `<button class="them-gio" onclick="clickGioHang('${sanPham.id}')"> Thêm vào giỏ hàng </button>`;
    html += `</div>`;

    return html;
}

function chuyenDanhSachSanPhamSangHTML(danhSachSanPham) {
    var htmlTong = '';

    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];

        var html = chuyenDoiTuongThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    return htmlTong;
}

function themLaiFunctionVaoDanhSach(data) {
    var dataCoFunction = new Array();

    for (let i = 0; i < data.length; i++) {
        let sanPham = taoSanPham(data[i].id, data[i].hinhAnh, data[i].ten, data[i].giaGoc, data[i].phanTram, data[i].khuVuc);
        dataCoFunction.push(sanPham);
    }
    return dataCoFunction;
}

function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachTuLocall();
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai =   danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }

    sanPham = taoSanPham( sanPham.id,sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTram, sanPham.khuVuc);
    console.log(sanPham);
    return sanPham;
}

function layDanhSachTuLocall() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

    return danhSachSanPham;
}
