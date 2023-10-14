/* 
Constants use for other dice rolls

*/

export const d4roll = [1, 2, 3, 4];
export const d6roll = [1,2,3,4,5,6];
export const d8roll = [1,2,3,4,5,6,7,8];
export const d10roll = [1,2,3,4,5,6,7,8,9,10];
export const d12roll = [1,2,3,4,5,6,7,8,9,10,11,12];
export const d20roll = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

export const diceList = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']

export function makeRoll(dice, numberOfDice) {
    let result = []
    for (let i = 0; i < numberOfDice; i++) {
        let roll = dice[Math.floor(Math.random()*dice.length)]
        console.log(`Rolling ${dice} - ${roll}`)
        result.push(roll)
    }
    console.log(result)
}

makeRoll(d6roll, 4);

