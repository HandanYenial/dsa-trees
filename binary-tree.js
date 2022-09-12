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

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
