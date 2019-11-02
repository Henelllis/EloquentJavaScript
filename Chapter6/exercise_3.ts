export class Group<T>{
    groupSet: Array<T>;
    constructor(){
        this.groupSet = [];
    }

    [Symbol.iterator]() {
        return new GroupIterator<T>(this);
    }

    has(element:T):boolean{
        if(this.groupSet.filter(elem => elem === element).length >= 1){
            return true;
        }
        else{
            return false
        }
    }

    add(element:T):boolean{
        if(!this.has(element)){
            this.groupSet.push(element);
            return true;
        }else{
            return false;
        }
    }

    delete(element:T):boolean{
        if(this.has(element)){
            this.groupSet = this.groupSet
                                .filter(elem => elem !== element )
            return true;
        }else{
            return false;
        }
    }

    toString():string{
        return this.groupSet.map( setMember => `${setMember}\n`).toString()
    }

    static convertIterableIntoGroup<S>(iterableObj:Iterable<S>):Group<S> {
        const io = iterableObj;

        const newGroup = new Group<S>();
        const iterateGenerator = iterableObj[Symbol.iterator]()

        while (true) {
            let result = iterateGenerator.next();
            if (result.done) {
                break
            };
            newGroup.add(result.value);


          }
          return newGroup
    }

    

}


class GroupIterator<T> implements Iterator<T>{

    group:Group<T>;
    index:number;

    constructor(group:Group<T>){
        this.group = group;
        this.index = 0;
    }

    

    next():IteratorResult<T>{
        if(this.index === this.group.groupSet.length){
            return { value: undefined, done:true}
        }else{
            const groupValue = this.group.groupSet[this.index];
            this.index = this.index + 1;
            return {
                value:groupValue,
                done:false
            }
        }
    }
}


const testGroup = Group.convertIterableIntoGroup("Henry");

for (let o of testGroup) {
    console.log(o);
}
  
