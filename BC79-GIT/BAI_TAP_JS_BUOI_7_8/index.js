let bai1 = document.getElementById("b1");
let bai2 = document.getElementById("b2");
let bai3 = document.getElementById("b3");
let bai4 = document.getElementById("b4");
let bai5 = document.getElementById("b5");
let bai6 = document.getElementById("b6");
let bai7 = document.getElementById("b7");
let bai8 = document.getElementById("b8");
let bai9 = document.getElementById("b9");
let bai10 = document.getElementById("b10");

// start function
let item_b1 = () => {
  bai1.style.width = "100%";
};

let item_b2 = () => {
  bai2.style.width = "100%";
};

let item_b3 = () => {
  bai3.style.width = "100%";
};

let item_b4 = () => {
  bai4.style.width = "100%";
};

let item_b5 = () => {
  bai5.style.width = "100%";
};

let item_b6 = () => {
  bai6.style.width = "100%";
};

let item_b7 = () => {
  bai7.style.width = "100%";
};

let item_b8 = () => {
  bai8.style.width = "100%";
};

let item_b9 = () => {
  bai9.style.width = "100%";
};

let item_b10 = () => {
  bai10.style.width = "100%";
};
// end function

// start close function
let btn_close = () => {
  bai1.style.width = "0";
  bai2.style.width = "0";
  bai3.style.width = "0";
  bai4.style.width = "0";
  bai5.style.width = "0";
  bai6.style.width = "0";
  bai7.style.width = "0";
  bai8.style.width = "0";
  bai9.style.width = "0";
  bai10.style.width = "0";
};
// end close function

let banChuaNhapSoN = "Bạn chưa nhập số N!";
let ketQua = "Kết quả: ";
let numberArr = [];

// start nut them so
let themSo = () => {
  let ip = parseFloat(document.getElementById("ip").value);
  let lb = document.getElementById("lb");

  if (ip == "") {
    ip = 0;
  }

  numberArr.push(ip);
  lb.innerHTML = numberArr;
};
// end nut them so

// start b1
let b1 = () => {
  let lb = document.getElementById("lb_b1");
  let tongSoDuong = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      tongSoDuong += item;
    }
  });
  lb.innerHTML = ketQua + tongSoDuong;
};
// end b1

// start b2
let b2 = () => {
  let lb = document.getElementById("lb_b2");
  let soLuongsoDuong = 0;

  numberArr.forEach((item) => {
    if (item > 0) {
      soLuongsoDuong++;
    }
  });
  lb.innerHTML = ketQua + soLuongsoDuong;
};
// end b2

// start b3
let b3 = () => {
  let lb = document.getElementById("lb_b3");
  let soNhoNhat = numberArr[0];

  numberArr.forEach((item) => {
    if (soNhoNhat > item) {
      soNhoNhat = item;
    }
  });

  if (numberArr.length === 0) {
    lb.innerHTML = ketQua + banChuaNhapSoN;
  } else {
    lb.innerHTML = ketQua + soNhoNhat;
  }
};
// end b3

// start b4
let b4 = () => {
  let lb = document.getElementById("lb_b4");
  let numberArrDuong = [];

  numberArr.forEach((item) => {
    if (item > 0) {
      numberArrDuong.push(item);
    }
  });

  let soDuongNhoNhat = numberArrDuong[0];

  numberArrDuong.forEach((item) => {
    if (soDuongNhoNhat > item) {
      soDuongNhoNhat = item;
    }
  });

  if (numberArr.length === 0) {
    lb.innerHTML = ketQua + banChuaNhapSoN;
  } else {
    lb.innerHTML = ketQua + soDuongNhoNhat;
  }
};
// end b4

// start b5
let b5 = () => {
  let lb = document.getElementById("lb_b5");
  let soChanCuoiCung;

  numberArr.forEach((item) => {
    if (item % 2 == 0) {
      soChanCuoiCung = item;
    }
  });

  if (numberArr.length === 0) {
    lb.innerHTML = ketQua + banChuaNhapSoN;
  } else {
    lb.innerHTML = ketQua + soChanCuoiCung;
  }
};
// end b5

// start b6
let b6 = () => {
  let lb = document.getElementById("lb_b6");
  let numberArrDoiViTri = numberArr;
  let index1 = parseInt(document.getElementById("ip_vt_1").value);
  let index2 = parseInt(document.getElementById("ip_vt_2").value);
  let giatri1 = numberArrDoiViTri[index1];
  let giatri2 = numberArrDoiViTri[index2];
  let temp;

  temp = giatri1;
  giatri1 = giatri2;
  giatri2 = temp;

  numberArrDoiViTri[index1] = giatri1;
  numberArrDoiViTri[index2] = giatri2;

  lb.innerHTML = ketQua + numberArrDoiViTri;
};
// end b6

// start b7
function compareNumbers(a, b) {
  return a - b;
}

let b7 = () => {
  let lb = document.getElementById("lb_b7");
  let numberArrSapXepTangDan = numberArr;
  numberArrSapXepTangDan.sort(compareNumbers);

  lb.innerHTML = ketQua + numberArrSapXepTangDan;
};
// end b7

// start b8
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let b8 = () => {
  let lb = document.getElementById("lb_b8");
  let snt;

  for (let item = 0; item <= numberArr.length; item++) {
    if (isPrime(numberArr[item])) {
      snt = numberArr[item];
      break;
    }
  }

  lb.innerHTML = ketQua + snt;
};
// end b8

// start b9
let numberArrNew = [];
let themSoMoi = () => {
  let ip = parseFloat(document.getElementById("ip_moi").value);
  let lb = document.getElementById("lb_moi");

  if (ip == "") {
    ip = 0;
  }

  numberArrNew.push(ip);
  lb.innerHTML = numberArrNew;
};

let b9 = () => {
  let lb = document.getElementById("lb_b9");
  let tongSoNguyen = 0;

  numberArrNew.forEach((item) => {
    if (Number.isInteger(item)) {
      tongSoNguyen++;
    }
  });

  lb.innerHTML = ketQua + tongSoNguyen;
};
// end b9

// start b10
let b10 = () => {
  let lb = document.getElementById("lb_b10");
  let numberArrDuong = [];
  let numberArrAm = [];
  let soDuong = "Số dương";
  let soAm = "Số Âm";
  let lon = " > ";
  let be = " < ";
  let bang = " = ";

  numberArr.forEach((item) => {
    if (item > 0) {
      numberArrDuong.push(item);
    } else if (item < 0) {
      numberArrAm.push(item);
    }
  });

  if (numberArrDuong.length > numberArrAm.length) {
    lb.innerHTML = ketQua + soDuong + lon + soAm;
  } else if (numberArrDuong.length < numberArrAm.length) {
    lb.innerHTML = ketQua + soDuong + be + soAm;
  } else {
    lb.innerHTML = ketQua + soDuong + bang + soAm;
  }
};
// end b10
