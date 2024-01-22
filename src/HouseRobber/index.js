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

function findMaxSum(){
    
}