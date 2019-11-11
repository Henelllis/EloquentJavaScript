/**
 * Every method
 * @param array , function
 * 
 * Two versions one will be focused on loop
 */

 //param 1 : [ 1, 2, 3, 4 , 5, 6, 420]
 //param 2: num => num % 2 === 0
 //Should return false


  //param 1 : [ 4, 6, 420]
 //param 2: num => num % 2 === 0
 //Should return true


 //Loop version of EVERY Method

 const loopEvery = (array, predicateFunc) => {

    for (let index = 0; index < array.length; index++) {
        if(!predicateFunc(array[index])) return false
    }

    return true
 }

const badArray = [ 1, 2, 3, 4 , 5, 6, 420]
const goodArray = [ 4, 6, 420]
const predicateFunc = num => num % 2 === 0
// console.log(loopEvery(badArray,predicateFunc ));
// console.log(loopEvery(goodArray,predicateFunc ));

const someEvery = (array, predicateFunc) => {
    return array.reduce( (a,b) => { 
        console.log(` A ${a}`)
        console.log(` B ${b}`)

        console.log(`predicate A ${predicateFunc(a)}`)
        console.log(`predicate B ${predicateFunc(b)}`)
        // console.log(`predicate both ${ && predicateFunc(b)}`)

        return (typeof a === 'boolean' ? a : predicateFunc(a)) && predicateFunc(b)  
    })
}

console.log(someEvery(badArray ,predicateFunc ))