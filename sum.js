const args = process.argv;
let total = 0;
for (let i = 0; i < args.slice(2).length; i++) {
  total += parseInt(args[2 + i]);
}
console.log(total);