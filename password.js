
const obfuscator = function(password) {
  let modPassword = "";
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      modPassword += "4";
    } else if (password[i] === "l") {
      modPassword += "1";
    } else if (password[i] === "o") {
      modPassword += "0";
    } else if (password[i] === "e") {
      modPassword += "0";
    } else {
      modPassword += password[i];
    }
  }
  return modPassword;
};

let test = process.argv[2];
console.log(obfuscator(test));