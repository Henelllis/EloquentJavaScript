const createRangeArray = (start, end, increment = 1) => {
    if(end < start){
        return []
    }else if ( end === start){
        return [end]
    }

    let rangeArray = []
    for (let index = start; index <= end ; index += increment) {
        rangeArray.push(index);
    }
    console.log(`Range Array ${rangeArray}`)
    return rangeArray
}

const sumArray = (array) => {
    let sum = 0

    array.forEach(element => {
        sum += element
    });

    return sum
}


console.log(sumArray(createRangeArray(1,10, -1)))