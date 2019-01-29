// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(){
 appendDriver = drivers.push();
}

 function destructivelyPrependDriver(name) {
   prependDriver = drivers.unshift(name);
 }

function destructivelyRemoveLastDriver(name) {
  removeLastDriver = drivers.pop(name);
}
