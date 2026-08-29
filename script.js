console.log("Bad-ai initiated");
let model = "smollm:135m";
let prompt = document.getElementById("prompt");
let history = document.getElementById("history");
function enter() {
    let userText = document.createElement("p");
    let userPrefix = document.createElement("span");
    let userPrompt = document.createElement("span");
    userPrefix.textContent = "[user@node2 ~ ]$ ";
    userPrefix.className = "userPrefix";
    userPrompt.className = "userPrompt";
    userPrompt.textContent = prompt.value;
    askOllama(prompt.value);
    userText.appendChild(userPrefix);
    userText.appendChild(userPrompt);
    history.appendChild(userText);
    prompt.value = "";
}
prompt.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        enter();
        event.preventDefault();
    }
});
async function askOllama(message){
    let url = "https://ollama-api.ypac.lt/api/generate"
    let aiText = document.createElement("p");
    let aiPrefix = document.createElement("span");
    let aiResponse = document.createElement("span");
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: model,
            prompt: message,
            stream: false
        })
    };
    let fullResponse = await fetch(url, options);
    let jsonResponse = await fullResponse.json();
    aiPrefix.textContent = model + ">> ";
    aiPrefix.className = "aiPrefix";
    aiResponse.className = "aiResponse";
    aiResponse.textContent = jsonResponse.response;
    aiText.appendChild(aiPrefix);
    aiText.appendChild(aiResponse);
    history.appendChild(aiText);
    console.log(jsonResponse.response)
}
