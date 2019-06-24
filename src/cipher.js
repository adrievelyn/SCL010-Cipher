
window.cipher = {
  encode: (textBoxContent, offset) => {
    
    let output = '';
    // iteramos sobre la palabra con un loop for
    //hasta la longitud de ella
    for (let i = 0; i < textBoxContent.length;i++) {
      // variable en donde se convierte cada letra en codigo ascii
      let letterCode = textBoxContent.charCodeAt(i);

      // variable vacia
      let letterCodeTmp = '';
      // analizando las letras mayusculas A= 65 Y Z= 90
      if ((letterCode >= 65) && (letterCode <= 90))  {//&& que ambas condiciones se cumplan
        // ejecutando el offset y convirtiendo de lenguaje ascii a letra
        //si se cumple la condicion se aplica la fórmula y la pasa a letra
        //todo lo ejecutado en el codigo se guarda en el condigo temporal
        letterCodeTmp = String.fromCharCode(((letterCode - 65 + offset) % 26) + 65);
        
        // analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
      } else if ((letterCode >= 97) && (letterCode <= 122)){
       
        letterCodeTmp = String.fromCharCode(((letterCode - 97 + offset) % 26) + 97);

      } else if(letterCode >= 33 && letterCode <= 64){//Caracteres especiales y numeros

        letterCodeTmp = String.fromCharCode(((letterCode - 33 + offset) % 32) + 33);

      } else if (letterCode === 32){//espacio
        letterCodeTmp = String.fromCharCode(letterCode);

      } else if (letterCode === 241 || letterCode === 209){
        letterCodeTmp = String.fromCharCode(letterCode);
      }

  
      // salida de la palabra encriptada concatena
      //es una variable vacia a la que se concatena el resultado del encriptado
      // es decir se le agrega letra por letra
      output += letterCodeTmp;
    }
    return output;
  },
  decode: (textBoxContent, offset) => {    

    let output = '';
    for (let i = 0; i < textBoxContent.length;i++) {
      // variable en donde se convierte cada letra en codigo ascii
      let letterCode = textBoxContent.charCodeAt(i);
      // variable que guarda la conversion de codigo ascii a letra
      let letterCodeTmp = '';
      // analizando las letras mayusculas A= 65 Y Z= 90
      if ((letterCode >= 65) && (letterCode <= 90)) {
        letterCodeTmp = String.fromCharCode(((letterCode - 65 - offset + 26 * 2) % 26) + 65);

      } else if ((letterCode >= 97) && (letterCode <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
        letterCodeTmp = String.fromCharCode(((letterCode - 97 - offset + 26 * 2) % 26) + 97);    

      } else if(letterCode >= 33 && letterCode <= 64){
        letterCodeTmp = String.fromCharCode(((letterCode - 33 - offset + 32 *2) % 32) + 33);

      } else if (letterCode === 32){
        letterCodeTmp = String.fromCharCode(letterCode);

      } else if (letterCode === 241 || letterCode === 209){
          letterCodeTmp = String.fromCharCode(letterCode);
      }

      // salida de la palabra desencriptada concatenada
      //es una variable vacia a la que se concatena el resultado de lo desencriptado
      // es decir se le agrega letra por letra
      output += letterCodeTmp;
        
    }
    return output;
  }
};