// Inverser une chaîne :

function inverserChaine(chaine){
    return chaine.split('').reverse().join('');  
}
console.log(inverserChaine("Bonjour!"));

//Compter les caractères :

function compterCaracteres(chaine){
    return chaine.lenght;
}
console.log(compterCaracteres("Bonjour!"));

//Mettre les mots en majuscule :

function mettreMajuscule(phrase){
    return phrase.split('').map(mot => mot.charAt(0).toUpperCase()+ mot.slice(1)).join('');
}
console.log(mettreMajuscule("bonjour tous!"));