// JavaScript Document

function get() {
    var url = window.location.href;
    set(url);
}

function set(adresse) {
    switch (adresse) {
        case "http://infocnd.github.io/#ballon":
            alert("ballon");  
            break;
    
        default:
            break;
    }
}

window.addEventListener("load", get);