const txt = document.querySelector("#textoaencriptar");
const alerta = document.querySelector("#alerta");
// let texto = txt.value;



function encriptado() {   
  var texto = document.querySelector("#textoaencriptar").value;
  var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.querySelector("#textodesencriptado").value = textoEncriptado;
}
function ocultarMuñeco(){
  document.getElementById("muñecoOculto").style.display="none";
}


function ocultarTexto() {
  document.getElementById("mensajeh1").style.display="none";
  document.getElementById("mensajeh2").style.display="none";
}


function mostrarTextarea() {
  document.querySelector("#textodesencriptado").style.display="block";
}

function mostrarCopy() {
  document.getElementById("copy").style.display="block";
}

function iniciaCodigo() {
  let texto = txt.value;
  let acento = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    //inicia proceso para encriptar//
  if (texto == "") {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "El campo de texto no debe estar vacio";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
}    else if(texto !== acento){

  alerta.style.background = "#0A3871";
  alerta.style.color = "#FFFF";
  alerta.style.fontweight = "800";
  alerta.textContent = "No debe tener acentos ni caracteres especiales";

  setTimeout(() => {
    alerta.removeAttribute("style");
  }, 1500);
} else if(texto !== texto.toLowerCase()){
        
  alerta.style.background = "#0A3871";
  alerta.style.color = "#FFFF";
  alerta.style.fontweight = "800";
  alerta.textContent = "El texto debe ser todo en minúscula";

  setTimeout(() => {
    alerta.removeAttribute("style");
  }, 1500);
}

else{
  encriptado()
  ocultarMuñeco();
  ocultarTexto();
  mostrarTextarea();
  mostrarCopy()
  }
  
}

function desencriptado() {
    var texto2 = document.querySelector(".textoaencriptar").value;
    var textoDesencriptado = texto2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#textodesencriptado").value = textoDesencriptado;
  
  }

  desencriptado();



