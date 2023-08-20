function encriptar() {
  var input = document.getElementById('text-input').value;
  var resultadoArea = document.getElementById('output-text');
  var vacio = document.getElementById('noinput');
  var textoEncriptado = "";

  if (input.trim() === '') {
    resultadoArea.style.display = 'none';
    return;
  }
  
  // Esta manera de encriptar resulto ser mas facil de implementar que el usado en desencriptar.
  for (var i = 0; i < input.length; i++) {
    var letra = input[i].toLowerCase();
    switch (letra) {
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "a":
        textoEncriptado += "ai";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += input[i];
        break;
    }
  }
  resultadoArea.textContent = textoEncriptado;
  resultadoArea.style.display = 'block';
  vacio.style.display = 'none';
  console.log("Hecho")
}

function desencriptar() {
  var input = document.getElementById('text-input').value;  
  var resultadoArea = document.getElementById('output-text');
  var vacio = document.getElementById('noinput');
  var textoEncriptado = "";

  textoEncriptado = input.replace(/enter/g, "e")
  .replace(/ai/g, "a")
  .replace(/imes/g, "i")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u"); 

  resultadoArea.textContent = textoEncriptado;
  resultadoArea.style.display = 'block';
  vacio.style.display = 'none';
  console.log("Hecho")
}


function copiarTexto() {
  var texto = document.getElementById('output-text').innerText;
  console.log(texto);

  // texto.select();
  // texto.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(texto).then(
    () => {
      console.log("copiado")
    },
    () => {
      console.log("Error al copiar");
    },
  );

  alert("Se ha copiado el texto: " + texto);
}
