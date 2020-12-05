var textInput = document.querySelector("#text-Input");
var btnTranslate = document.querySelector("#btn-Translate");
var outputDiv = document.querySelector("#output-Div");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(input){
    return serverUrl + "?" + "text= " + input;
}
function errorHandler(error){
    console.log("error occured",error);
    alert("Oops! Something wrong with server. Please try again.")
}
function clickHandler(){
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var textTranslated = json.contents.translated;
        outputDiv.innerText = textTranslated;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)