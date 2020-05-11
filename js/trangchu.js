hienThiSanPham();
hienthiTopSanPham();
loadSoLuongGioHang();


function hienthiTopSanPham() {
    // node chứa sản phẩm trên html
    var nodeChuaDanhSachSanPham = document.getElementById("hienThiTopSanPham");

    // data lấy từ local
    var data = loaddulieu("danhSachTopSanPham");

    if (data.length == 0) { // nếu không có data thì thêm data mẫu
        // tạo danh sách 10 object sản phẩm từ sản phẩm mãu


        var data2 = loaddulieu('danhSachSanPham');
        for (let i = 0; i < 8; i++) {    
            data.push(data2[i]);

        }
        ghidulieu(data, "danhSachTopSanPham");
    }
    // thêm lại function
    data = themLaiFunctionVaoDanhSach(data);

    // tao danh sach the san pham
    let noiDungDivChuaDanhSach = chuyenDanhSachSanPhamSangHTML(data);
    nodeChuaDanhSachSanPham.innerHTML = noiDungDivChuaDanhSach;
}

function hienThiSanPham() {
    // node chứa sản phẩm trên html
    var nodeChuaDanhSachSanPham = document.getElementById('hienThiSanPham');

    // data lấy từ local
    var data = loaddulieu("danhSachSanPham");

    if (data.length == 0) { // nếu không có data thì thêm data mẫu
        // tạo danh sách 10 object sản phẩm từ sản phẩm mãu
        
            var Gold = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/699963362_dong-ho-chinh-hang-5.jpg', 'Đồng hồ Aries Gold', 5000000, 15, 'BMT');
            var Swiss = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/384798027_dong-ho-chinh-hang-4.jpg', 'Đồng hồ Atlantic Swiss', 6000000, 10, 'BMT');
            var Lemans = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/373860224_Untitled-14.jpg', 'Đồng hồ Jacques Lemans', 7000000, 10, 'BMT');
            var Swis = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/1244120338_E-3420.156.22.20.15.jpg', 'Đồng hồ Epos Swiss', 8000000, 5, 'BMT');
            var nam1 = taoSanPham(taoid(), 'https://image.voso.vn/users/vosoimage/images/8e57961564cbb9564fd96da4889ed699?t%5B0%5D=compress%3Alevel%3D100&accessToken=5c76ec802af0546fef4b04aa1e5400efb8d43ae912049e5379315d8700608151', 'Áo Nike Baclk', 500000, 5, 'BMT');
            var nam2 = taoSanPham(taoid(), 'https://cf.shopee.vn/file/9fae309cd2cc43a4f2d7905bc1a29b24', 'Áo Givenchy', 500000, 10, 'BMT');
            var nam3 = taoSanPham(taoid(), 'https://miro.medium.com/max/960/1*38rs6YoalUIghRoIUPYGfA.jpeg', 'Áo thun ', 300000, 4, 'BMT');
            var nam4 = taoSanPham(taoid(), 'https://gd2.alicdn.com/imgextra/i3/677608399/O1CN01ZeKcCV2Bun28ovWso_!!677608399.jpg', 'Áo Khoác', 8000000, 5, 'BMT');
            var nu1 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/699963362_dong-ho-chinh-hang-5.jpg', 'Đồng hồ Aries Gold', 5000000, 15, 'BMT');
            var nu2 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/384798027_dong-ho-chinh-hang-4.jpg', 'Đồng hồ Atlantic Swiss', 6000000, 10, 'BMT');
            var nu3 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/373860224_Untitled-14.jpg', 'Đồng hồ Jacques Lemans', 7000000, 10, 'BMT');
            var nu4 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/1244120338_E-3420.156.22.20.15.jpg', 'Đồng hồ Epos Swiss', 8000000, 5, 'BMT');
            var giay = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/699963362_dong-ho-chinh-hang-5.jpg', 'Đồng hồ Aries Gold', 5000000, 15, 'BMT');
            var giay2 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/384798027_dong-ho-chinh-hang-4.jpg', 'Đồng hồ Atlantic Swiss', 6000000, 10, 'BMT');
            var giay3 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/373860224_Untitled-14.jpg', 'Đồng hồ Jacques Lemans', 7000000, 10, 'BMT');
            var giay4 = taoSanPham(taoid(), 'https://www.dangquangwatch.vn//upload/product/1244120338_E-3420.156.22.20.15.jpg', 'Đồng hồ Epos Swiss', 8000000, 5, 'BMT');

            data.push(Gold);
            data.push(Swis);
            data.push(Lemans);
            data.push(Swiss);
            data.push(nam1);
            data.push(nam2);
            data.push(nam3);
            data.push(nam4);
            data.push(nu1);
            data.push(nu2);
            data.push(nu3);
            data.push(nu4);
            data.push(giay);
            data.push(giay2);
            data.push(giay3);
            data.push(giay4);

        
        ghidulieu(data, "danhSachSanPham");
    } else {
        ;
        data = themLaiFunctionVaoDanhSach(data);
    }

    // tao danh sach the san pham
    let noiDungDivChuaDanhSach = chuyenDanhSachSanPhamSangHTML(data);
    nodeChuaDanhSachSanPham.innerHTML = noiDungDivChuaDanhSach;
}

function clickGioHang(id) {
    var coHang = false;
    var data = loaddulieu("danhSachGioHang");

    var sanphamGio = new Object();
    sanphamGio.id = id;
    sanphamGio.soluong = 1;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].soluong++;
            coHang = true;
            break;
        }
    }

    if (coHang == false) {
        data.push(sanphamGio);
    }

    ghidulieu(data, "danhSachGioHang");
    loadSoLuongGioHang();
}

function loadSoLuongGioHang() {
    var data = loaddulieu("danhSachGioHang"), tong = 0, nodeSL;
    for (let i = 0; i < data.length; i++)
        tong += data[i].soluong;
    nodeSL = document.getElementById("soLuongGio");
    nodeSL.innerHTML = tong;
    tong > 0 ? nodeSL.style.display = "block" : nodeSL.style.display = "none";
}

