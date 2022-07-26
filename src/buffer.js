let buffer = Buffer.alloc(4)
console.log(buffer);
buffer = Buffer.from([1,3,5])
console.log(buffer);

buffer = Buffer.from('Hola')
console.log(buffer.toString());
