let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let hvt = "Mã khách hàng: ";
let tc = "<br>Tiền cáp: ";

document.getElementById("sl_b4").onchange = function () {
  let sl = document.getElementById("sl_b4").value;
  let kn = document.getElementById("ip_kn_b4");

  if (sl == "Doanh Nghiệp") {
    kn.style.display = "inline-block";
    kn.disabled = false;
  } else {
    kn.style.display = "none";
    kn.disabled = true;
  }
};

document.getElementById("btn_b4").onclick = function () {
  // mkh
  let mkh = document.getElementById("ip_mkh_b4").value;

  document.getElementById("lb_mkh_b4").innerHTML = hvt + mkh;

  // tc
  let sl = document.getElementById("sl_b4").value;
  let kcc = parseInt(document.getElementById("ip_kcc_b4").value);
  let kn = parseInt(document.getElementById("ip_kn_b4").value);

  // Nha Dan
  let xuLyHDNhaDan = 4.5;
  let dichVuCBNhaDan = 20.5;
  let thueKenhCCNhaDan = 7.5;

  // Doanh Nghiep
  let xuLyHDDoanhNghiep = 15;
  let dichVuCBDoanhNghiep = 75;
  let thueKenhCCDoanhNghiep = 50;

  if (isNaN(kcc)) {
    kcc = 0;
  }

  if (isNaN(kn)) {
    kn = 10;
  }

  let ttc;

  if (sl == "Nhà Dân") {
    ttc = xuLyHDNhaDan + dichVuCBNhaDan + thueKenhCCNhaDan * kcc;
    document.getElementById("lb_tc_b4").innerHTML = tc + ttc;
  } else if (sl == "Doanh Nghiệp") {
    if (kn > 10) {
      ttc =
        xuLyHDDoanhNghiep +
        (kn - 10) * 5 +
        dichVuCBDoanhNghiep +
        thueKenhCCDoanhNghiep * kcc;
      document.getElementById("lb_tc_b4").innerHTML = tc + ttc;
    } else {
      ttc =
        xuLyHDDoanhNghiep + dichVuCBDoanhNghiep + thueKenhCCDoanhNghiep * kcc;
      document.getElementById("lb_tc_b4").innerHTML = tc + ttc;
    }
  } else {
    document.getElementById("lb_tc_b4").innerHTML =
      "<br>Bạn chưa chọn loại Khách hàng!";
  }
};
