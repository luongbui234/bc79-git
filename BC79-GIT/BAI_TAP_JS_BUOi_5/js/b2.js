let kh = "Khách hàng: ";
let td = "<br>Tiền điện: ";

document.getElementById("btn_b2").onclick = function () {
    let hvt = document.getElementById("ip_hvt").value;
    let kw = parseInt(document.getElementById("ip_kw").value);
    let ttd;

    document.getElementById("lb_kh_b2").innerHTML = kh + hvt;

    if (kw <= 50) {
        ttd = kw * 500; 
    } else if (kw <= 100) {
        ttd = (kw - 50) * 650 + 25000;
    } else if (kw <= 150) {
        ttd = (kw - 100) * 1100 + 57500;
    } else {
        ttd = (kw - 150) * 1300 + 112500;
    }

    document.getElementById("lb_kw_b2").innerHTML = td + ttd;
}