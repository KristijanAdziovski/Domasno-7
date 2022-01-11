let car ={}
car.model="Honda";
car.color="dark";
car.year=2006;
car.fuel="diesel";
car.fuelConsumption=0.08;
car.distance=+prompt("Enter the km for calculate liters of fuel");
car.method=function(km){
    km=km*car.fuelConsumption
    console.log(`You need ${km} liter diesel`);
}
car.method(car.distance);