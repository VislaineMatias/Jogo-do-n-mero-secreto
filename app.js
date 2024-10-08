alert("Boas vindas ao Jogo do número secreto");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //99+ 1
console.log(numeroSecreto);
let tentativa;
let diversasTentativas = 1;

while (tentativa != numeroSecreto) {

    tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}` );

        if (tentativa == numeroSecreto) {
        break
    } else {
        if (tentativa > numeroSecreto) {
            alert(` O número secreto é menor que ${tentativa}`);
        } else {
            alert(` O número secreto é maior que ${tentativa}`);
        }

        diversasTentativas++;
    }
}
    let palavraTentativa =  diversasTentativas > 1 ? "tentativas" : "tentativa" // operador ternário
    alert(` Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${diversasTentativas} ${palavraTentativa}`);


 //   if(diversasTentativas  > 1){
 //   alert(` Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${diversasTentativas} tentativas`);
 //   }else{
//    alert(` Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${diversasTentativas} tentativa`);
    
