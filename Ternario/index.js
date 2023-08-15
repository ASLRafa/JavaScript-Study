const pontuacaoUsuario = 9990;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : "Normal";

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario,corPadrao);