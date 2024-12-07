let formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

document.getElementById("btn_b3").onclick = function () {
  document.getElementById("lb_b3").innerHTML = formatter.format(
    document.getElementById("ip_b3").value * 23500
  );
};
