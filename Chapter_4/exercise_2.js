/*
REVERSE ARRAY , NEW STRUCTURE 
*/

const reversNewObjArray = array => {
    
    const newObjectArray = [];

    for( let i = array.length ; i > 0; i--){
        newObjectArray.push(array[i-1])
    }
    return newObjectArray
}

// console.log(reversNewObjArray([1,2,3]))

/*
    REVERSE ARRAY, IN PLACE IN MEMORY
*/

const reverseInPlaceArray = array => {

    let placeHolderPrimitive = 0;

    for( let i = 0 , j = array.length - 1; i <= array.length, j >= 0 , j >= i; i++,  j--){
        let placeHolderPrimitive = array[j]
        array[j] = array[i]
        array[i] = placeHolderPrimitive
    }
    return array
}

//  0:val:1 3:val4
//  1:val:2 2:val3
//  2:val:2 1:val3
//  3:val:1 0:val4

console.log(reverseInPlaceArray([1,2,3,4,5]))

