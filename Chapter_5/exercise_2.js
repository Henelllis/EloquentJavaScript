/**
 * Your Own Loop
 * @params value, test function, update function, body function
 * each iteration , first runs an tes function on the current loop value
 * if false it stops. Then it calls the body function, giving it the current value.
 * Finally calls update function to create a new value and starts from the begiining 
 */

 const myOwnLoop = (value, updateFunc, bodyFunc, testFunc) => {
     for(let i = value; testFunc(i); i = updateFunc(i)){
         bodyFunc(i)
     }
 }

 //updateFunc
 const updateFunc = val =>  val += 1
 //testFunc 
 const testFunc = val => val < 10 ? true : false
 //body Func, (super easy and silly one)
 const bodyFunc = val => console.log(`Value :: ${val}`)

 myOwnLoop(0, updateFunc, bodyFunc, testFunc);