// input [4,2,3,1]
// output - Rob house 1 (money = 4) and then rob house 3 (money = 3). Total amount you can rob = 4 + 3 = 7.

let input = [];

process.argv.forEach((val, i) => {
  if (i > 1) {
    input.push(Number(val));
  }
});

if (input.length === 0) {
  console.log("No Money, No House");
  return;
}

if (input.length === 1) {
  console.log(`Total is ${input[0]}`);
  return;
}

// 1 9 5 1 9
function findMaxSum(nums) {
  let rob = 0;
  let norob = 0;
  for (let i = 0; i < nums.length; i++) {
    let newRob = norob + nums[i];
    let newNoRob = Math.max(norob, rob);
    console.log(newRob, newNoRob, norob, rob, nums[i]);
    rob = newRob;
    norob = newNoRob;
  }
  return Math.max(rob, norob);
}

console.log(findMaxSum(input));
