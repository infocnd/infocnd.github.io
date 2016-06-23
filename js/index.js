function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}

function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";

}

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTop").classList.add("w3-card-4");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4");
    }
}

function myFunc(id) {
    document.getElementById(id).classList.toggle("w3-show");
    document.getElementById(id).previousElementSibling.classList.toggle("w3-theme");
}

openCours("cnd")

function openCours(nomcours) {
    var i;
    var x = document.getElementsByClassName("cours");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        //Android 2.3 Fallback
        //x[i].style.visibility = "hidden";
    }
    document.getElementById(nomcours).style.display = "block";
    //Android 2.3 Fallback
    //document.getElementById(nomcours).style.visibility = "visible";
}

function get() {
    var l = 0;
    var url = window.location.href;
    l = url.length;
    url = url.slice(25, l);
    set(url);
}

function set(adresse) {
    switch (adresse) {
        //Adresse voulu taper par l'utilisateur
    case "#er11":
        w3_close();
        openCours('hre4m');
        myFunc('rel11');
        myFunc('onz');
        break;
        
    case "#ballon":
        //Commandes pour afficher, à noter, c'est le même code pour ouvrir Activité
        w3_close();
        openCours('paract');
        myFunc('par');
        break;

    default:
        break;
    }
}

window.addEventListener("load", get);