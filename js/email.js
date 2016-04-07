var host = "nouvelon.ca";

function clean(info) {
    info.nom = info.nom.replace(/-/g, "");
    info.nom = info.nom.replace(new RegExp(/[àáâãäå]/g), "a");
    info.nom = info.nom.replace(new RegExp(/æ/g), "ae");
    info.nom = info.nom.replace(new RegExp(/ç/g), "c");
    info.nom = info.nom.replace(new RegExp(/[èéêë]/g), "e");
    info.nom = info.nom.replace(new RegExp(/[ìíîï]/g), "i");
    info.nom = info.nom.replace(new RegExp(/ñ/g), "n");
    info.nom = info.nom.replace(new RegExp(/[òóôõö]/g), "o");
    info.nom = info.nom.replace(new RegExp(/œ/g), "oe");
    info.nom = info.nom.replace(new RegExp(/[ùúûü]/g), "u");
    info.nom = info.nom.replace(new RegExp(/[ýÿ]/g), "y");
    info.prenom = info.prenom.replace(/-/g, "");
    info.prenom = info.prenom.replace(new RegExp(/[àáâãäå]/g), "a");
    info.prenom = info.prenom.replace(new RegExp(/æ/g), "ae");
    info.prenom = info.prenom.replace(new RegExp(/ç/g), "c");
    info.prenom = info.prenom.replace(new RegExp(/[èéêë]/g), "e");
    info.prenom = info.prenom.replace(new RegExp(/[ìíîï]/g), "i");
    info.prenom = info.prenom.replace(new RegExp(/ñ/g), "n");
    info.prenom = info.prenom.replace(new RegExp(/[òóôõö]/g), "o");
    info.prenom = info.prenom.replace(new RegExp(/œ/g), "oe");
    info.prenom = info.prenom.replace(new RegExp(/[ùúûü]/g), "u");
    info.prenom = info.prenom.replace(new RegExp(/[ýÿ]/g), "y");
    goMail(info.prenom, info.nom);
}

function goMail(prenom, nom) {
    window.location.href = "mailto:" + prenom.toLowerCase() + "." + nom.toLowerCase() + "@" + host;
} 
