function clean(e) { e.nom = e.nom.replace(/-/g, ""), e.nom = e.nom.replace(new RegExp(/[àáâãäå]/g), "a"), e.nom = e.nom.replace(new RegExp(/æ/g), "ae"), e.nom = e.nom.replace(new RegExp(/ç/g), "c"), e.nom = e.nom.replace(new RegExp(/[èéêë]/g), "e"), e.nom = e.nom.replace(new RegExp(/[ìíîï]/g), "i"), e.nom = e.nom.replace(new RegExp(/ñ/g), "n"), e.nom = e.nom.replace(new RegExp(/[òóôõö]/g), "o"), e.nom = e.nom.replace(new RegExp(/œ/g), "oe"), e.nom = e.nom.replace(new RegExp(/[ùúûü]/g), "u"), e.nom = e.nom.replace(new RegExp(/[ýÿ]/g), "y"), e.prenom = e.prenom.replace(/-/g, ""), e.prenom = e.prenom.replace(new RegExp(/[àáâãäå]/g), "a"), e.prenom = e.prenom.replace(new RegExp(/æ/g), "ae"), e.prenom = e.prenom.replace(new RegExp(/ç/g), "c"), e.prenom = e.prenom.replace(new RegExp(/[èéêë]/g), "e"), e.prenom = e.prenom.replace(new RegExp(/[ìíîï]/g), "i"), e.prenom = e.prenom.replace(new RegExp(/ñ/g), "n"), e.prenom = e.prenom.replace(new RegExp(/[òóôõö]/g), "o"), e.prenom = e.prenom.replace(new RegExp(/œ/g), "oe"), e.prenom = e.prenom.replace(new RegExp(/[ùúûü]/g), "u"), e.prenom = e.prenom.replace(new RegExp(/[ýÿ]/g), "y"), goMail(e.prenom, e.nom) } function goMail(e, n) { window.location.href = "mailto:" + e.toLowerCase() + "." + n.toLowerCase() + "@" + host } var host = "nouvelon.ca";

