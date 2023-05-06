const btnE = document.querySelector(".botonencriptar");
const btnD = document.querySelector(".botondesencriptar")
const resultado = document.querySelector(".contenedorresultado")
const contenido = document.querySelector(".contenedor")

btnE.onclick = encriptar;
btnD.onclick = desencriptar; 

function ocultar(){
    contenido.classList.add("ocultar");
}

function encriptar (){
    ocultar();
    let texto = document.querySelector(".contenedortexto").value;
    resultado.textContent = encriptartexto (texto);
}

function encriptartexto  (mensaje){
    var textofinal = mensaje.replace( /e/igm , "enter")
    .replace( /i/igm , "imes")
    .replace( /o/igm , "ober")
    .replace( /a/igm , "ai")
    .replace( /u/igm , "ufat");
    return textofinal
}

function desencriptar (){
    ocultar();
    let texto = document.querySelector(".contenedortexto").value;
    resultado.textContent = desencriptarTexto(texto);
}

function desencriptarTexto  (mensaje){
    var textofinal = mensaje.replace( /enter/ig , "e")
    .replace( /imes/ig , "i")
    .replace( /ober/ig , "o")
    .replace( /ai/ig , "a")
    .replace( /ufat/ig , "u");
    return textofinal
}

const botonC = document.querySelector(".botoncopiar");
    botonC.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".contenedorresultado").textContent;
        navigator.clipboard.writeText(contenido);
})