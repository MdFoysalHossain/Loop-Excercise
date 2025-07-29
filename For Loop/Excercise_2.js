/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

for(let i = 60; i <= 100; i++){
    if (i > 60 && i < 100 && i % 2 != 0){
        console.log("Odd Number: ", i);
    } else if (i >= 78 & i<= 98 && i % 2 == 0){
        console.log("Even Number: ", i);
    }
}