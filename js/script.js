"use strict";

function People (name,city,country, interests, favoriteCar,favoriteColors,profession,eyeColor,hairColor, height) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.interests = interests;
    this.favoritecar = favoriteCar;
    this.favoritecolors = favoriteColors;
    this.profession = profession;
    this.eyecolor = eyeColor;
    this.haircolor = hairColor;
    this.height = height;
}

const people1 = new People("Anna Cholakhyan","Yerevan","Armenia",["Drawing", "singing", "playing the piano", "playing the guitar", "making games"],["BMW M5 E60","BMW M5 F10","BMW M5 G30"],["Purple","White","Blue"],"Front End Dev","Brown","Brown","162");
console.log(people1);


function Phone (brand,model,operatingSystem,color,cellularTechnology,memoryStorage,simCard,year) {
    this.brand = brand;
    this.model = model;
    this.operatingsystem = operatingSystem;
    this.color = color;
    this.cellulartechnology = cellularTechnology;
    this.memorystorage = memoryStorage;
    this.simcard = simCard;
    this.year = year;  
}

const phone1 = new Phone("Apple","Iphone 13 Pro","IOS","White","5G","512","Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)","2021");
console.log(phone1);

function Car (brand,model,priceInEurope,priceInUsa,carType,curbWeight,dimensions,wheelbase, introduced, originCountry, gasMileage,topSpeed, engineType,displacement, power, torque, power_liter,power_weight, torque_weight, efficiency, transmission, layout) {
    this.brand = brand;
    this.model = model;
    this.priceInEurope = priceInEurope;
    this.priceInUsa = priceInUsa;
    this.carType = carType;
    this.curbWeight = curbWeight;
    this.dimensions = dimensions;
    this.wheelbase = wheelbase;
    this.introduced = introduced;
    this.originCountry = originCountry;
    this.gasMileage = gasMileage;
    this.topSpeed = topSpeed;
    this.engineType = engineType;
    this.displacement = displacement;
    this.power = power;
    this.torque = torque;
    this.power_liter = power_liter;
    this.power_weight = power_weight;
    this.torque_weight = torque_weight;
    this.efficiency = efficiency;
    this.transmission = transmission;
    this.layout = layout;
}

const car1 = new Car("BMW","M5 E60","€87,800 - €93,350","$84,895 - $97,590", "4-door saloon", "1848-1959 kg (4074-4319 lbs)", "4.86 m (191 in) long, 1.85 m (73 in) wide, 1.47 m (58 in) high", "2.89 m (114 in)", "2005", "Germany", "21.4-15.7 l/100 km (11-15 mpg US / 13-18 mpg UK)","305 kph (190 mph)", "V10, 40v", "5.0 l (305 ci)", "507 ps (500 bhp / 373 kw) @ 7750 rpm", "520 Nm (384 lb-ft) @ 6100 rpm", "101 ps (100 hp)", "270 ps (266 bhp) / t", "277 Nm (204 lb-ft) / t", "27 PS per l/100 km", "7 speed","front engine, rear wheel drive");
console.log(car1);

const peopleObject = {
    name: "Anna",
    lastname: "Cholakhyan",
    city: "Yerevan",
    country: "Armenia",
    age: "24",
    nacionality: "Armenian",
    profession: "Front End Dev",
};

const peopleObject2 = {

};

 // պրակտիկա

Object.setPrototypeOf(peopleObject2,peopleObject);
console.log(peopleObject2.name);

const peopleObject3 = Object.create(peopleObject);
console.log(peopleObject3.lastname);

console.log(Object.getPrototypeOf(peopleObject3));

const people4 = {};
console.log(Object.assign(people4,peopleObject));