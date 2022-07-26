process.on('beforeExit', () =>{
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('El proceso termino');
    setTimeout(() => {
       console.log('esto no se va a ver nunca'); 
    }, 0);
})

process.on('uncaughtException', (error) =>{
    console.log('vaya error');
})

fnNoExiste()

console.log('si el error no se recoje, esto sale');
