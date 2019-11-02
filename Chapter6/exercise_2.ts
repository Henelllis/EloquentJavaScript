console.log(`test tsc config for exercise 2`)


export const stupidFunction = () => {
    console.log('henry')
}


export class Group<T>{
    groupSet: Array<T>;
    constructor(){
        this.groupSet = [];
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
            console.log(result.value)
            if (result.done) {
                break
            };
            newGroup.add(result.value);


          }
          return newGroup
    }

}

// const myGroup = new Group();
// myGroup.add(2);
// myGroup.add("cat");

// console.log(`group stuff :: ${myGroup}`);

// myGroup.delete(2);
// myGroup.delete(3);

// console.log(`group stuff post delete :: ${myGroup}`);

// const iterObj = [1,2,3,4,5]

// console.log(Group.convertIterableIntoGroup("henry").toString());


