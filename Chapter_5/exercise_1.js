/** 
 * Flattening Method
*/

//Example array
//[[1,2,3,4],[3,4],[5,3,5]]
//Expected output from method
//[1,2,3,4,3,4,5,3,5]

//assume each element as an array of arrays
const flatten = array => {
    const flattendArray = array.reduce((a,b) => {
        return a.concat(b)
    })

    return flattendArray
}

const test_array = [[1,2,3,4],[3,4],[5,3,5]]
console.log(flatten(test_array))


