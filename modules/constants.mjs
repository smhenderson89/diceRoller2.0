/* 
Constants use for other dice rolls

*/

export const d4 = [1, 2, 3, 4];
export const d6 = [1,2,3,4,5,6];
export const d8 = [1,2,3,4,5,6,7,8];
export const d10 = [1,2,3,4,5,6,7,8,9,10];
export const d12 = [1,2,3,4,5,6,7,8,9,10,11,12];
export const d20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

export function makeRoll(dice) {
    let roll = dice[Math.floor(Math.random()*dice.length)]
    console.log(`Rolling ${dice} - ${roll}`)
}

makeRoll(d4);