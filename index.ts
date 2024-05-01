#! /usr/bin/env node

import inquirer from "inquirer";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let playerResponse = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name: "
    }
]);

let opponentResponse = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent:",
        choices:["Skeleton", "Alien", "Zombie"]
    }
]);

let p1 = new Player(playerResponse.name);
let o1 = new Opponent(opponentResponse.select);

do{
    if (opponentResponse.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Attack",
                type: "list",
                message: "What would you like to do",
                choices:["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.Attack == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit()
                }
            }
        }
        if (ask.Attack == "Drink Portion") {
            p1.fuelIncrease()
            console.log(`Yuo Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.Attack == "Run For Your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit()
        }
    }

    if (opponentResponse.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "Attack",
                type: "list",
                message: "What would you like to do",
                choices:["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.Attack == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit()
                }
            }
        }
        if (ask.Attack == "Drink Portion") {
            p1.fuelIncrease()
            console.log(`Yuo Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.Attack == "Run For Your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit()
        }
    }

        if (opponentResponse.select == "Zombie") {
            let ask = await inquirer.prompt([
                {
                    name: "Attack",
                    type: "list",
                    message: "What would you like to do",
                    choices:["Attack", "Drink Portion", "Run For Your Life.."]
                }
            ]);
            if (ask.Attack == "Attack") {
                let num = Math.floor(Math.random() * 2)
                if (num > 0) {
                    p1.fuelDecrease()
                    console.log(`${p1.name} fuel is ${p1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);
                    if(p1.fuel <= 0) {
                        console.log("You Loose, Better Luck Next Time");
                        process.exit()
                    }
                }
                if(num <= 0) {
                    o1.fuelDecrease()
                    console.log(`${p1.name} fuel is ${p1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);
                    if(o1.fuel <= 0) {
                        console.log("You Win");
                        process.exit()
                    }
                }
            }
            if (ask.Attack == "Drink Portion") {
                p1.fuelIncrease()
                console.log(`Yuo Drink Health Portion Your Fuel is ${p1.fuel}`);
            }
            if (ask.Attack == "Run For Your Life..") {
                console.log("You Loose, Better Luck Next Time");
                process.exit()
            }
        }
}
while(true)


