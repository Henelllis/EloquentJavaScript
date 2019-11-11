// let list = {
//  value: 1,
//  rest: {
//      value: 2,
//      rest: {
//          value: 3,
//          rest: null
//      }
//  }
// };

/*
    Exercise array to List
*/

const arrayToList = array => {

    let listObject = null
    let root = null

    for (let index = 0; index < array.length; index++) {
        if(!listObject){
            listObject = { value: array[index], rest:null };
            root =listObject;
        }
        else{
            let chaninedListObject = {value:array[index], rest:null};
            listObject.rest = chaninedListObject;
            listObject = chaninedListObject
        }        
    }

    return root
}

// console.log(JSON.stringify(arrayToList([2,5,32,2])));

const listToArray = list => {

    listReference = list;
    convertedListArray = []
    do {
        convertedListArray.push(listReference.value);
        listReference = listReference.rest;
    } while (listReference);

    return convertedListArray;
}

console.log(listToArray({"value":2,"rest":{"value":5,"rest":{"value":32,"rest":{"value":2,"rest":null}}}}))