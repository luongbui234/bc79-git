let formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

document.getElementById("btn_b1").onclick = function () {
  document.getElementById("lb_b1").innerHTML = formatter.format(
    document.getElementById("ip_b1").value * 100000
  );
};
