const input = "YYYY";
let zerothHourSum = 0;
const penaltyArray = [];
const calculatedPenalty = [];

for (let index = 0; index < input.length; index++) {
  if (input.charAt(index) === "Y") {
    penaltyArray.push(1);
    zerothHourSum += 1;
  } else {
    penaltyArray.push(0);
  }
}

for (let index = 0; index < input.length; index++) {
  calculatedPenalty.push(
    penaltyArray.reduce((acc, cur, penIndex) => {
      acc += penIndex <= index ? (cur === 0 ? 1 : 0) : 0;
      if (penIndex > index) {
        acc += cur;
      }
      return acc;
    }, 0)
  );
}

console.log(penaltyArray);
console.log(zerothHourSum, calculatedPenalty);

console.log(Math.min(zerothHourSum));
