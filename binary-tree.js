/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){ // if there is no root, return 0
      return 0;
    }
    function minDepthHelper(node){ 
      if(node.left === null && node.right === null){ // if the node is a leaf, return 1
        return 1;
      }
      if(node.left === null){ // if there is no left child, recurse on the right child
        return 1 + minDepthHelper(node.right);
      }
      if(node.right === null){ // if there is no right child, recurse on the left child
        return 1 + minDepthHelper(node.left);
      }
      return(Math.min(minDepthHelper(node.left) , minDepthHelper(node.right)) + 1); // return the minimum of the left and right child + 1
    }
    return minDepthHelper(this.root);
    
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){ // if there is no root, return 0
      return 0;
    }
    function maxDepthHelper(node){
      if(node.left === null && node.right === null){ //if the node is a leaf, return 1
        return 1;
      }
      if(node.left === null){//if there is no left child then recurse on the right child
        return 1 + maxDepthHelper(node.right);
      }
      if(node.right === null){ //if there is no right child then recurse on the left child
        return 1 + maxDepthHelper(node.left);
      }
      return(Math.max(maxDepthLHelper(node.left) , maxDepthHelper(node.right)) + 1); 
      //return the maximum of the left and right child + 1
    }
    return maxDepthHelper(this.root); //return the max depth of the tree

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0; //set result to 0

    function maxSumHelper(node){
      if(node === null){     //if the node is null, return 0
        return 0;
      }
      const leftSum = maxSumHelper(node.left);      //recurse on the left child
      const rightSum = maxSumHelper(node.right);   //recurse on the right child
      result = Math.max(result , node.val + leftSum + rightSum);
      return Math.max(0 , leftSum + node.val, rightSum + node.val);    //return the maximum of the left and right child + node value
    }

    maxSumHelper(this.root); //call maxSumHelper on the root
    return result; 

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return 0;
    }
    //We'll use BFS : breadth-first search
    let queue = [this.root]; //create a queue and add the root to it
    let closest = null; //set closest to null

    while(queue.length > 0){ //while the queue is not empty
      let currentNode = queue.shift();       //remove the first element from the queue
      let currentVal = currentNode.val;     //set currentVal to the value of the current node
      let higherThanLowerBound = currentVal > lowerBound;      //set higherThanLowerBound to true if the currentVal is greater than the lowerBound
      let shouldReassignClosest = currentVal < closest || closest === null;     //set shouldReassignClosest to true if the currentVal is less than closest or closest is null

      if(higherThanLowerBound && shouldReassignClosest){ //if higherThanLowerBound and shouldReassignClosest are true
        closest = currentVal;
      }
      if (currentNode.left){
        queue.push(currentNode.left);
      }
      if (currentNode.right){
        queue.push(currentNode.right);
      }
    return closest;
  }
  }
}


module.exports = { BinaryTree, BinaryTreeNode };
