// Rechercher le maximum et le minimum 

function trouverMax(tableau) {
    return Math.max(...tableau);
}

function trouverMin(tableau) {
    return Math.min(...tableau);
}
console.log(trouverMax([1, 2, 3, 4, 5])); 
console.log(trouverMin([1, 2, 3, 4, 5])); 

// Somme d'un tableau :

function sommeTableau(tableau) {
    return tableau.reduce((acc, val) => acc + val, 0);
}
console.log(sommeTableau([1, 2, 3, 4, 5]));

// Filtrer le tableau :

function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}
console.log(filtrerTableau([1, 2, 3, 4, 5], (num) => num % 2 === 0));