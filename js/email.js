function get(lien) {
    var list = new Array();
    $.getJSON(lien, function(data) {
        for (var i = 0; i < data.length; i++) {
            var a = document.createElement("a");
            var br = document.createElement("br");
            a.href = "#";
            
            prenom = clean(data[i].prenom.toLowerCase());
            nom = clean(data[i].nom.toLowerCase());
            
            a.setAttribute("onclick", "goMail(" + '"' + prenom + '"' + ", " + '"' + nom + '"' + ")");
            a.innerText = data[i].prenom + " " + data[i].nom;
            document.getElementById("noms").appendChild(a);
            document.getElementById("noms").appendChild(br);
        }
    });
}


function clean(text) {
    text = text.replace(/-/g, ""), text = text.replace(new RegExp(/[àáâãäå]/g), "a"), text = text.replace(new RegExp(/æ/g), "ae"), text = text.replace(new RegExp(/ç/g), "c"), text = text.replace(new RegExp(/[èéêë]/g), "e"), text = text.replace(new RegExp(/[ìíîï]/g), "i"), text = text.replace(new RegExp(/ñ/g), "n"), text = text.replace(new RegExp(/[òóôõö]/g), "o"), text = text.replace(new RegExp(/œ/g), "oe"), text = text.replace(new RegExp(/[ùúûü]/g), "u"), text = text.replace(new RegExp(/[ýÿ]/g), "y");
    return text;
}

function goMail(e, n) {
    window.location.href = "mailto:" + e + "." + n + "@nouvelon.ca";
}
