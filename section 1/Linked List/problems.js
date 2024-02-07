class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let node = new Node(arr[i]);
    curr.next = node;
    curr = curr.next;
  }
  return head;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 7];

let head = arrayToLinkedList(arr);

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

// printList(head);

function deleteNodeWithSpecifiedValue(head, val) {
  let curr = head;
  let prev = curr;

  while (curr && curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }

  if (curr) {
    prev.next = curr.next;
    return true;
  }
  return false;
}

// deleteNodeWithSpecifiedValue(head, 5);

// printList(head);

function addAtBeginning(head, val) {
  const node = new Node(val);

  node.next = head;
  head = node;
  return head;
}

// head = addAtBeginning(head, 99);

// printList(head);

function addAtEnd(head, val) {
  const node = new Node(val);
  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }

  curr.next = node;
  return head;
}

// head = addAtEnd(head, 199);
// head = addAtEnd(head, 400);

// printList(head)

function insertAfterVal(head, searchVal, val) {
  const node = new Node(val);

  let curr = head;

  while (curr && curr.val !== searchVal) {
    curr = curr.next;
  }
  if (curr) {
    let next = curr.next;
    curr.next = node;
    node.next = next;
    return head;
  }
  return null;
}

// insertAfterVal(head, 7, 10);

// printList(head);

function insertBeforeVal(head, searchVal, val) {
  const node = new Node(val);
  if (head.val === searchVal) {
    node.next = head;
    head = node;
    return head;
  }

  let curr = head;
  let prev = curr;

  while (curr && curr.val !== searchVal) {
    prev = curr;
    curr = curr.next;
  }

  if (curr) {
    let next = prev.next;
    prev.next = node;
    node.next = next;
    return head;
  }
  return head;
}

// head = insertBeforeVal(head, 3, 55);

// printList(head);

function reverseList(head) {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

// printList(head);
// head = reverseList(head);
// console.log("*****************")
// printList(head);

function removeDuplicateFromSortedList(head) {
  let prev = head;
  let curr = prev.next;

  while (curr) {
    if (prev.val === curr.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
}

printList(head);

removeDuplicateFromSortedList(head);
console.log("duplicates removed");

printList(head);
