document.getElementById("btn_b4").onclick = function () {
  let dai = parseFloat(document.getElementById("ip_1_b4").value);
  let rong = parseFloat(document.getElementById("ip_2_b4").value);

  let dientich = dai * rong;
  let chuvi = (dai + rong) * 2;

  document.getElementById("lb_b4").innerHTML =
    "Diện tích: " + dientich + "<br>Chu vi: " + chuvi;
};
