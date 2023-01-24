// Elements creator

const newDiv = document.createElement("div");   // Create div for buttons and counter
newDiv.id = "box";
newDiv.className = "box";
document.body.appendChild(newDiv);

const btnSubtract10 = document.createElement("button"); // Button for subtract 10 from number inside counter
btnSubtract10.id = "subtract10";
btnSubtract10.innerText = "-10";
box.appendChild(btnSubtract10);

const btnSubtract = document.createElement("button"); // Button for subtract 1 from number inside counter
btnSubtract.id = "subtract";
btnSubtract.innerText = "-";
box.appendChild(btnSubtract);

const spanCounter = document.createElement("span"); // Span for counter
spanCounter.id = "counter";
spanCounter.innerText = "0";
box.appendChild(spanCounter);

const btnAdd = document.createElement("button"); // Button for add 1 from number inside counter
btnAdd.id = "add";
btnAdd.innerText = "+";
box.appendChild(btnAdd);

const btnAdd10 = document.createElement("button"); // Button for add 10 from number inside counter
btnAdd10.id = "add10";
btnAdd10.innerText = "+10";
box.appendChild(btnAdd10);

const resetDiv = document.createElement("div"); // Create div for reset button
resetDiv.id = "resetDiv";
resetDiv.className = "box resetBox";
document.body.appendChild(resetDiv);

const btnReset = document.createElement("button"); // Button for reset counter to 0
btnReset.id = "reset";
btnReset.innerText = "RESET";
resetDiv.appendChild(btnReset);