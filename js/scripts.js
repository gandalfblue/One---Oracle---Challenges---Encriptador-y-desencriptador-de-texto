
function encriptar () {
    var texto = document.getElementById ("form__cifrar").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("img__der").style.display = "none";
    document.getElementById("ninguno").style.display = "none";
    document.getElementById("entrega").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "block";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar () {
    var texto = document.getElementById ("form__cifrar").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("img__der").style.display = "none";
    document.getElementById("ninguno").style.display = "none";
    document.getElementById("entrega").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "block";
    document.getElementById("copy").style.display = "inherit";
}

function copiar () {
    var contenido = document.querySelector("#entrega");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio - by Ing.Jhonatan Alvarez Vargas");
}

