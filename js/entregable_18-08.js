//Cuenta regresiva:

let ingresaNumero2 = parseInt(prompt('Ingresa cuantos dias quieres en tu cuenta regresiva:'))
for (let i = ingresaNumero2; i >= 0; i--)
{
    if(i>365){
        console.log('Falta mas de un año para tu evento')
        break
    }
    else{
    console.log('Quedan ' + i + ' dias para tu evento')
    }
}