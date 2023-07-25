let bus = {
    wheels: 4,
    maxPassenger: 40,
    doors: 2
};

console.log(bus.wheels);
console.log(bus.maxPassenger);
console.log(bus.doors);

bus.glassWindow = 20;
delete bus.doors;

console.log(bus.glassWindow)
console.log(bus)