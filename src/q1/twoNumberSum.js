/**
 * @desc 
 * @param {array} numArray 
 * @param {number} targetSum 
 */
const twoNumberSum = (numArray, targetSum) => {
  for (let i = 0; i < numArray.length - 1; i++) {
    let firstNum = numArray[i];
    for (let j = i + 1; j < numArray.length; j++) {
      let secondNum = numArray[j];
      let tempSum = firstNum + secondNum;
      if (tempSum === targetSum) {
        return [firstNum, secondNum].sort((a,b)=> a-b);
      }
    }
  }
  return [];
};

// const twoNumberSum = (numArray, targetSum)=> {}
module.exports = twoNumberSum;
