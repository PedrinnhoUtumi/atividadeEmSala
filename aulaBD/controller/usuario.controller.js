const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn");

exports.listarUsuarios = async function () {
    return usuarioDAO.listarUsuarios();
};

exports.criarUsuario = async function (novo_usuario) {
    if (usuarioRN.validarUsername(novo_usuario.username) && usuarioRN.verificaUsuarioNoBancoDeDados(novo_usuario)){
        await usuarioDAO.criarUsuario(novo_usuario);
        return true;
    }
    return false;
};


exports.desativandoUsuario = async function() {
    const usuario = {}; 
    const usuarios = await usuarioDAO.consultarUsuarios(usuario);
  
    const listaUsuarios = await Promise.all(
      usuarios.rows.map(async (u) => {
        const desativado = await usuarioRN.usuarioDesativado(u);
        return {
          ...u,
          desativado
        };
      })
    );
  
}