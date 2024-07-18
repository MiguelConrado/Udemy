// ?:
// (condição) ? 'VALOR PARA VERDADEIRO' : 'VALOR PARA FALSO'

 const pontuacaoUser = 100
 const nivelUser = (pontuacaoUser >= 1000) ? 'Usuario vip' : 'usuario normal'
 const corVip = pontuacaoUser >= 1000 ? 'roxo' : null

 console.log(nivelUser)


const corUsuario = 'preto'
const corPadrao = corVip || corUsuario || 'branco'

console.log(corPadrao)