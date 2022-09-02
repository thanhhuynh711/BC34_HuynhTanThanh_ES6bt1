let a = document.getElementsByClassName("heading")[0].innerText;
let b = [...a];

let jump = () => {
  let content = "";
  for (let i = 0; i < b.length; i++) {
    content += `
        <span>${b[i]}</span>
      `;
  }
  document.querySelector(".heading").innerHTML = content;
};
jump();
