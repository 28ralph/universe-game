class Human {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(){
        console.log("You are attacking an alien!");
    }
}

class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(){
        console.log("Alien attacking human");
    }
}

let human = new Human(20, 5, 7);

let alien = [2];
let x, y, z;
for (let i = 0; i<alien.length; i++){
    x = Math.random() * (3) + 3
    y = Math.random() * (2) + 2
    z = Math.random() * (2) + 6
    alien[i] = new Alien(x,y,z)

    // console.log(alien[0].hull)
}

console.log(x,y,z)

// console.log(alien[0].hull)
// console.log(alien[0].firepower)

// const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;'
// console.log("%cHooray", style);
let i = 0;

while(true){
    human.attack()
    console.log(human.accuracy, alien[0].accuracy)
    if(human.accuracy > alien[i].accuracy){

        console.log("You hit the alien!!!")
        console.log("You have done 5 damage")
        alien[i].hull -= human.firepower;
        console.log("Alien has " + alien[i].hull + " hull remaining.")
        break;
    }
    else {
        console.log("You missed");
        break;
    }
}