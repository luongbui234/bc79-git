document.getElementById("btn_b2").onclick = function () {
  let st1 = parseFloat(document.getElementById("ip_1_b2").value);
  let st2 = parseFloat(document.getElementById("ip_2_b2").value);
  let st3 = parseFloat(document.getElementById("ip_3_b2").value);
  let st4 = parseFloat(document.getElementById("ip_4_b2").value);
  let st5 = parseFloat(document.getElementById("ip_5_b2").value);

  let sum = st1 + st2 + st3 + st4 + st5;
  if (!isNaN(sum)) {
    document.getElementById("lb_b2").innerHTML =
      (st1 + st2 + st3 + st4 + st5) / 5;
    console.log(st1 + st2 + st3 + st4 + st5);
  } else {
    document.getElementById("lb_b2").innerHTML = "Bạn chưa nhập đủ số!";
  }
};
