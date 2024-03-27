// // 1 - variáveis
// let nome = "João";

// console.log(nome);

// nome = "João Vitor";

// console.log(nome);

// const idade = 22;

// console.log(idade);

// // 2 - mais sobre variáveis
// // let 2teste = "inválido"
// // let @teste = "inválido"

// let a = 10,
//   b = 20,
//   c = 30;

// console.log(a, b, c);

// const nomecompleto = "João Vitor";

// const nomeCompleto = "João Siqueira";

// console.log(nomecompleto);

// console.log(nomeCompleto);

// let _teste = "ok";

// let $teste = "ok";

// console.log(_teste, $teste);

// // 3 - prompt
// // const age = prompt("Digite a sua idade:");

// // console.log(`Você tem ${age} anos.`);

// // 4 - alert
// // alert("Testando");

// // const z = 10;

// // alert(`O número é ${z}`);

// // 5 - math
// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.14));

// console.log(Math.ceil(5.14));

// // 6 - console
// console.log("teste!");

// console.error("error!");

// console.warn("aviso!");

// // 7 - if
// const m = 10;

// if (m > 5) {
//   console.log(`${m} é maior que 5`);
// }

// const user = "João";

// if (user === "João") {
//   console.log("Olá João!");
// }

// if (user === "Maria") {
//   console.log("Olá Maria!");
// }

// console.log(user === "João", user === "Maria");

// // 8 - else
// const loggedIn = false;

// if (loggedIn) {
//   console.log("Está autenticado!");
// } else {
//   console.log("Não está autenticado!");
// }

// const q = 10;
// const w = 15;

// if (q > 5 && w > 20) {
//   console.log("Números mais altos");
// } else {
//   console.log("Números não são mais altos");
// }

// // 9 - else if
// if (1 > 2) {
//   console.log("Teste");
// } else if (2 > 3) {
//   console.log("Teste 2");
// } else if (5 > 1) {
//   console.log("Agora sim!");
// }

// const userName = "João";
// const userAge = 22;

// if (userName === "José") {
//   console.log("Bem vindo José!");
// } else if (userName == "João" && userAge === 22) {
//   console.log("Olá João, você tem 22 anos!");
// } else {
//   console.log("Nenhuma condição aceita");
// }

// // 10 - while
// let p = 0;

// while (p < 5) {
//   console.log(`Repetindo ${p}`);
//   p = p + 1;
// }

// // loop infinito
// // let x = 10;

// // while (x > 5) {
// //   console.log(`Imprindo ${x}`);
// // }

// // 11 - do while
// let o = 10;

// do {
//   console.log(`Valor de o: ${o}`);
//   o--;
// } while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo...");
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`O r está diminuindo ${r}`);
}

// 13 - break
for (let g = 20; g > 10; g--) {
  console.log(`Valor de g é: ${g}`);

  if (g === 15) {
    console.log("O g é 15!");
    break;
  }
}

// 14 - continue
for (let s = 1; s < 10; s = s + 1) {
  // operador resto = %
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }

  console.log(s);
}

// 15 - switch
const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Você é um programador!");
    break;

  case "Advogado":
    console.log("Você é um advogado!");
    break;

  case "Engenheiro":
    console.log("Você é um engenheiro!");
    break;

  default:
    console.log("Profissão não encontrada");
}

// switch "errado" sem o break
// const l = 100;

// switch (l) {
//   case 200:
//     console.log("L é 200!");

//   case 100:
//     console.log("L é 100!");

//   case 10:
//     console.log("L é 10!");

//   default:
//     console.log("L não foi encontrado!");
// }
