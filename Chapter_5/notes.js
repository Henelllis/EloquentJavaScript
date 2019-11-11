/*

Unicode : assigns number per character
140 scripts



*/
const scripts =  require('./scripts');


function filter(array, test){
    //Pure function does not modify array
    //Returns a new array
    let passed = [];
    for ( let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

// console.log(filter(scripts, script => script.direction === 'ttb' ))

function map(array, transform){
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

// let rtlScripts = scripts.filter(s => s.direction === 'rtl')
// console.log(map(rtlScripts, s => s.name))

function reduce(array, combine, start){
    let current = start;
    for(let element of array){
        current = combine(current, element)
    }
    return current;
}

// console.log(reduce([1,2,3,4], (a,b) => a + b, 0));

function characterCount(script){
    return script.ranges.reduce((count, [from, to]) => {
        return count + ( to - from)
    },0 );
}

// console.log(scripts.reduce((a,b) => {
//     console.log(`Script A ${a.name} vs Script B ${b.name}`)
//     return characterCount(a) < characterCount(b) ? b : a;
// }))

//No HOF implmented max, one I have used many of times 
let biggest = null;
for ( let script of scripts){
    if(biggest == null || characterCount(biggest) < characterCount(script)){
        biggest = script
    }
}
// console.log(biggest)

function average(array){
    return array.reduce((a,b) => a + b) / array.length 
}

// console.log(Math.round(average(scripts.filter(s => s.living).map( s => s.year))))
// console.log(Math.round(average(scripts.filter(s => !s.living).map( s => s.year))))


//No HOF implemented average year of dead or alive langauges
let total = 0, count = 0;
for (let script of scripts){
    if(script.living){
        total += script.year;
        count += 1
    }
}
// console.log(Math.round(total / count));

function characterScript(code){
    for(let script of scripts){
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })){
            return script;
        }
    }
    return null;
}

// console.log(characterScript(121))

/*
    strings encoded sequence of 16 bit numbers,
    code units
    An unicode character code was initally supposed to fit within such a unit
    (gives you a little over 65 k characters)
    that is not enough characters
    people scared to use memory for a character representation
    UTF-16 format used by Javsascript 
    it describes most common charactesr used a single 16 bit code unit 
    but uses a pair of such tow such units for others

    UTF 16 is a bad idea now!
    it was designed to invite mistakes
    its easy to write programs that pretend code units and charactesr are the same thing.
    IF your your lanaguage doesnt use two unit characters ,every looks fine.
    Add some common chinese characters then you have trouble.
    with the advent of emojis, everybody started using two unit characters, this problem is 
    far more common
*/

//Two Emoji characters, horse and shoe
let horseShoe = "🐴👞";
// console.log(horseShoe.length)

// console.log(horseShoe[0]);
// //Char code at gives you a code unit
// console.log(horseShoe.charCodeAt(0))

// console.log(horseShoe.codePointAt(0))

let roseDragon = "🥀🐲"

// for (let char of roseDragon){
//     console.log(char)
// }
//Recoginizing Text

function countBy(items, groupName){
    let counts = [];
    for ( let item of items){
        let name = groupName(item)
        let known = counts.findIndex(c => c.name === name);
        if(known === -1){
            counts.push({name, count: 1});
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

// console.log(countBy([1,2,3,4,5], n => n > 2))

function textScripts(text) {
    let countScripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none"; 
    }).filter(({name}) => name != 'none');

    let total = countScripts.reduce((n,{count}) => n + count, 0);
    if( total === 0 ) return "No Script Found";

    return countScripts.map(({name,count}) => {
        return `${Math.round(count * 100 / total)} % ${name}`
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
