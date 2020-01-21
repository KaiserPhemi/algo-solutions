// /**
//  * @desc O(n^2) solution | O(1) space
//  * @param {array} numArray 
//  * @param {number} targetSum 
//  */
// const twoNumberSum = (numArray, targetSum) => {
//   for (let i = 0; i < numArray.length - 1; i++) {
//     let firstNum = numArray[i];
//     for (let j = i + 1; j < numArray.length; j++) {
//       let secondNum = numArray[j];
//       let tempSum = firstNum + secondNum;
//       if (tempSum === targetSum) {
//         return [firstNum, secondNum].sort((a,b)=> a-b);
//       }
//     }
//   }
//   return [];
// };

/**
 * @desc O(n) time | O(n) space
 * @param {array} numArray 
 * @param {number} targetSum 
 */
const twoNumberSum = (numArray, targetSum) => {
  let numHash = {};
  for (const currentNum of numArray) {
    let targetNum = targetSum - currentNum;
    if (targetNum in numHash) {
      return [currentNum, targetNum].sort((a, b) => a - b);
    } else {
      numHash[currentNum] = true;
    }
  }
  return [];
};

module.exports = twoNumberSum;
