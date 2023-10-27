const c = require('ansi-colors')
const prompt = require('prompt-sync')()
//1: rock, 2:paper, 3:scissors

let counterComp = 0
let counterUser = 0



function game(user,computer) {

     if (user=== computer) {

        return c.cyan('Tie')
    }
    else if ((user === Number(1)) && (computer === Number(2))) {
        counterComp +=1
        return c.red('computer wins')
    } 

    else if ((user=== Number(2)) && (computer===Number(1))){
        counterUser +=1
        return c.green('you win')
    }

    else if ((user ===Number(2)) && (computer === Number(3))) {
        counterComp +=1
        return c.red('computer wins')
    }

    else if ((user ===Number(3)) && (computer === Number(2))) {
        counterUser +=1
        return c.green('you win')
    }


    else if ((user === Number(1)) && (computer === Number(3))) {
        counterUser +=1
        return c.green('you win')
    }

    else if ((user ===Number(3)) && (computer === Number(1))) {
        counterComp +=1
        return c.red('computer wins') 
    }
    else if (user ===0) {
        return 'exit the game'

    }
    
    else {
        return c.red('not valid')
    }
}

function start() {
    let play =true
    while (play) {
        
        const num1 = Number(prompt('Give a number (1=rock, 2=paper, 3=scissors, 0=exit): '))
        const num2 = (Math.floor(Math.random()*3) +1)

        console.log(`You pick ${num1}`)
        console.log(`Computer picks ${num2}`)
        console.log(game(num1,num2))
        console.log(`You ${counterUser} ,Computer: ${counterComp}`)



        if (num1 === 0) {
        play = false
        }
        else if (num1 ===1 || num1 ===2|| num1===3){
            play =true

        }} 
}

start()
