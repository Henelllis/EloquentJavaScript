
let mySymbol = Symbol("hasOwnProperty");


class dummyClass{

}

dummyClass[mySymbol] = function(){
    console.log('invoke funcion')
    return  'hippo'
}

console.log( dummyClass[mySymbol]() )