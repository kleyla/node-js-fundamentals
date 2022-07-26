const {exec, spawn} = require('child_process')
const { stdout, stderr } = require('process')

// exec('ls -la', (err, stdout, stderr) => {
//     if(err){
//         console.log(err);
//         return false
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-al'])

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', function(){
    console.log('el proceso termino ');
})

setTimeout(() => {
    console.log('hi');
}, 2000)
