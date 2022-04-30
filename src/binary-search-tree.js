const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      insertNode(this.rootNode, newNode)
    }

    function insertNode(node, newNode) {
      if (node.data > newNode.data) {
        (node.left === null) ? node.left = newNode : insertNode(node.left, newNode) 
      } else if (node.data < newNode.data) {
        (node.right === null) ? node.right = newNode : insertNode(node.right, newNode)
      }
    }
  }

  has(data) {
    // console.log('findres:', this.find(data))
    return (this.find(data) ? true : false)
  }

  find(data) {
    // console.log(this.root(), data)
    if (this.root().data === data || this.root() === null ) {
      return this.root();
    } else {
      // console.log('work')
      let result = this.findNodeAndParrent(this.root(), data);
      // console.log(result, data);
      return ((result === null) ? null : result[0]);
    }    
  }

  remove(data) {
    // console.log(data, this.root().data === data)
    let currNode;
    let parrent;
    if (this.root() === null || !this.has(data)) {
      // console.log(this.root(), data, !this.has(data));
      return;
    } else if (this.root().data === data) {
      // console.log('remRoot');
      currNode = this.root();
      // console.log(currNode);
      if (currNode.left === null && currNode.right === null) {
        // console.log('work');
        this.rootNode = null;
        return
      } else if (currNode.left === null || currNode.right === null) {
        let child = (currNode.left === null) ? currNode.right : currNode.left;
        this.rootNode = child;
        return
      }
    } else {
      let nodeAndParrent = this.findNodeAndParrent(this.root(), data);
      currNode = nodeAndParrent[0];
      parrent = nodeAndParrent[1];
      // console.log(currNode, parrent);
    }

    if (currNode.left === null && currNode.right === null) {
      // console.log('remNoChild');
      this.removeNodeNoChild(currNode, parrent);
    } else if (currNode.left === null || currNode.right === null) {
      this.removeNodeOneChild(currNode, parrent);
    } else if (currNode.left !== null && currNode.right !== null) {
      this.removeNodeTwoChild(currNode);
    }
    
  }

  min() {    
    if (this.root() === null) {
      return this.root();
    } else {
      // console.log('work')
      return this.findMin(this.root()).data
    }
  }

  max() {    
    if (this.root() === null) {
      return this.root();
    } else {
      // console.log('work')
      return this.findMax(this.root()).data
    }
  }

  findNodeAndParrent(node, data) {
    // console.log(node.data, data)
    if (node.data > data) {
      // console.log(node.left === null, node.left.data < data, node.left.data === data)
      if (node.left === null) {
        // console.log('work')
        return null
      } else if (node.left.data === data) {
        // console.log('else if', node.left)
        return [node.left, node];
      } else {
        // console.log('else')
        return this.findNodeAndParrent(node.left, data);
      }
    } else if (node.data < data) {
      if (node.right === null) {
        return null;
      } else if (node.right.data === data) {
        return [node.right, node];
      } else {
        return this.findNodeAndParrent(node.right, data);
      }
    }
  }  

  findMin(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMin(node.left);
    }
  }

  findMax(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMax(node.right)
    }
  }

  removeNodeNoChild(node, parrent) {
    // console.log(node, parrent)
    parrent.left === node ? parrent.left = null : parrent.right = null 
  }

  removeNodeOneChild(node, parrent) {
    let child = (node.left === null) ? node.right : node.left;
    if (parrent.left === node) {
      parrent.left = child;
    } else {
      parrent.right = child;
    }
  }

  removeNodeTwoChild(node) {
    let replacementNode = this.findMin(node.right);
    this.remove(replacementNode.data)
    // console.log(replacementNode.data)
    node.data = replacementNode.data;
  }
}


let testTree = new BinarySearchTree()
testTree.add(10)
testTree.add(8)
testTree.add(15)
testTree.add(7)

testTree.add(20)
// testTree.add(14)

// console.log(testTree.rootNode)
// testTree.rootNode = null
// let serchData = 20;
// console.log(testTree.find(serchData))
// console.log(testTree.has(serchData))

// testTree.add(1)
// console.log(testTree.max())
// testTree.add(50)
// console.log(testTree.max())
// testTree.add(14)
// console.log(testTree.remove(50))

console.log(testTree.rootNode)
// console.log(testTree.find(25), testTree.find(50))
testTree.remove(10)
console.log(testTree.rootNode)
// console.log(testTree.find(20))
// console.log(testTree.has(50))


module.exports = {
  BinarySearchTree
};