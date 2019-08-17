var x = 99;
var pt = {x:0, y:0};
var isTrue: boolean = false;

console.log(pt.x);

var myTest = function(number:number){
    console.log(`farts ${number}`);
    console.log('Big farts')
}

myTest(x);

class Character{
    name:string;
    lvl:number;
    hp:number;

    constructor(name:string){
        this.name = name;
        this.lvl = 1;
        this.hp = 10;
    }
    levelUP(){
        this.lvl++;
        this.hp += 10;
    }
}

class Rogue extends Character{
    speed:number;
    constructor(name:string){
        super(name);
        this.speed = 10;
    }
    levelUP(){
        super.levelUP();
        this.speed++;
    }
}