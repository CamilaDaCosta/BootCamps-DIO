/**
 * TROQUE TODOS OS ELEMENTOS PARES E DIFERENTE DE ZERO DE UM ARRAY 
 * PELO NÚMERO 0 SE O ARRAY FOR VAZIO RETORNE -1
 */

function substituir(array){
    for ( let i = 0; i < array.length; i++){
        if (array[i] === 0) {
            return -1
        }else if ( array[i] % 2 === 0 ){
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }
    return array;
}

let array = [1,2,4,5];
console.log(substituir(array));

