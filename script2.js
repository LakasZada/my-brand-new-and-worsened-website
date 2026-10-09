console.log("test")
prompt.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        enter();
        event.preventDefault();
    }
});