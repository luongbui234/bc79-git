let formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

let kh = "Khách hàng: ";
let tttncn = "<br>Tiền thuế thu nhập cá nhân: ";

let t0 = 60000000 * 0.05;
let t1 = (120000000 - 60000000) * 0.1;
let t2 = (210000000 - 120000000) * 0.15;
let t3 = (384000000 - 210000000) * 0.2;
let t4 = (624000000 - 384000000) * 0.25;
let t5 = (960000000 - 624000000) * 0.3;

document.getElementById("btn_b3").onclick = function () {
  let hvt = document.getElementById("ip_hvt").value;
  let tongThuNhap = parseInt(document.getElementById("ip_ttn_b3").value);
  let nguoiPhuThuoc = parseInt(document.getElementById("ip_npt_b3").value);

  document.getElementById("lb_kh_b3").innerHTML = kh + hvt;

  if (isNaN(nguoiPhuThuoc)) {
    nguoiPhuThuoc = 0;
  }

  let tienThueThuNhapCaNhan = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;

  if (tienThueThuNhapCaNhan <= 60000000) {
    tienThueThuNhapCaNhan = tienThueThuNhapCaNhan * 0.05;
  } else if (tienThueThuNhapCaNhan <= 120000000) {
    tienThueThuNhapCaNhan = (tienThueThuNhapCaNhan - 60000000) * 0.1 + t0;
  } else if (tienThueThuNhapCaNhan <= 210000000) {
    tienThueThuNhapCaNhan =
      (tienThueThuNhapCaNhan - 120000000) * 0.15 + t0 + t1;
  } else if (tienThueThuNhapCaNhan <= 384000000) {
    tienThueThuNhapCaNhan =
      (tienThueThuNhapCaNhan - 210000000) * 0.2 + t0 + t1 + t2;
  } else if (tienThueThuNhapCaNhan <= 624000000) {
    tienThueThuNhapCaNhan =
      (tienThueThuNhapCaNhan - 384000000) * 0.25 + t0 + t1 + t2 + t3;
  } else if (tienThueThuNhapCaNhan <= 960000000) {
    tienThueThuNhapCaNhan =
      (tienThueThuNhapCaNhan - 624000000) * 0.3 + t0 + t1 + t2 + t3 + t4;
  } else {
    tienThueThuNhapCaNhan =
      (tienThueThuNhapCaNhan - 960000000) * 0.35 + t0 + t1 + t2 + t3 + t4 + t5;
  }

  if (isNaN(tongThuNhap)) {
    document.getElementById("lb_tt_b3").innerHTML =
      "<br>Bạn chưa nhập Tổng thu nhập!";
  } else {
    document.getElementById("lb_tt_b3").innerHTML =
      tttncn + formatter.format(tienThueThuNhapCaNhan);
  }
};
