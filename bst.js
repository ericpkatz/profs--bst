function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  const dir = value < this.value ? 'left' : 'right';
  const node = this[dir];
  if(!node){
    this[dir] = new BST(value);
  }
  else {
    this[dir].insert(value);
  }
}

BST.prototype.traverseInOrder = function(fn){
  if(this.left){
    this.left.traverseInOrder(fn);
  }
  fn(this.value);
  if(this.right){
    this.right.traverseInOrder(fn);
  }
}

BST.prototype.traverseByLevel = function(fn){
  const q = [this];
  while(q.length){
    const current = q.shift();
    fn(current.value);
    if(current.left){
       q.push(current.left);
    }
    if(current.right){
       q.push(current.right);
    }
  }
}

module.exports = BST;
