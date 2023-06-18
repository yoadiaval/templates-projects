const dot_design = document.querySelectorAll(".dot_design");




dot_design.forEach(item=>{
    for (let i = 0; i < 144; i++) {
    const new_dot = document.createElement("div");
    new_dot.setAttribute("class", "dot");
    item.appendChild(new_dot);
    }
})


