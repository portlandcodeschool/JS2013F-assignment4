var numnums = [123, 847, 661, 999, 102];

console.log(numnums);

numnums.sort(function (a, b) {
  return b % 10 - a % 10;
});

console.log(numnums);