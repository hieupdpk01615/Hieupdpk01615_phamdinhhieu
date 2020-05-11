loadSanPham();

function onclickThemSanPhamMoi() {

    var nodeHinhAnh = document.getElementById('hinhAnh');
    var hinhAnh = nodeHinhAnh.value;

    var nodeTen = document.getElementById('ten');
    var ten = nodeTen.value;

    var nodeGiagoc = document.getElementById('giagoc');
    var giagoc = nodeGiagoc.value;

    var nodePhanTramGiamGia = document.getElementById('phanTramGiamGia');
    var phanTramGiamGia = nodePhanTramGiamGia.value;

    var nodeKhuVuc = document.getElementById('khuVuc');
    var khuVuc = nodeKhuVuc.value;

    var sanPham = taoSanPham(taoid(), hinhAnh, ten, giagoc, phanTramGiamGia, khuVuc);

    var danhSachSanPham = loaddulieu("danhSachSanPham");

    danhSachSanPham.push(sanPham);

    ghidulieu(danhSachSanPham, "danhSachSanPham");
    setTimeout(loadSanPham(), 10);
    alert("Đã thêm sản phẩm");
}

function loadSanPham() {
    var nodeChuaSanPham = document.getElementById("danhSachSanPham");
    var data = themLaiFunctionVaoDanhSach(loaddulieu("danhSachSanPham"));
    nodeChuaSanPham.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        nodeChuaSanPham.innerHTML += taoNodeSanPham(data[i]);
    }
        
    if(data.length == 0 )
        nodeChuaSanPham.innerHTML = "Không có sản phẩm để hiển thị! Hãy thêm sản phẩm mới. a hi hi";
}

function taoNodeSanPham(sanPham) {

    let node = "";

    node += `<div class = "san-pham">`;
    node += `<img class = "khung-hinh" src="${sanPham.hinhAnh}" alt="">`;
    node += `<p class = "ten-san-pham">${sanPham.ten}</p>`;
    node += `<div class="gia-san-pham">`;

    if (sanPham.phanTram > 0)
        node += `<p class= "gia-goc">${themChamVaoSo(sanPham.giaGoc)} đ</p>`;

    node += `<p class="gia-ban">${themChamVaoSo(sanPham.tinhGiaban())} đ</p>`;
    node += `</div>`;
    node += `<img src="css/images/icon-sua.png" alt="" id = "nutSua" class="nut-chuc-nang" onclick="onClickNutSua('${sanPham.id}')">`;
    node += `<img src="css/images/icon-xoa.png" alt="" id = "nutXoa" class="nut-chuc-nang"onclick="onClickNutXoa('${sanPham.id}')">`;
    node += `</div>`;

    return node;
}

function onClickNutSua(id) {
    alert("Chức năng đang phát triển!");
}
function onClickNutXoa(id) {
    let data = loaddulieu("danhSachSanPham");
    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            index = i;
            break;
        }
    }

    if (index > -1) {
        data.splice(index, 1);
        ghidulieu(data, "danhSachSanPham");
    }
    else
        alert("Lỗi sản phẩm không tồn tại");
    loadSanPham();
}