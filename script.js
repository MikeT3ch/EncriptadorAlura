function validarTexto() {
  var input = document.getElementById('text-input').value;
  var textoValidado = quitarTildes(input);

  if (/[^a-zA-Z0-9ñÑ,.\s]/.test(textoValidado)) {
    alert("Solo se aceptan letras sin tildes y números.")
    return false;
  } else {
    document.getElementById('text-input').value = textoValidado;
    return true;
  }
}

function quitarTildes(texto) {
  return texto
    .replace(/[áÁ]/g, 'a')
    .replace(/[éÉ]/g, 'e')
    .replace(/[íÍ]/g, 'i')
    .replace(/[óÓ]/g, 'o')
    .replace(/[úÚüÜ]/g, 'u');
}

function encriptar() {
  if (validarTexto() == true) {
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
    console.log("Hecho");
    activeCopy();
  } else {
    console.log("Texto invalido");
  }
}

function desencriptar() {
  if (validarTexto() == true) {
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
    console.log("Hecho");
    activeCopy();
  } else {
    console.log("Texto invalido");
  }
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
}

function activeCopy() {
  let copyBtn = document.getElementById('CopyBtn');
  copyBtn.style.display = 'block';
  console.log("Se ha activado el boton copiar")
}

