const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data= ''

let readableStream = fs.createReadStream(__dirname+'/text.txt')
readableStream.setEncoding('UTF8')
readableStream.on('data', (chunck) => {
    console.log(chunck);
})
readableStream.on('end', () => {
    console.log(data);
})

process.stdout.write('holchuncka')
process.stdout.write('que')
process.stdout.write('tal ')

const Transform = stream.Transform

function mayus() {
    Transform.call(this)
}
util.inherits(mayus, Transform)

mayus.prototype._transform = function(chunck, codif, cb){

}