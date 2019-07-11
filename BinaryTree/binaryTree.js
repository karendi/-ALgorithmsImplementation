#!/usr/bin/env node

/**
 * Node class with three properties
 * 
 * @param {*} data 
 * @param {*} left -pointer to the left node
 * @param {*} right -pointer to the right node
 */
const Node = class {
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const BinarySearchTree = class 
{
    constructor(){
        //  root of the binary search tree
        this.root = null;
    }

    insert(data) {
        var newNode  = new Node(data);

        if(!this.root){
            this.root =  newNode;
            return this;
        }

        let current = this.root;

        while(current) {
            // check for duplicates
            if(data === current.data){
                return;
            }

            //left node insertion
            if(data < current.data){
                // check if the node has a left node if not append the new node
                if(!current.left){
                    current.left = newNode;
                }

                // there is a left node, so we set current to the current.left node and loop again
                current = current.left;
            }

            // right node insertion
            if(data > current.data){
                if(!current.right){
                    current.right = newNode;
                }

                // there is a right node so we set current to the current.right node and loop again
                current = current.right;
            }
        }

    }

    find(data){
        let current = this.root;
        if(!current){
            return null;
        }
        while(current){
            if(current.data === data){
                return current.data;
            }
            if(current.right  && data > current.data){
                current = current.right;
            } else {
                current = current.left;
            }
        }

    }

    contain(data){
        // helps check whether the data is present in the binary search tree

    }

    // Tree Traversal
    breadthFirstSearch(){
        let node = this.root;
        const queue = [node];
        const finalData = [];
        
        while(queue.length) {
            // removes the first element from the array and returns it
            node = queue.shift();          
            if(node.left) {
                queue.push(node.left);
                
            };
            if(node.right) {
                queue.push(node.right);
            }

            finalData.push(node.data)

        }
    }


    /**
     * depth first search preorder
     * It starts from a root node and
     * moves all the way down to the left
     * before backtracking then all the way
     * to the right.
     * 
     * root, left, right
     * 
     */
    depthFirstSearchPreOrder(){
        // final preOrder list
        const finalData = [];

        const traverse = (node)=>{
            // push the data 
            finalData.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

        }

        traverse(this.root);
        return finalData;

    }

    /**
     * Process all nodes of a tree
     * by recursively processing all the 
     * subtrees and then finally processing 
     * the root
     * left, right, root
     * 
     */
    depthFirstSearchPostOrder(){
        const finalData = [];

        const traverse = (node)=>{
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            // push the data
            finalData.push(node.data)
        }

        traverse(this.root);
        return finalData;
    }
    /**
     * Process all nodes of a tree by recursively 
     * processing the left subtree, then the  root
     * then finally the right subtree
     * 
     * left, root,right
     */
    depthFirstSearchInOrder(){
        const finalData = [];

        const traverse = (node)=>{
            if(node.left) traverse(node.left);
            finalData.push(node.data);
            if(node.right) traverse(node.right);

        }
        traverse(this.root);
        return finalData;

    }

    maxNode(){
        if(!this.root)return null;
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.data
    }

    minNode(){
        if(!this.root)return null;
        let current = this.root;
        while(current.left){
            current=current.left;
        }
        return current.data;
    }
    
}
