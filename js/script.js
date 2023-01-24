// Button animation onclick

add.onmousedown = () => {
    add.style.backgroundColor = "rgba(124, 211, 255, 0.8)";
}

add.onmouseup = add.onmouseleave = () => {
    add.style.removeProperty("background-color");
}

add10.onmousedown = () => {
    add10.style.backgroundColor = "rgba(124, 211, 255, 0.8)";
}

add10.onmouseup = add10.onmouseleave = () => {
    add10.style.removeProperty("background-color");
}

subtract.onmousedown = () => {
    subtract.style.backgroundColor = "rgba(124, 211, 255, 0.8)";
}

subtract.onmouseup = subtract.onmouseleave = () => {
    subtract.style.removeProperty("background-color");
}

subtract10.onmousedown = () => {
    subtract10.style.backgroundColor = "rgba(124, 211, 255, 0.8)";
}

subtract10.onmouseup = subtract10.onmouseleave = () => {
    subtract10.style.removeProperty("background-color");
}

reset.onmousedown = () => {
    reset.style.backgroundColor = "rgba(255, 124, 245, 0.8)";
}

reset.onmouseup = reset.onmouseleave = () => {
    reset.style.removeProperty("background-color");
}