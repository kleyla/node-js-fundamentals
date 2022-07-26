// Leer archivo
const fs = require('fs')

const read = (path) => {
    fs.readFile(path, (e, d) => {
        e ?
        console.error(e) :
        console.log(d.toString())
    })
}

// Escribir archivo
const write = (path, content) => {
    fs.writeFile(path, content, e => {
        e ?
        console.error('Error al escribir') :
        console.log('Escrito correctamente')
    })
}

// Borrar archivo
const deleteFile = (path) => {
    fs.unlink(path, e => {
        e ?
        console.error('Error al borrar') :
        console.log('Borrado correctamente')
    })
}

// write(__dirname+'/example.txt', 'Este es el contenido')
// read(__dirname+'/example.txt')
deleteFile(__dirname+'/example.txt')