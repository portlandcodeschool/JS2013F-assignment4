var numnums = [123, 847, 661, 999, 102];

console.log(numnums);

numnums.sort(function (a, b) {
  return b % 2 - a % 2;
});

console.log(numnums);