function saveToStorage(){
    var radio;
    if(this.radio1.checked) radio="radio1";
    else if(this.radio2.checked) radio="radio2";
    chrome.storage.sync.set({"uname": this.uname.value, "radio":radio},
    function(){
      console.log("Username set to: "+ this.uname.value +"\n Radio set to: "+ radio);
    });
}

function loadForm(getValue){
    var form1 = document.getElementById("form1");
    var val=getValue.uname;
    var radio =getValue.radio;
    if(typeof(val) != "undefined") form1.uname.value=val;
    else form1.uname.value="";
    if(typeof(radio) == "undefined") radio="radio1";
    document.getElementById(radio).checked=true;
    form1.onsubmit = saveToStorage.bind(form1);
    console.log("Load succesful: "+form1.uname.value);
}

window.onload = function(){
    chrome.storage.sync.get(["uname","radio"],
    function(value) {
        loadForm(value)
    });
}