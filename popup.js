function init() {
    var decodeButton = document.getElementById("decodeButton");
    var radios = document.getElementsByName("option");

    decodeButton.onclick = handleDecodeButton;

    for(var i=0; i < radios.length; i++){
        radios[i].onchange = handleRadioChange;
    }
}

function handleDecodeButton() {
    var hexInput = document.getElementById("hexInput");
    var hex = hexInput.value.replace(/\s/g, '');

    //decode
    var link = hex_to_ascii(hex);

    var footer = document.getElementById("footer");
    footer.innerHTML = `<a href=${link} target="_blank">${link}</a>`;
}

function handleEncodeButton() {
    var textInput = document.getElementById("hexInput");
    var text = textInput.value;

    //encode
    var hex = string_to_hex(utf8.encode(text));

    var footer = document.getElementById("footer");
    footer.innerHTML = `<p>${hex}</p>`;
}

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

function string_to_hex(tmp) {
    var str = '';
    for (var i = 0; i < tmp.length; i++) {
        str += tmp[i].charCodeAt(0).toString(16);
    }
    return str;
}

function handleRadioChange() {
    var radioh2t = document.getElementById("hex2text");
    var input = document.getElementById("hexInput");
    var button = document.getElementById("decodeButton");

    if(radioh2t.checked === true) {

        input.value = "";
        input.setAttribute("placeholder", "hex code");
        input.focus();

        button.innerText = "Decode";
        button.onclick = handleDecodeButton;
    }
    else {

        input.value = "";
        input.setAttribute("placeholder", "normal text");
        input.focus();
        
        button.innerText = "Encode";
        button.onclick = handleEncodeButton;
    }
}

window.onload = init;