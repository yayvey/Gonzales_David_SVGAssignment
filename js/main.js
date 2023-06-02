console.log("JS file connected");

const billyCan = document.querySelector("#billy-can");
const logoNoWords = document.querySelector("#logo-no-words");
const bnwGlass = document.querySelector("#bnw-glass");
const domeTent = document.querySelector("#dome-tent");
const hiker = document.querySelector("#hiker");
const hopAndBarley = document.querySelector("#hop-and-barley");

billyCan.addEventListener("click", e => {
    console.log("You have clicked the Billy Can!")
}) 

logoNoWords.addEventListener("click", e => {
    console.log("You have clicked the logo!")
}) 


bnwGlass.addEventListener("click", e => {
    console.log("You have clicked the glass of beer!")
}) 

domeTent.addEventListener("click", e => {
    console.log("You have clicked the dome tent!")
}) 

hiker.addEventListener("click", e => {
    console.log("You have clicked the hiker!")
}) 

hopAndBarley.addEventListener("click", e => {
    console.log("You have clicked the hop and barley!")
}) 
