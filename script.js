console.log("Bad-ai JS initiated");
let model = "smollm:135m";
console.log(model);
let prompt = document.getElementById("prompt");
function enter() {
    let userPrompt = document.createElement("p");
    userPrompt.textContent = prompt.value;
    console.log(userPrompt);
}
prompt.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        enter();
        event.preventDefault();
    }
});

