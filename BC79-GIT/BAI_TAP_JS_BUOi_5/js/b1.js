let bdd = "Bạn đã <label style='color: green;'>đậu.</label> ";
let bdr = "Bạn đã <label style='color: red;'>rớt.</label> ";
let td = "<br>Tổng điểm: ";
let coDiem0 = "<br>Có môn điểm 0";

document.getElementById("btn_b1").onclick = function () {
  let dc = parseFloat(document.getElementById("ip_dc").value);
  let dm1 = parseFloat(document.getElementById("ip_1_b1").value);
  let dm2 = parseFloat(document.getElementById("ip_2_b1").value);
  let dm3 = parseFloat(document.getElementById("ip_3_b1").value);

  let sum = dm1 + dm2 + dm3;

  if (isNaN(dc)) {
    document.getElementById("lb_b1").innerHTML = "Bạn chưa nhập điểm chuẩn!";
  } else if (
    isNaN(dm1) ||
    isNaN(dm2) ||
    isNaN(dm3) ||
    dm1 <= 0 ||
    dm2 <= 0 ||
    dm3 <= 0
  ) {
    document.getElementById("lb_b1").innerHTML = bdr + coDiem0;
  } else if (sum >= dc) {
    document.getElementById("lb_b1").innerHTML = bdd + td + sum;
  } else {
    document.getElementById("lb_b1").innerHTML = bdr + td + sum;
  }
};
