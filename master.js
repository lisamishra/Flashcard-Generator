var fs = require('fs');
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


var firstPres = BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPres.front); 

console.log(firstPres.back); 

var firstPresCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresCloze.cloze); 

console.log(firstPresCloze.partial); 

console.log(firstPresCloze.fullText);

var brokenCloze = new ClozeCard("This won't do", "oops");