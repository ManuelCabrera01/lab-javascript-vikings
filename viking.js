$( document ).ready(function() {



var strengthA = 150;
var healthA = 300;

function Soldier (healthA, strengthA){

  this.health = healthA;
  this.strength = strengthA;

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function (damage) {
this.health -= damage  ;
  };


}


function Viking (nameA, healthA, strengthA) {
  Soldier.call(this, healthA, strengthA) ;
    this.name = nameA;
  }

    Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health > 0)
  {return this.name + " has received " + damage + " points of damage";}

  else
  {return this.name + " has died in act of combat";}
  };

  Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

var VikingOne=(100,150);
var VikingTwo=(100,150);
var VikingThree=(100, 150);
var VikingFour=(100,150);
var VikingFive=(100,150);
console.log( VikingOne);

   function Saxon (healthA, strengthA) {
     Soldier.call(this, healthA, strengthA);
   }
 Saxon.prototype = Object.create(Soldier.prototype);
 Saxon.prototype.constructor = Saxon;

  Saxon.prototype.receiveDamage = function (damage){
    this.health -= damage;


    if (this.health > 0)
    {return "A Saxon has received " + damage + " points of damage";}

    else
    { return "A Saxon has died in combat";}

  };
// var saxonOne =  (75, 100);
// $(saxonOne)function();
// $(this)
// var saxonTwo = $(this. saxon-box 2).addClass(on) (75, 100);
// var saxonThree =$(this).addClass(on) (75, 100);
// var saxonFour =$(this).addClass(on)(75, 100);
// var saxonFive =$(this).addClass(on)(75, 100);
// ....... war

// function War (){
// this.vikingArmy =[];
// this.saxonArmy= [];
// }
// War.prototype.vikingArmy = function vi () {
  // this.vikingArmy.push(Viking);
// };

function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);

};



War.prototype.vikingAttack = function () {

  var vikingQ = Math.floor(Math.random() *this.vikingArmy.length);

  var saxonQ = Math.floor(Math.random() *this.saxonArmy.length);

  var newViking = this.vikingArmy[vikingQ];

  var newSaxon = this.saxonArmy[saxonQ];

  var result = newSaxon.receiveDamage(newViking.attack());

  if (newSaxon.health<=0) {
    this.saxonArmy.splice(saxonQ, 1);
  }
  return result;
};

War.prototype.saxonAttack = function () {

  var vikingQ = Math.floor(Math.random() * this.vikingArmy.length);

  var saxonQ = Math.floor(Math.random() * this.saxonArmy.length);

  var newViking = this.vikingArmy[vikingQ];

  var newSaxon = this.saxonArmy[saxonQ];

  var result = newViking.receiveDamage(newSaxon.attack());

  if (newViking.health <= 0) {
    this.vikingArmy.splice(vikingQ, 1);
  }

  return result;
};


War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return'Vikings have won the war of the century!';
  }
  else if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  }
  else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
};
});
