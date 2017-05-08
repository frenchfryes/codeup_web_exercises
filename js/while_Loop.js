/**
 * Created by frenchfryes on 4/11/17.
 */
"use strict";

var conesInventory = Math.floor(Math.random() * 50) + 50;

var conesRequested;

var conesSold;

console.log("I have" + conesInventory +"ice cream cones in my stores.");

do {
    conesRequested = Math.floor(Math.random() *5) +1;
    if () {
        (conesInventory < conesRequested && conesInventory !== 0) {
            console.log("I cannot sell you " + conesRequested +". I only have " + conesInventory + "left.");
        } else {
            conesSold = conesRequested;
        }
    }
    while (conesInventory > 0);
    console.log("yay! I sold them all!")
}
