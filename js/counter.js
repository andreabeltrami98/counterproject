// Counter script application

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const add10 = document.getElementById("add10");
const subtract = document.getElementById("subtract");
const subtract10 = document.getElementById("subtract10");
const reset = document.getElementById("reset");

let count = 0;  // Counter start from 0

add.addEventListener("click", () => {
    count++;
    counter.innerText = count;
}); // Add 1 from number inside counter

add10.addEventListener("click", () => {
    count += 10;
    counter.innerText = count;
}); // Add 10 from number inside counter

subtract.addEventListener("click", () => {
    count--;
    counter.innerText = count;
}); // Subtract 1 from number inside counter

subtract10.addEventListener("click", () => {
    count -= 10;
    counter.innerText = count;
}); // Subtract 10 from number inside counter

reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
}); // Reset counter to 0