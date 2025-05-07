const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn");

exports.listarUsuarios = async function () {
    return usuarioDAO.listarUsuarios();
};

exports.criarUsuario = async function (novo_usuario) {
  let usuarioNaoExistente = await usuarioDAO.consultarUsuarios(novo_usuario);
  let usuarioValido = usuarioRN.validarUsername(novo_usuario.username);
    if (usuarioValido && usuarioNaoExistente){
        await usuarioDAO.criarUsuario(novo_usuario);
        return true;
    }
    return false;
};