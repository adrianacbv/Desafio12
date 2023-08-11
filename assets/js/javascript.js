const button = document.querySelector("#btn");
const pokemon1 = document.querySelector("#pokemon1");
const pokemon2 = document.querySelector("#pokemon2");
const pokemon3 = document.querySelector("#pokemon3");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", function () {
  let suma = Number(pokemon1.value) + Number(pokemon2. value) + Number(pokemon3. value); 
  if(suma > 10){
    resultado.innerHTML = "llevas demasiados Stickers";
  } else if(suma <= 10){
    resultado.innerHTML = "SUMA: " + suma;
  }
});

const parte1 = document.querySelector("#parte1");

parte1.addEventListener("click", function () {
let borderColor = parte1.style.borderColor;

if(borderColor == "black") {
  parte1.style.borderColor = "transparent";
} 
else {
  parte1.style.borderColor = "black";
}
});

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const entrar = document.querySelector("#entrar");
const password = document.querySelector("#password");

entrar.addEventListener("click", function () {
  let valor = (select1.value) + (select2. value) + (select3. value); 
  if(valor == "911"){
    password.innerHTML = "PASSWORD 1 CORRECTO";
  } else if(valor == "714"){
    password.innerHTML = "PASSWORD 2 CORRECTO";
  }
    else {
    password.innerHTML= "PASSWORD INCORRECTO";
    alert("ACCESO DENEGADO")
  }
});
