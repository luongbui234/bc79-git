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

  let loaiNV = "Trung bình";
  if (giolam >= 192) {
    loaiNV = "Xuất sắc";
  } else if (giolam >= 176) {
    loaiNV = "Giỏi";
  } else if (giolam >= 160) {
    loaiNV = "Khá";
  } else {
    loaiNV;
  }

  let nhanVien = new NhanVien(
    // nextId++,
    tkNV,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    giolam,
    tongluong,
    loaiNV
  );
  return nhanVien;
};

const renderDSNV = (DSNV) => {
  let contentHtml = "";

  for (let i = 0; i < DSNV.length; i++) {
    let nV = DSNV[i];

    let tr = ` <tr>
                <td>${nV.tkNV}</td>
                <td>${nV.name}</td>
                <td>${nV.email}</td>
                <td>${nV.datepicker}</td>
                <td>${nV.chucvu}</td>
                <td>${formatter.format(nV.tongluong)}</td>
                <td>${nV.loaiNV}</td>
                <td>
                <button id="btnCapNhat" type="button" class="btn btn-success" onclick="mocapnhatNV(${i})">Cập nhật</button>
                <button id="btnXoa" type="button" class="btn btn-danger" onclick="xoaNV(${i})">Xóa</button>
                </td>
              </tr>`;
    contentHtml += tr;
  }

  document.getElementById("tableDanhSach").innerHTML = contentHtml;
};
