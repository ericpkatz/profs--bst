const expect = require('chai').expect;
const BST = require('./bst');

describe('BST', ()=> {
  it('can insert and traverse in order', ()=> {
    const bst = new BST(7);
    bst.insert(2);
    bst.insert(9);
    bst.insert(1);
    bst.insert(11);
    let values = [];
    bst.traverseInOrder((value)=> values.push(value));
    expect(values).to.eql([1, 2, 7, 9, 11]);
  });
  it('can insert and traverse by depth', ()=> {
    const bst = new BST(7);
    bst.insert(2);
    bst.insert(9);
    bst.insert(1);
    bst.insert(11);
    let values = [];
    bst.traverseByLevel((value)=> values.push(value));
    expect(values).to.eql([7, 2, 9, 1, 11]);
  });
});
