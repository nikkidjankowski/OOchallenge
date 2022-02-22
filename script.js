class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return ("beep");
    }

    toString(){
        return ("this vehicle is a " + this.make + ' ' + this.model + ' ' + this.year);
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}


class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine(){
        return("VROOOOM!");
    }
}


class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
       if(!(newVehicle instanceof Vehicle)){
           return "only vehicles allowed";
       }
       if(this.vehicles.length >= this.capacity) {
           return "sorry we're full";
       }
       this.vehicles.push(newVehicle);
       return "vehicle added!";
    }
}