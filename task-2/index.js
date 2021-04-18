const arrWork = [1, 2, 3, 4, 5];
console.log(arrWork);
const step = 3;

function shift(a, k) {
  return a.concat(a.splice(0, a.length - k));
};

console.log(shift(arrWork, step)); 