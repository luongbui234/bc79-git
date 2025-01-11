let DSNV = [];

let themNV = () => {
  let nv = layThongTinTuForm();

  DSNV.push(nv);
  renderDSNV(DSNV);
};

// let popup_info = () => {
//   let popup_tkNV = document.getElementById("popup_tkNV");
//   let popup_name = document.getElementById("popup_name");
//   let popup_email = document.getElementById("popup_email");
//   let popup_password = document.getElementById("popup_pass_word");
//   let popup_datepicker = document.getElementById("popup_ngay_lam");
//   let popup_luongCB = document.getElementById("popup_luong_co_ban");
//   let popup_chucvu = document.getElementById("popup_chuc_vu");
//   let popup_giolam = document.getElementById("popup_gio_lam");
// };

let index;
// mo popup cap nhat
let mocapnhatNV = (i) => {
  index = i;
  let popup = document.getElementById("popup_cap_nhat");

  let dt = DSNV[index];

  let popup_tkNV = document.getElementById("popup_tkNV");
  let popup_name = document.getElementById("popup_name");
  let popup_email = document.getElementById("popup_email");
  let popup_password = document.getElementById("popup_pass_word");
  let popup_datepicker = document.getElementById("popup_ngay_lam");
  let popup_luongCB = document.getElementById("popup_luong_co_ban");
  let popup_chucvu = document.getElementById("popup_chuc_vu");
  let popup_giolam = document.getElementById("popup_gio_lam");

  popup_tkNV.value = dt.tkNV;
  popup_name.value = dt.name;
  popup_email.value = dt.email;
  popup_password.value = dt.password;
  popup_datepicker.value = dt.datepicker;
  popup_luongCB.value = dt.luongCB;
  popup_chucvu.value = dt.chucvu;
  popup_giolam.value = dt.giolam;

  popup.style.display = "block";
};

let capnhatNV = () => {
  let dt = DSNV[index];

  let popup_tkNV = document.getElementById("popup_tkNV");
  let popup_name = document.getElementById("popup_name");
  let popup_email = document.getElementById("popup_email");
  let popup_password = document.getElementById("popup_pass_word");
  let popup_datepicker = document.getElementById("popup_ngay_lam");
  let popup_luongCB = document.getElementById("popup_luong_co_ban");
  let popup_chucvu = document.getElementById("popup_chuc_vu");
  let popup_giolam = document.getElementById("popup_gio_lam");

  dt.tkNV = popup_tkNV.value;
  dt.name = popup_name.value;
  dt.email = popup_email.value;
  dt.password = popup_password.value;
  dt.datepicker = popup_datepicker.value;
  dt.luongCB = popup_luongCB.value;
  dt.chucvu = popup_chucvu.value;
  dt.giolam = popup_giolam.value;

  let tongluong = 0;
  if (dt.chucvu == "Sếp") {
    tongluong = dt.luongCB * 3;
  } else if (dt.chucvu == "Trưởng phòng") {
    tongluong = dt.luongCB * 2;
  } else if (dt.chucvu == "Nhân viên") {
    tongluong = dt.luongCB;
  } else {
    tongluong;
  }

  dt.tongluong = tongluong;

  let loaiNV = "Trung bình";
  if (dt.giolam >= 192) {
    loaiNV = "Xuất sắc";
  } else if (dt.giolam >= 176) {
    loaiNV = "Giỏi";
  } else if (dt.giolam >= 160) {
    loaiNV = "Khá";
  } else {
    loaiNV;
  }

  dt.loaiNV = loaiNV;

  renderDSNV(DSNV);

  dongcapnhatNV();
};

// dong popup cap nhat
let dongcapnhatNV = () => {
  let popup = document.getElementById("popup_cap_nhat");

  popup.style.display = "none";
};

// xoa nhan vien
let xoaNV = (i) => {
  DSNV.splice(i, 1);

  renderDSNV(DSNV);
};

// tim kiem loai nhan vien
let j = 0;
let ip = document.getElementById("searchName");
ip.addEventListener("input", function () {
  let DSLNV = [];

  for (let i = 0; i < DSNV.length; i++) {
    if (DSNV[i].loaiNV == ip.value) {
      DSLNV.push(DSNV[i]);
    }
  }

  if (ip.value == "") {
    renderDSNV(DSNV);
  } else {
    renderDSNV(DSLNV);
  }
});
