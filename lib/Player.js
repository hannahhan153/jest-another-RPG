// import the Potion() constructor
const Potion = require('../lib/Potion');
// player constructor function
function Player(name= '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is ${this.health}!`
};

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
    // push array method that adds an item to end of the array
};

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
    // splice method removes items from an array and returns removed items as a new array
    // original inventory array has a single Potion removed at specified index value and put into a new "removed items" array
    // potion at index[0] of this "removed items" array is saved in a potion variable

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};
    // // returns an object with various player properties
    // // getStats() method on every Player object that is created
    // this.getStates = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // // returns the inventory array or false if empty
    // // getInventory() method on every Player object that is created
    // this.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };


module.exports = Player;