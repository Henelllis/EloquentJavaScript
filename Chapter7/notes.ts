export const roads =
 [
     "Alice's House-Bob's House", 
     "Alice's House-Cabin",
     "Alice's House-Post Office",
     "Bob's House-Town Hall",
     "Daria's House-Ernie's House",
     "Daria's House-Town Hall",
     "Ernie's House-Grete's House",
     "Grete's House-Farm",
     "Grete's House-Shop",
     "Marketplace-Farm",
     "Marketplace-Post Office",
     "Marketplace-Shop",
     "Marketplace-Post Office",
     "Shop-Town Hall"
 ]

 export function buildGraph(edges:Array<string>){
     
    let graph = Object.create(null);
    
    function addEdge(from:string, to:string){
        if(!graph[from]){
            graph[from] = [to];
        }
        else{
            if(graph[from]){
                graph[from].push(to);
            }
        }   
    }

    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
 }

