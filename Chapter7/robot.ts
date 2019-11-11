import {buildGraph, roads} from './notes';
import VillageState from './village'

const roadGraph = buildGraph(roads);

function runRobot(state, robot,  memory ){
    for (let turn = 0;; turn++){
        if(state.parcels.length === 0){
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

export function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {
        direction: randomPick(roadGraph[state.place])
    }
}

function villageFactory(parcelCount){

    let parcels = [];
    for ( let i = 0; i < parcelCount ; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        } while ( place === address);

        parcels.push({ place, address});
    }

    return new VillageState("Post Office", parcels);
}

const myVillage = villageFactory(5);
console.log(`myVillage ${JSON.stringify(myVillage.parcels)}`)
// runRobot(villageFactory(5), randomRobot, null);
