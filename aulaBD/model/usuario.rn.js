exports.validarUsername = (username) => {
  if (username.length >= 8) {
    var caractere = ''
    let letras = 0
    let digitos = 0
    let charEspeciais = 0
    for ( let i = 0; i < username.length; i++) {
      caractere = username.charAt(i)
      if (caractere.toUpperCase()) {
        console.log("AEEEEEEEEEEEEEEEEEEEEEEEEEE");        
        letras++
      }
      if (/[0-9]/.test(caractere)) {
        console.log("UHULLLLLLLLLLLLLLLLLLLLLLLL");
        digitos++
      }
      if (/\W|_/.test(caractere)) {
        console.log("OBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        charEspeciais++
      }
      if (letras && digitos && charEspeciais){
        console.log("TUDO CERTINHOOOOOO");
        return true
      }
    }
  };
  return false;
};
