const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
   // throw new NotImplementedError('Not implemented');
   this.rootNode = null 
   return this.rootNode
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    var newNode = new Node(data);
    if(this.rootNode === null){
        this.rootNode = newNode;
        return this;
    }
    let current = this.rootNode;
    while(current){
        if(data === current.data) return undefined;
        if(data < current.data){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
      }
   }
  
  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};