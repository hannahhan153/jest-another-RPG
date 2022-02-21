// import the Potion() constructor
const Potion = require('../lib/Potion');
const Character = require('./Character');

// player constructor function
class Player extends Character {
    constructor(name = '') {
        // call parent constructor here:
        super(name);
        
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
        // push array method that adds an item to end of the array
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];
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
    }
}

module.exports = Player;
    

    
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


 