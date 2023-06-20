const dot_design = document.getElementById("dot_design");

for (let i = 0; i < 144; i++) {
  const new_dot = document.createElement("div");
  new_dot.setAttribute("class", "dot");
  dot_design.appendChild(new_dot);
}


/*
dot_design.forEach((item) => {
  for (let i = 0; i < 144; i++) {
    const new_dot = document.createElement("div");
    new_dot.setAttribute("class", "dot");
    item.appendChild(new_dot);
  }
});
*/
console.log(dot_design.childNodes);