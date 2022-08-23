const dice = function(num) {
  let diceRolled = `Rolled ${num} dice:`;
  for (let i = 0; i < num; i++) {
    diceRolled += " " + Math.ceil((Math.random() * 6));
    if (i < num - 1) {
      diceRolled += ",";
    }
  }
  return diceRolled;
};

console.log(dice(process.argv[2]));