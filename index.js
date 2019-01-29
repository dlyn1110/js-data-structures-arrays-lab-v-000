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

function appendDriver(name) {
    const appended_driver = [...drivers, name];
    return appended_driver;
}

function prependDriver(name) {
    const prepended_driver = [name, ...drivers];
    return prepended_driver;
}

function removeLastDriver() {
    const new_array = drivers.slice(0, -1);
    return new_array;
}

function removeFirstDriver() {
    const new_array = drivers.slice(1);
    return new_array;
}
