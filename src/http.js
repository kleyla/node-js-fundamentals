const http = require('http')

http.createServer(router).listen(3000)

function router (req, res){
    res.writeHead(201, {'Content-Type': 'text-plain'})
    switch (req.url) {
        case '/':
            res.write('Bienvenido')
            res.end()
            break;
        case '/hola':
            res.write('Hola que tal')
            res.end()
            break;
    
        default:
            res.write('Error 404')
            res.end()
            break;
    }
    // console.log('nueva peticion');
    // console.log(req.url);
    // res.write('Hola http')
    // res.end();
}
console.log('Excuchando en el puerto 3000')
