const getTB = (...rest) => {
  let tinhTB = 0;
  for (let i = 0; i < rest.length; i++) {
    tinhTB += rest[i] / rest.length;
  }
  return tinhTB;
};

document.getElementById("btnKhoi1").onclick = () => {
  let toan = document.getElementById("inpToan").value * 1;
  let ly = document.getElementById("inpLy").value * 1;
  let hoa = document.getElementById("inpHoa").value * 1;
  let output;
  output = getTB(toan, ly, hoa);
  document.getElementById("tbKhoi1").innerHTML = output;
};

document.getElementById("btnKhoi2").onclick = () => {
  let van = document.getElementById("inpVan").value * 1;
  let su = document.getElementById("inpSu").value * 1;
  let dia = document.getElementById("inpDia").value * 1;
  let anh = document.getElementById("inpEnglish").value * 1;

  let output;
  output = getTB(van, su, dia, anh);
  document.getElementById("tbKhoi2").innerHTML = output;
};
