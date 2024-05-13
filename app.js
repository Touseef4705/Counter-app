let add = document.querySelector("#add");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;


  output.innerText = result;
});

let subtract = document.getElementById("subtract");
subtract.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    output.innerText = result;

    if(result < 0){
        output.innerText = "0"
    }
})


function reset() {
    let output = document.querySelector("#output");
    output.innerText = "0"
}