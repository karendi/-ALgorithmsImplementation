#!/usr/bin/env node

/**
 * @param {number} value
 * 
 * This is the node class that holds
 * the value of vertice and it's
 * adjacent list
 * 
 */
class Node {
    constructor(value){
        this.value = value;
        this.adjacentList = [];
    }

    addAdjacent(node){
        this.adjacentList.push(node);
    }

    removeAdjacent(node){
        return this.adjacentList.filter(element => element != node);
    }

    getAdjacent(){
        return this.adjacentList;
    }

    isAdjacent(node){
        return this.adjacentList.includes(node);
    }
}

class Graph {
    constructor(edgeDirection= Graph.DIRECTED){
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addEdge(source,destination){
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);
        if(this.edgeDirection  === Graph.UNDIRECTED){
            destinationNode.addAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];
    }

    addVertex(value){
        if(this.nodes.has(value)){
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value){
        const current = this.nodes.get(value);
        if(current){
            for(const node of this.nodes.values()){
                node.removeAdjacent(current);
            }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination){
        const sourceNode =  this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if(sourceNode && destinationNode){
            sourceNode.removeAdjacent(destinationNode);
        }

        if(this.edgeDirection === Graph.UNDIRECTED){
            destinationNode.removeAdjacent(sourceNode);
        }

        return[sourceNode, destinationNode];

    }

    *bfs(first){
        const visited = new Map();
        const visitList = []; //queue FIFO use shift()

        visitList.push(first);

        while(visitList.length){
            const node = visitList.shift();
            if(node && !visited.has(node)){
                yield node;
                visited.set(node);
                node.getAdjacent().forEach(adj=>visitList.push(adj));
            }
        }
    }

    *dfs(first){
        const visited = new Map();
        const visitList = []; // implement Stack pop() LIFO

        visitList.push(first);

        while(visitList.length){
            const node = visitList.pop();
            if(node  && !visited.has(node)){
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj=>visitList.push(adj));
            }
        }

    }

}
