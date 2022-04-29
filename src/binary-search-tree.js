const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = addWithIn(this.root, data);

    function addWithIn(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithIn(node.left, data);
      } else {
        node.right = addWithIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithIn(this.root, data);

    function searchWithIn(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data<node.data) {
        return searchWithIn(node.left, data);
      } else if (data>node.data) {
        return searchWithIn(node.right, data);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!node) {
      return null;
    }
    if (data<node.data) {
      return this.find(data, node.left);
    }
    if (data>node.data) {
      return this.find (data, node.right);
    }
    if (data === node.data) {
      return node;
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data>data) {
      node.left = removeNode(node.left, data);
      return node;
      } else if (node.data<data) {
        node.right = removeNode(node.right, data);
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
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return undefined;
    }
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return undefined;
    }
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};