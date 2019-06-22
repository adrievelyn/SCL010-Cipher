
/* Realizado proyecto individual Cifrado Cesar window es un objeto DOM que representa todos los objetos en el HTML,
le agregué un Listener para escuchar un evento, en este caso se usó el evento (load) para que
se llame a la funciøn cuando se cargue la página, existen diversidad de eventos*/
window.addEventListener('load', () => {
  /* se CRean cuatro variables, va a contener los elementos que se le asignan con getelemnet a la variable creada */
  let offset = document.getElementById("offSetBox");
  let textBox = document.getElementById('textBox');
  let encryptButton = document.getElementById('encryptButton');
  let decryptButton = document.getElementById('decryptButton');
  let resultBox = document.getElementById('resultBox');

  /* se creó función para encriptar una palabra con un boton al que se le agregó Listener para escuchar un evento llamado click*/
  encryptButton.addEventListener('click', () => {
    let offsetNumber = parseInt(offset.value);
    if (offsetNumber < 0) { alert("Ingrese un numero positivo"); }
    let textBoxContent = textBox.value;//creamos una variable a la que se le asigna el valor (value) de la caja de texto
    if (textBoxContent == '') { alert("Ingrese un texto a cifrar"); }
    if (textBoxContent.match(/[a-zA-ZñÑ]/)) { //textBoxContent.match(/[a-zA-Z]/) define una expresion regular
      let sendOffset = window.cipher.encode(textBoxContent,offsetNumber);
//que indica que solo acepta letras de la a a la z minúsculas y mayúsculas
//no acepta números y caratéres especiales (la funcion string.match indica que solo acepta una expresión regular que coincida con
//lo que se esta definiendo
      
      /* Resultado*/
      resultBox.classList.remove('hide');//removiendo la clase de nombre hide (oculto) al resultbox
      resultBox.innerHTML = 'El texto encriptado es : ' + sendOffset ; // con inner se ingresa a resultbox lo que indica la variable output
    }
  });

  /* se creó función para desencriptar una palabra con un boton al que se le agregó Listener para escuchar un evento llamado click*/
  //sobre decryptButton
  decryptButton.addEventListener('click', () => {
    let offsetNumber = parseInt(offset.value);
    if (offsetNumber < 0) { alert("Ingrese un numero positivo"); }
    let textBoxContent = textBox.value; //creamos una variable a la que se le asigna el valor (value) de la caja de texto
    if (textBoxContent == '') { alert("Ingrese un texto a cifrar"); }
    if (textBoxContent.match(/[a-zA-ZñÑ]/)) { //textBoxContent.match(/[a-zA-Z]/) define una expresion regular
      let sendOffset = window.cipher.decode(textBoxContent,offsetNumber);

//que indica que solo acepta letras de la a a la z minúsculas y mayúsculas
//no acepta números y caratéres especiales (la funcion string.match indica que solo acepta una expresión regular que coincida con
//lo que se esta definiendo
      
      /* Resultado*/
      resultBox.classList.remove('hide');//removiendo la clase de nombre hide (oculto) al resultbox
      resultBox.innerHTML = 'El texto desencriptado es : ' + sendOffset ; // con inner se ingresa a resultbox lo que indica la variable output
    }
  });// con inner se ingresa a resultbox lo que indica la variable output
  /* función para limpiar la entrada*/
  let clear = document.getElementById('eraserButton');
  clear.addEventListener('click', () => {
  /* le asigna vaciocal elemento text box*/
    textBox.value = '';
    offset.value = '';
  });
});
