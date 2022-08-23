const flipstring = function(string) {
  let store = "";
  let converted = string.toString();
  for (let i = converted.length - 1; i >= 0; i--) {
    store += converted[i];
  }
  return store;
};


let args = process.argv;
for (let i = 2; i < process.argv.length; i++) {
  args [i - 2] = flipstring(args[i]);
  console.log(args[i - 2]);
}
