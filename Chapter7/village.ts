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
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address:"Alice's House"}]
)
let next = first.move("Alice's House")
console.log(next.place)
console.log(next.parcels)
console.log(first.place)