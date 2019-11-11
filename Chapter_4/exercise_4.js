/*
    DEEP COMPARE
*/

/**
@param: Two Objects
@output: Boolean
 **/
const  deepCompare = (object1, object2) => {

    object1Keys = Object.keys(object1);
    object2Keys = Object.keys(object2);
    //Need bottom out case for recurive comparison
    //Number of keys don't match is good indicator they are not equal
    if(object1Keys.length !== object2Keys.length){
        console.log(`Unenven number of keys`)
        return false;
    }

    //Check to see All key names are the sames
    for (let obj1Index = 0; obj1Index < object1Keys.length; obj1Index++) {
        let isFound = false
        for (let obj2Index = 0; obj2Index < object2Keys.length; obj2Index++) {
            if(object1Keys[obj1Index] === object2Keys[obj2Index]){
                isFound = true;
                break;
            }
        }
        if(!isFound){
            return false;
        }
    }

    //Same number of keys and with the same exact names
    //the assumption here is that any key that we reference
    //for object 1 can also be reference for object 2
    //we can iterate over every key and determine its type
    //if type is not of object no recursions
    //we still check the type and value of every non object value
    for (let objIndex = 0; objIndex < object1Keys.length; objIndex++) {

        const object1_value = object1[object1Keys[objIndex]];
        const object2_value = object2[object2Keys[objIndex]];

        if(typeof object1_value === typeof object2_value){
            if(typeof object1_value === 'object'){
                return deepCompare(object1_value, object2_value)
            }else{
                if(object1_value === object2_value){
                    continue;
                }else{
                    return false
                }
            }
        }
        else{
            return false;
        }

    }
    return true
}


object1 = { key1: 'primitive' , key2:{innerObj:'innerPrimitive', key3:{'innerest':4}}, badKey:3}
object2 = { key1: 'primitive' , key2:{innerObj:'innerPrimitive', key3:{'innerest':3}}}


console.log(deepCompare(object1, object2))