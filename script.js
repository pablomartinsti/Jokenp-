const response = document.querySelector('.winner')
const machinePoint = document.querySelector('.machinepoint')
const humanPoint = document.querySelector('.humanpoint')


let humanPoints = 0
let machinePoints = 0

const humanOption = (humanresult) => {

    letsPlay(humanresult, computerOption())
}


const computerOption = () => {

    const option = ['rock', 'paper', 'scissors']

    const result = Math.floor(Math.random() * 3)

    return option[result]


}

const letsPlay = (human, machine) => {


    if (human === machine) {
        response.innerHTML = "Deu Empate! "

    } else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper'){

            humanPoints++

            humanPoint.innerHTML =humanPoints
            response.innerHTML = "Você Ganhou! 🥳🎉"

    }else {

        machinePoints++
        machinePoint.innerHTML=machinePoints
        response.innerHTML = "Você Perdeu! "
    }

}