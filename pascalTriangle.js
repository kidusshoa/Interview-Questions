var generate = function (numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const previousRow = triangle[i - 1];
        const sum = previousRow[j - 1] + previousRow[j];
        row.push(sum);
      }
    }
    triangle.push(row);
  }
  return triangle;
};

const numRows = 5;
const pascalsTriangle = generate(numRows);
console.log("Pascal's triangle:", pascalsTriangle);
