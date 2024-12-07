document.getElementById("btn_b5").onclick = function () {
  let kyso = parseFloat(document.getElementById("ip_b5").value);
  let kyso1 = kyso % 10;
  console.log(kyso1);
  let kyso2 = parseInt(kyso / 10);
  console.log(kyso);
  document.getElementById("lb_b5").innerHTML = kyso1 + kyso2;
};
