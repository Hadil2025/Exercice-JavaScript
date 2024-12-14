// Factorielle d'un nombre :

function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}
console.log(factorielle(5));

// Vérification des nombres premiers :

function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(estPremier(7));
console.log(estPremier(10));

// Suite de Fibonacci :

function fibonacci(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}
console.log(fibonacci(10));