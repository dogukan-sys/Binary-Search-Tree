import Node from "./node,js";

class Tree {
  constructor(arr) {
    this.sortedArray = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(this.sortedArray);
  }

  buildTree(arr) {
    if (arr.length == 0) return null;

    const mid = Math.floor(arr.length / 2);

    const root = new Node(
      arr[mid],
      this.buildTree(arr.slice(0, mid)),
      this.buildTree(arr.slice(mid + 1, arr.length))
    );
    return root;
  }
}

export default Tree;
