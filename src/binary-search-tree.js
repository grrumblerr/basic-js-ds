const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
class BinarySearchTree {
  constructor() {
    this.curRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.curRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.curRoot = addData(this.curRoot, data);

    function addData(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchData(this.curRoot, data);

    function searchData(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      if (value<node.data) {
        return searchData(node.left, value);
      } else if (data>node.data) {
        return searchData(node.right, value);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findData(this.curRoot, data);

    function findData(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        return findData(node.left, value);
      }
      if (value > node.data) {
        return findData(node.right, value);
      }
      if (value === node.data) {
        return node;
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.curRoot = removeData(this.curRoot, data);

    function removeData(node, value) {
      if (!node) {
        return null;
      }
      if (node.data>value) {
      node.left = removeData(node.left, value);
      return node;
      } else if (node.data<value) {
        node.right = removeData(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          //проверяем что нет левых и правых потомков, т.е. элемент - лист
          return null;
        }
        if (!node.left) {
          //если нет левого потомка, делаем правый узлом
          node = node.right;
          return node;
        }
        if (!node.right) {
          //если нет правого потомка, делаем левый узлом
          node = node.left;
          return node;
        }
        //если есть оба потомка, выбираем минимум из правого поддерева
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeData(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.curRoot) {
      return undefined;
    }
    let node = this.curRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.curRoot) {
      return undefined;
    }
    let node = this.curRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};