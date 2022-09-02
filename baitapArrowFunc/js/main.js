const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let demColor = () => {
  let color = [];
  for (let i = 0; i < colorList.length; i++) {
    color += `
      <button class="color-button ${colorList[i]} "></button>    
      `;
  }
  document.getElementById("colorContainer").innerHTML = color;
};

demColor();

let home = document.querySelectorAll(".color-button");

for (let i = 0; i < home.length; i++) {
  home[i].onclick = () => {
    document.getElementById("house").classList = `house ${colorList[i]}`;
  };
}
