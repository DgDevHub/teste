let mutavel = ["y"];
const imutavel = []; // array recebe objetos ou valores dentro do mesmo

console.log(mutavel)
console.log(imutavel)

imutavel.push(1);

mutavel = ["x"]

console.log(mutavel)
console.log(imutavel)

// função anônima
const somar = function(potato, tomato) {
    return potato + tomato;
}

// função nomeada
function subtrair(a, b) {
    return a - b;
}

console.log(somar(1, 2));

console.log(subtrair(2, 1));