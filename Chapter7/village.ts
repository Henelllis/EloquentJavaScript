import {buildGraph, roads} from './notes';


class VillageState{
    
    place;

    parcels;

    constructor(place,parcels){
        this.place = place;
        this.parcels = parcels;
    }

    /**
     * 
     * @param destination 
     * if the roadGraph with key of this place has the destination in it's value array
     * return this instance of the variable
     */
    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            console.log(` This graph at this place ${this.place} Does Not include ${destination}`)
            return this;
        }else{
            console.log(` This graph at this place ${this.place} include ${destination}`)

            let parcels = this.parcels.map( parcel => {
                
                if(parcel.place !== this.place){
                    return parcel;
                }

                return { 
                    place:destination,
                    address: parcel.address
                }
            }).filter(parcel => parcel.place !== parcel.address);
            return new VillageState(destination, parcels);
        }
    }
}

const roadGraph = buildGraph(roads);
console.log(`roadGraph ${JSON.stringify(roadGraph)}`);

Object.keys(roadGraph).map(
    place => {
        console.log(`${place} : [ ${roadGraph[place]} ]`);
    }
)
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address:"Alice's House"},
     {place: "Alice's House", address:"Bob's House"}]
)
let next = first.move("Alice's House")
console.log(next.place)
console.log(next.parcels)
console.log(first.place)

let next2 = next.move("Bob's House")
console.log("Move to ALices house")

console.log(next2.place)
console.log(next2.parcels)
console.log(next2.place)