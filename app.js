function translate(question, lang) {
  if (lang === undefined) lang = "en";
  switch (lang) {
    case "mn":
      console.log("daraah uguulberiig orchuul : " + question);
      break;
    case "en":
      console.log("translate following sentence : " + question);
      break;
  }
}

function translateES6(question = "asuultaa oruulna uu", lang = "mn") {
  switch (lang) {
    case "mn":
      console.log("daraah uguulberiig orchuul : " + question);
      break;
    case "en":
      console.log("translate following sentence : " + question);
      break;
  }
}
translate("what is your name", "mn");
translate("taniig hen gedeg ve", "en");
translate("namaig sarnai gedeg");
translate("bi ub-d amidardag");
translateES6();
