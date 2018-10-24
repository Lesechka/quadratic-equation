module.exports = function solveEquation(equation) {
let numbers = equation.match(/(-?|\+\s|-\s)[^\^][0-9]+/g).map(function(item){
  return Number(item.replace(/\s/g, ''));
});
const [a,b,c] = numbers;
const D = Math.pow(b, 2) - 4 * a * c;
    const first = (-b + Math.sqrt(D)) / (2 * a);
    const second = (-b - Math.sqrt(D)) / (2 * a);
          const result = [Math.round(first), Math.round(second)];
          return result.sort(function(a,b) {
            return a-b;
          });
    }
