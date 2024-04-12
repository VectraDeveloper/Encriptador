//Texto que se recibe d ela entrda del usuario
let textoEntrada = document.getElementById('textoEntrada');

const resultado = document.getElementById('mostrarResultado')


const VocalesEncriptadas = [

    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function encriptar (mensajeEncriptado){
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for (let i = 0; i <VocalesEncriptadas.length; i++ ){
        if(mensajeEncriptado.includes(VocalesEncriptadas[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(VocalesEncriptadas[i][0], VocalesEncriptadas[i][1])
        }
    }
    return mensajeEncriptado;

}

function desencriptar(mensajeDesencriptado){ 
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()
    for (let i = 0; i <VocalesEncriptadas.length; i++ ){
        if(mensajeDesencriptado.includes(VocalesEncriptadas[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(VocalesEncriptadas[i][1], VocalesEncriptadas[i][0])
        }
    }
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textoEntrada)
    resultado.innerHTML = textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textoEntrada)
    resultado.innerHTML = textoDesencriptado;
}

function btnCopiar(){
    const textoCopiado = resultado.textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert('Texto copiado')

}



