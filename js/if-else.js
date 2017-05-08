/**
 * Created by frenchfryes on 4/10/17.
 */
// var avg = [70,80,95].reduce((p,c,_,a) => p + c/a.length,0);
var avg = (70+80+95)/3;
    console.log(avg);

if (avg>80){
    message = "You're Awesome!"
} else  {
    message = "You need to practive more.";
} console.log(message)

var flipACoin = Math.floor(Math.random()*2);

console.log(flipACoin)

if (flipAcoin){
    console.log("Buy a car.");
} else {
    console.log("buy a house.");
}

var discountRate = .35;

var totalSpentDollars = null;

var discountBreakpointDollars = 200;

var cameronSpentDollars = 180;

var ryanSpentDollars = 250;

var georgeSpentDollars = 320;

var cameron = "Cameron";

var ryan = "Ryan";

var grorge = "George";

customer = "Cameron";
totalSpentDollars = cameronSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}

console.log(customer + " bought " + "$" + totalSpentDollars + "worth of products." + "Final payment: "
+ "$" + costDollars + ".");