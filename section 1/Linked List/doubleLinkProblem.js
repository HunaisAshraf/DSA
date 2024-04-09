class DNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  function arrToDll(arr) {
    const head = new DNode(arr[0]);
    let tail = head;
  
    for (let i = 1; i < arr.length; i++) {
      const node = new DNode(arr[i]);
  
      node.prev = tail;
      tail.next = node;
      tail = node;
    }
    return head;
  }
  
  function deleteFromIndex(head, index) {
    let i = 0;
  
    let curr = head;
  
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    let temp = curr.prev;
    temp.next = temp.next.next;
    curr.next.prev = temp;
    return temp;
  }
  
  function deleteByValue(head, value) {
    if (head.val === value) {
      let temp = head.next;
      temp.prev = null;
      head.next = null;
      head = temp;
      return head;
    }
  
    let curr = head;
  
    while (curr.val !== value) {
      curr = curr.next;
    }
  
    let temp = curr.prev;
    temp.next = temp.next.next;
    curr.next.prev = temp;
    return head;
  }
  
  let arr = [1, 2, 3, 4, 5, 7, 8, 9, 6];
  
  // let list = arrayToLinkedList(arr);
  let dList = arrToDll(arr);
  console.log(deleteByValue(dList, 3));
  // console.log(dList);
  // console.log(deleteFromIndex(dList, 1));
  