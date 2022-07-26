const badfunction = () => 5 + z;
// try {
//     badfunction()
// } catch (error) {
//     console.log('bad function ha fallado')
//     console.error(error.message)
// }
// console.log('continuamos...')

function seRompeAsync() {
    setTimeout(() => 3 + z)
}

function seRompeAsync() {
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            console.log('error asycn');
        }
    })
}

try {
    console.log('start');
    seRompeAsync()
    console.log('end');
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}