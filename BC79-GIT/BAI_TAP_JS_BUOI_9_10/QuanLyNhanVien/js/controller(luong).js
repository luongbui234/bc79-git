let formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

let layThongTinTuForm = () => {
  let tkNV = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let datepicker = document.getElementById("datepicker").value;
  let luongCB = document.getElementById("luongCB").value * 1;
  let chucvu = document.getElementById("chucvu").value;
  let giolam = document.getElementById("gioLam").value * 1;

  let tongluong = 0;
  if (chucvu == "Sếp") {
    tongluong = luongCB * 3;
  } else if (chucvu == "Trưởng phòng") {
    tongluong = luongCB * 2;
  } else if (chucvu == "Nhân viên") {
    tongluong = luongCB;
  } else {
    tongluong;
  }

  let loainhanvien = "Trung bình";
  if (giolam >= 192) {
    loainhanvien = "Xuất sắc";
  } else if (giolam >= 176) {
    loainhanvien = "Giỏi";
  } else if (giolam >= 160) {
    loainhanvien = "Khá";
  } else {
    loainhanvien;
  }

  let nhanVien = new NhanVien(
    tkNV,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    giolam,
    tongluong,
    loainhanvien
  );
  return nhanVien;
};

const renderDSNV = (DSNV) => {
  let contentHtml = "";

  for (let i = 0; i < DSNV.length; i++) {
    let nhanVien = DSNV[i];

    let tr = ` <tr>
                <td>${nhanVien.tkNV}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.datepicker}</td>
                <td>${nhanVien.chucvu}</td>
                <td>${formatter.format(nhanVien.tongluong)}</td>
                <td>${nhanVien.loainhanvien}</td>
                <td>
                <button id="btnCapNhat" type="button" class="btn btn-success" onclick="capnhatNV()">Cập nhật</button>
                <button id="btnXoa" type="button" class="btn btn-danger" onclick="xoaNV()">Xóa</button>
                </td>
              </tr>`;
    contentHtml += tr;
  }

  document.getElementById("tableDanhSach").innerHTML = contentHtml;
};

// validation

// const showDataForm = (sv) => {
//   document.getElementById("txtMaSV").value = sv.maSV;
//   document.getElementById("txtTenSV").value = sv.hoTen;
//   document.getElementById("txtEmail").value = sv.email;
//   document.getElementById("txtPass").value = sv.matKhau;
//   document.getElementById("txtDiemToan").value = sv.diemToan;
//   document.getElementById("txtDiemLy").value = sv.diemLy;
//   document.getElementById("txtDiemHoa").value = sv.diemHoa;
// };
