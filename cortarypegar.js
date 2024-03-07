function copy() {
let copytext = document.querySelector("#textodesencriptado");
copytext.select();
document.execCommand("copy");

}
