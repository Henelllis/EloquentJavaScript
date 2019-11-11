const scripts = require('./scripts');

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


/**
 * Dominant Writing Direction
 *  @param string 
 * take every character from string derive which script its from
 * and logically group it with one of the three categories
 * rtl
 * ltr
 * ttb
 */
//console.log(textScripts());
//output would be ltr
//console.log(textScripts('LAAAATTTTTIN HAHAHAHAH说"тяв"'));
//output would be rtl

 const dominatDirection = text => {
     const directionGroups = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        console.log(`Script direction ${(script ? (script.name + ' ' + script.direction) : 'BAHHHHH')}`)
        return script ? script.direction : 'none'
     } ).filter(item => item.name !== 'none')

    //  console.log(`Direction Groups ${JSON.stringify(directionGroups)}`);
     return directionGroups.reduce( (a,b) => {return a.count > b.count ? a : b}).name
 }
const testString = '英国的狗说"woof", 俄罗斯的狗说"тяв"الْأَبْجَدِيَّة'
console.log(dominatDirection(testString))