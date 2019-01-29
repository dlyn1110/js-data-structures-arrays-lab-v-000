// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name){
 appendDriver = drivers.push(name);
}

 function destructivelyPrependDriver(name) {
   prependDriver = drivers.unshift(name);
 }

function destructivelyRemoveLastDriver(name) {
  removeLastDriver = drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
   removeFirstDriver = drivers.shift();
}

function appendDriver(){
  return [...drivers, "Broom"]
}
