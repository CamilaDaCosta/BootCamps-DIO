/**
 * VERIFICAR SE UMA STRING É UM PALINDROMO (SE É ESCRITA IGUAL DE TRÁS PARA FRENTE)
 */

//SOLUCAO 1
function verificar(string){
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
    //SEPARA AS LETRAS DA PALAVRA E PÕE AO CONTRARIO E AS JUNTA NOVAMENTE
    //SE FOR IGUAL A string É UM PALINDROMO
}
console.log(verificar("palavra"))

//SOLUCAO 2
function verificar2(string){
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}
console.log(verificar2("palavra"));