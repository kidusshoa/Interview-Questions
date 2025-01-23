var inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let cur = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }

  return res;
};

root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

//console.log(inorderTraversal(root));
