/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let oddNum = 0;
let evenNum = 0;

for(let i = 51; i <= 129; i++){
    if (i > 51 && i < 85 && i % 2 == 0){
        console.log("Even Number: ", i);
        evenNum += i;

    } else if (i >= 91 & i<= 129 && i % 2 != 0){
        console.log("Odd Number: ", i);
        oddNum += i;
    }
}

console.log("Even Num Sum: ", evenNum);
console.log("Odd Num Sum: ", oddNum);