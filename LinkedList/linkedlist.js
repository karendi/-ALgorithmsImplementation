#!/usr/bin/env node

/**
 * Node to be  added to the linked list
 * 
 * @param {number} val the element/data
 * @param {*} next the pointer
 */
const ListNode = class {
    constructor(val, next=null){
        this.val=val;
        this.next=next;
    }
}

/**
 * 
 * @param {} head the first Node of the
 * linked list
 * 
 * Has different functions
 * 
 * @param {function}  add(element)
 * @param {function}  insertAt(element,index)
 * @param {function}  removeFrom(index)
 * @param {function}  removeElement(element)
 * 
 */
const LinkedList = class {
    constructor(){
        this.head=null;
        this.size=0;
    }

    add(element) {
        let newNode =  new ListNode(element);
        let current;

        // check if the list is empty
        if(!this.head){
            this.head = newNode;
        }

        // current is the first  node of the  list
        // trasverse the list till the last node and
        // add the new node there.
        current = this.head;

        while(current.next){
            current=current.next;
        }
        current.next = newNode;
        this.size++;
    }

    insertAt(element,index){
        //check if the index is valid and within range
        if(index > 0 && index > this.size){
            return -1;
        } else {
             //create a  node
        let newNode = new Node(element);
        let iterate, current, previous;

        current = this.head;

        // check if you are required to add the node
        //  to the first  index
        if(index === 0){
            newNode.next = current;
            this.head = newNode;
        } else {
            iterate=0;
            while(iterate<index){
                previous = current;
                current =  current.next;
                iterate++
            }
    
            previous.next = newNode;
            newNode.next = current;
        }
        this.size ++

        }
    }

    removeFrom(index) {
        let current,previous,iterate = 0;
        current =  this.head;

        // check if the index can be used

        if(index > 0 && index > this.size){
            return -1;
        } else {
            // check if the node is to be deleted
            // from the beginning of the list
            if(index === 0){
                this.head = current.next;
            } else {
                while(iterate < index){
                    previous = current;
                    current =  current.next;
                    iterate++
                }

                previous.next=current.next;
            }
            this.size --;
        }
    }


    removeElement(element) {
        let current = this.head;
        let previous = null;

        while(current !== null){
            if(current.val === element){
                // remove the first and only element
                if(prev === null){
                    this.head  = current.next;
                } else
                {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;

            }
            previous = current;
            current  =  current.next;
        }
        

    }

    //  Helper methods
    indexOf(element) {
        let count =0;
        let current =  this.head;

        while(current != null){
            if(current.val ===  element){
                return count;
            }
            count ++;
            current = current.next;

        }

        return -1;
    }

    printList(){
        let current = this.head;
        let str = "";

        while(current){
            str += current.element  + "";
            current = current.next;
        }
        console.log(str);
    }

}
