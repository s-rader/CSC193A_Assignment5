
function bigger() {
    document.getElementById("textArea").style.fontSize = "24px";
}

function handleRadioChange(radio){    
    if (radio.checked) {
        textAreaStyle = document.getElementById("textArea").style;
        if (radio.id === "FancyShmancy"){
            textAreaStyle.fontWeight = "bold"
            textAreaStyle.color = "blue";
            textAreaStyle.textDecoration = "underline";
        } else {
            textAreaStyle.fontWeight = "normal";
            textAreaStyle.color = "black";
            textAreaStyle.textDecoration = "";
        }
    }
}

function moo(){
    var originalString = document.getElementById("textArea").value;
    var words = originalString.split(/\s+/);
    document.getElementById("textArea").value = words.join("moo ");
}