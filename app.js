let add = document.querySelector("#add");
let output = document.querySelector("#output");

add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;

  output.innerText = result;
  if (result % 2 === 0) {
    output.style.backgroundColor = "#ffcc00";
    output.style.animation = "float 3.5s ease-in-out infinite"; // Change color if result is even
  } else {
    output.style.backgroundColor = "#00bb00";
    output.style.animation = "none";
  }
});

let subtract = document.getElementById("subtract");
subtract.addEventListener("click", function() {
    let result = Number(output.innerText) - 1;
  
    output.innerText = result;

    if (result < 0) {
        output.innerText = "0";
        output.style.backgroundColor = "red";
        output.style.animation = "none"; // Remove animation if result is negative
    } else if (result % 2 === 0) {
        output.style.animation = "float 3.5s ease-in-out infinite";
        output.style.backgroundColor = "#ffcc00"; // Change color if result is even
    } else {
        output.style.backgroundColor = "#00bb00";
        output.style.animation = "none";
    }
});

function reset() {
    output.innerText = "0";
    output.style.backgroundColor = "#00bb00";
    output.style.animation = "none";
}

// console.log(output.value)
