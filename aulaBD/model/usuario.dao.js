const db = require("../config/database");
const md5 = require('md5');

exports.listarUsuarios = async function(){
    const {rows} = await db.query("SELECT * FROM usuario WHERE isativo = true");
    return rows;
}

exports.criarUsuario = async function(novo_usuario){
    const resposta = await db.query(
        'INSERT INTO usuario (nome, username, senha, isativo) VALUES ($1, $2, $3, $4)',
        [novo_usuario.nome, novo_usuario.username, md5(novo_usuario.senha), true]
    );
    let usuario = await verificaUsuario(novo_usuario)

    if (!usuario) {
        return "Usuário já cadastrado!"
    }
    return "Produto cadastrado com sucesso!";
}

exports.verificaUsuario = async function(novo_usuario) {
    const consultaTodos = await db.query(
        'SELECT * FROM usuario WHERE username = $1',
        [novo_usuario.username]
    )
    if (consultaTodos.rows.length > 0) {
        return false
    }
    return true
    
}
