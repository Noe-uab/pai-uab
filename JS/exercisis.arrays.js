let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
for (let i = 0; i < taula.length; i++) {
    if (taula[0] == taula[i]) {
        resposta=("Sí")
        break
    } else {
        resposta=("No")
    }
}
console.log(resposta)