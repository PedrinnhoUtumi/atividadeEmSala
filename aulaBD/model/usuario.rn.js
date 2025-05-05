const usuariosConsultados = require("./usuario.dao")

exports.validarUsername = (username) => {
  if (username.length >= 8 && username.length <= 10) {
    var caractere = ''
    let letras = 0
    let digitos = 0
    let charEspeciais = 0
    for (let i = 0; i < username.length; i++) {
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
      if (letras && digitos && charEspeciais) {
        console.log("TUDO CERTINHOOOOOO");
        return true
      }
    }
  };
  return false;
};

exports.verificaUsuarioNoBancoDeDados = async function (novo_usuario) {
  let usuarios = await usuariosConsultados.consultarUsuarios(novo_usuario)
  console.log(usuarios.rows.length);
  
  if (usuarios.rows.length > 0) {
    return false
  }
  return true

}

exports.usuarioDesativado = async function (usuario) {
  let usuarios = await usuariosConsultados.consultarUsuarios(usuario)
  if (usuarios.rows.length > 0) {
    let usuariosDesativados = await usuariosConsultados.desativarUsuarios(usuario)
    return true
  }
  return false

}