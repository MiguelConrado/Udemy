let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varAtemp = varB
varB = varC
varC = varA

console.log(varAtemp, varB, varC)