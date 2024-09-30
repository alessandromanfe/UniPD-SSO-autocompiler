function fillField(getValue){
    var uBox = document.getElementById("j_username_js");
    var val = getValue.uname;
    var radio = getValue.radio;
    if(typeof(val) != "undefined") uBox.value = val;
    else uBox.value = "";
    if(typeof(radio) == "undefined") radio="radio1";
    var radioB = document.getElementById(radio);
    radioB.click();
}

setTimeout(function(){
    chrome.storage.sync.get(["uname","radio"],
    function(value){
        fillField(value);
    })
}, 100);
