const piglatin = function(string) {
  let store = "";
  for (let i = 1; i < string.length; i++) {
    store += string[i];

  }
  store += string[0] + "ay";
  return store;
};


let args = process.argv;
let sentence = "";
for (let i = 2; i < process.argv.length; i++) {
  sentence += piglatin(args[i]);
  sentence += " ";
}
console.log(sentence);