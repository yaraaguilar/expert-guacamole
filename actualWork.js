const body = document.body;
const div =  document.querySelector("div");


const newDiv = document.createElement("div");
const newContent = document.createTextNode("Song 1: Fireflies, by Owl City");
newDiv.append(newContent);
const finalElement = document.getElementById("final");
document.body.insertBefore(newDiv, finalElement);

const newDiv1 = document.createElement("div");
const newContent1 = document.createTextNode("Song 2: We are Young, by fun. ft. Janelle Monae");
newDiv1.append(newContent1);
document.body.insertBefore(newDiv1, finalElement);

const newDiv2 = document.createElement("div");
const newContent2 = document.createTextNode("Song 3: Somebody That I Used to Know, by Gotye ft. Kimbra");
newDiv2.append(newContent2);
document.body.insertBefore(newDiv2, finalElement);

const newDiv3 = document.createElement("div");
const newContent3 = document.createTextNode("Song 4: Can't Hold Us, by Macklemore & Ryan Lewis ft. Ray Dalton");
newDiv3.append(newContent3);
document.body.insertBefore(newDiv3, finalElement);

const newDiv4 = document.createElement("div");
const newContent4 = document.createTextNode("Song 5: Pompeii, by Bastille");
newDiv4.append(newContent4);
document.body.insertBefore(newDiv4, finalElement);

const newDiv5 = document.createElement("div");
const newContent5 = document.createTextNode("Song 6: Royals, by Lorde");
newDiv5.append(newContent5);
document.body.insertBefore(newDiv5, finalElement);

const newDiv6 = document.createElement("div");
const newContent6 = document.createTextNode("Song 7: Rude, by MAGIC!");
newDiv6.append(newContent6);
document.body.insertBefore(newDiv6, finalElement);

const newDiv7 = document.createElement("div");
const newContent7 = document.createTextNode("Song 8: Can't Feel My Face, by The Weeknd");
newDiv7.append(newContent7);
document.body.insertBefore(newDiv7, finalElement);

const newDiv8 = document.createElement("div");
const newContent8 = document.createTextNode("Song 9: still feel. , by half-alive");
newDiv8.append(newContent8);
document.body.insertBefore(newDiv8, finalElement);

// honestly, I just decided to add this to show how you delete an element that was added earlier
const newWrongDiv = document.createElement("div");
const newWrongYear = document.createTextNode("Song 100000: Killer Queen, by Queen");
newWrongDiv.append(newWrongYear);
document.body.insertBefore(newWrongDiv, finalElement);

const newDiv9 = document.createElement("div");
const newContent9 = document.createTextNode("Song 10: Sucker, by Jonas Brothers");
newDiv9.append(newContent9);
document.body.insertBefore(newDiv9, finalElement);

// here is my attempt at deleting the song from the 70s 
document.body.removeChild(newWrongDiv);

document.getElementById("linkToPlaylist").onclick = () =>
{
    alert("Warning: You're going to leave the website!");
}

document.getElementById("Credits").onclick = () =>
{
    alert("Warning: You're going to leave the website!");
}

document.getElementById("final").onclick = () =>
{
    alert("oh, hi there! you must have clicked on me by accident, I do not send you to any link!");
}

document.getElementById("greetings").onclick = () =>
{
    const userInput = prompt("Hey, what's your name?");
    alert("Well, " + userInput + ", remember, even if the past has great moments, you must never linger for too long with it, for the past cannot be changed. For now, " + userInput + ", look forward, for the future awaits. You are amazing, so keep up the spectacular effort! Lots of love, the developer. <3");
}