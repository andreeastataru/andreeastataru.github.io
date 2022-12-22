var skillsEl = document.getElementById("skills-list");

//skillsEl.style.display = "none";
skillsEl.style.color = "#314c4a";
skillsEl.style.fontSize = "25px";

//document.getElementById("skills-list").style.display = "none";

// var oldText = skillsEl.innerHTML;
// skillsEl.innerHTML = oldText + "<li>JS</li>";
//skillsEl.innerHTML = skillsEl.innerHTML + "<li>JS</li>";

// skillsEl.innerHTML += "<li>HTML</li>";
// skillsEl.innerHTML += "<li>CSS</li>";
// skillsEl.innerHTML += "<li>JS</li>";

var skills = ["HTML", "CSS", "JS", "Drive"];

skills[0]; // html

// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";

var skillsHTML = "";

// skillsHTML += "<li>" + skills[0] + "</li>";
// skillsHTML += "<li>" + skills[1] + "</li>";
// skillsHTML += "<li>" + skills[2] + "</li>";
//console.info(skillsHTML);
//skillsEl.innerHTML = skillsHTML;

// var i = 0;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// skillsEl.innerHTML = skillsHTML;

// var i = 0;
// skillsHTML += "<li>" + (i + 1) + ")" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + i + 1 + ")" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// skillsEl.innerHTML = skillsHTML;// o data executat nu se mai executa decat daca il rescriu

// for (var i = 0; i < 4; ) {
//   skillsHTML += "<li>" + skills[i] + "</li>";
//   i++;
// }
// skillsEl.innerHTML = skillsHTML;

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}
skillsEl.innerHTML = skillsHTML;

// function - nume functie - parametru ( ii spun cv functiei)
// daca eu o intreb ceva poate sa imi raspunda cu ceva (return)
// apelare: numele functiei si daca se astepta sa ii spun ceva ii transmit (parametru)
// ca sa se excute functia: neaparat nume functie si paranteze + un parametru

function getInfo(name) {
  var msg = "Hello " + name + "," + " welcome!";
  return msg;
}

var info = getInfo("Andreea");
