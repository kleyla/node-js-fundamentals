const os = require('os')

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus(), os.cpus().length);
console.log(os.constants);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.tmpdir());
