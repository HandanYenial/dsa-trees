/** TreeNode: node for a general tree. */

const { node } = require("webpack");

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root){ //if there is no root 
      return 0;
    }
    
    let sum = this.root.val; //set sum to root value
    
    function add(node){
      for(let child of node.children){ //loop through children
        sum += child.val; //add child value to sum
        if(child.children.length > 0){ //if child has children
          add(child); //call add function on child
        }
      }
    }
    add(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {//if there is no root 
      return 0;
    }
    let count = this.root.val % 2 === 0 ? 1 : 0; //if root value is even, set count to 1, else 0
    
    function countEvensHelper(node){
      for(let child of node.children){ //loop through children
        if(child.val % 2 === 0){ //if child value is even
          count++; //increment count
        }
        if(child.children.length > 0){ //if child has children
          countEvensHelper(child); //call countEvensHelper on child
        }
      }
    }
    countEvensHelper(this.root);
    return count;
    
  };

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound){
    if (!this.root) {//if there is no root
       return 0;
    }
    
    let count = this.root.val > lowerBound ? 1 : 0; //if root value is greater than lowerBound, set count to 1, else 0
    function countEvensHelper(node){
      for(let child of node.children){ //loop through children

        if (child.val > lowerBound)//if child value is greater than lowerBound
          count++; //add to count
        
        if(child.children.length > 0){ //if child has children
          countEvens(child); //call countEvens function on child
        }
      }
    }
    countEvensHelper(this.root);
    return count; 
  }
};


module.exports = { Tree, TreeNode };
