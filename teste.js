
// function iniciar() {
//     let segundo = 0
//     let minuto = 0



//     setInterval(() => {



//         if (segundo <= 59) {
//             segundo++;
//         } else {

//             function ZerarSegundo() {
//                 segundo = 0
//             }

//             function addMinuto() {
//                 minuto++
//             }

//         }
//     }, 1000);
// }
// iniciar()

// // if (segundo <= 59) {
// //     iniciar()
// // }

// console.log(segundo)
// console.log(minuto)

function atualizarDisplay() {
    const m = String(minuts).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    document.getElementById('display').textContent = `${m}:${s}`;
}


let seconds = 0
let minuts = 0
let contador = null

document.getElementById('Iniciar').addEventListener('click', Start)
document.getElementById('Pausar').addEventListener('click', Pausar)
document.getElementById('Zerar').addEventListener('click', Zerar)

function Start() {
    clearInterval(contador);
    if (contador !== null) return;

    contador = setInterval(() => {

        seconds++

        if (seconds > 59) {
            seconds = 0
            minuts++
        }
        atualizarDisplay();
        // console.log(`Min ${minuts}:${seconds}`)

        if (minuts == 59) {
            clearInterval(contador)
            seconds = 0
            minuts = 0
            contador = null
        }

    }, 1000)


}


function Pausar() {
    clearInterval(contador)
    contador = null
}

function Zerar() {
    contador = null
    minuts = 0
    seconds = 0
    atualizarDisplay();
}
// setInterval(() => {
//     Start()
// }, 1000)