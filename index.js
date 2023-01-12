// accesare element dupa id // punem intr-o variabila ca sa fie stocat rezultatul in ceva si sa nu se piarda
var skills = document.getElementById("skills-list");

// adaugare css pe variabila care contine elementul cu id-ul skills-list
/*skills.style.display = "none";
skills.style.color = "#314c4a";
skills.style.fontSize = "24px";*/

// adaugare css fara variabila
//document.getElementById("skills-list").style.display = "none";

//schimbare continut cu ajutorul unei variabile noi in care salvam informatiile din variabila skills plus comanda
// de modificare text pentru a nu o altera pe cea veche
var newText = skills.innerHTML;
//skills.innerHTML = newText + "<li>JS</li>"; // !!!! de ce aici nu merge cu variabila inainte de egal

//exemplu fara variabila noua cu adaugare de text nou
// skills.innerHTML = skills.innerHTML + "<li>JS</li>";

//adaugare toate informatiile din lista fara a mai exista ceva in html
/*skills.innerHTML += "<li>Html</li>";
skills.innerHTML += "<li>CSS</li>";
skills.innerHTML += "<li>JavaScript</li>";*/

// creare array cu elementele listei

var skillsList = ["Html", "CSS", "JavaScript"];

//acesare primul element din lista
skillsList[0];

//adaugare elemente in lista din vector
/*skills.innerHTML += "<li>" + skillsList[0] + "</li>";
skills.innerHTML += "<li>" + skillsList[1] + "</li>";
skills.innerHTML += "<li>" + skillsList[2] + "</li>";*/

// creare variabila pentru a retine tote 3 li-urile fara a face ceva cu ele ca apoi sa le adaugam in elementul skills
var skillsHTML = "";
/*skillsHTML += "<li>" + skillsList[0] + "</li>";
skillsHTML += "<li>" + skillsList[1] + "</li>";
skillsHTML += "<li>" + skillsList[2] + "</li>";
console.info(skillsHTML);
skills.innerHTML = skillsHTML;*/

// declaram o variabila i care incepe de la 0 si o incrementam dupa fiecaree element pana parcurgem tot vector
var i = 0;
/*skills.innerHTML += "<li>" + skillsList[i] + "</li>";
i++;
skills.innerHTML += "<li>" + skillsList[i] + "</li>";
i++;
skills.innerHTML += "<li>" + skillsList[i] + "</li>";*/ // o data executat nu se mai executa decat daca il rescriu

//adaugare diferite chestii la elementele din vector
/*skills.innerHTML += "<li>" + (i + 1) + ")" + skillsList[i] + "</li>";
i++;
skills.innerHTML += "<li>" + i + 1 + ")" + skillsList[i] + "</li>";*/

// folosim for pentru a adauga elementele din vector in lista
/*for (var i = 0; i < 3; ) {
  skillsHTML += "<li>" + skillsList[i] + "</li>";
  i++;
}
skills.innerHTML = skillsHTML;*/

//for cu length in loc de nr fix
for (var i = 0; i < skillsList.length; i++) {
  skillsHTML += "<li>" + skillsList[i] + "</li>";
}
skills.innerHTML = skillsHTML;

// function - nume functie - parametru ( ii spun cv functiei)
// daca eu o intreb ceva poate sa imi raspunda cu ceva (return)
// apelare: numele functiei si daca se astepta sa ii spun ceva ii transmit (parametru)
// ca sa se excute functia: neaparat nume functie si paranteze + un parametru

function getInfo(name) {
  var msg = "Hello " + name + "," + " welcome!";
  return msg;
}

var info = getInfo("Andreea");

/*************** Curs 2 si 3 */

var pageIds = ["skills", "lang", "experience"];

// function hidePage(id) {
//   hide(id);
// }

function hideAllPages() {
  //pageIds.forEach(hidePage);
  pageIds.forEach(function (pageId) {
    //anonymus function - nu are nume
    hide(pageId);
  });
}

function hide(id) {
  //functie utlilitara
  document.getElementById(id).style.display = "none";
}

function showElementById(id) {
  document.getElementById(id).style.display = "block";
}

function displaySkills() {
  hideAllPages();
  showElementById("skills");
}

function displayExperience() {
  hideAllPages();
  showElementById("experience");
}

function displayLang() {
  hideAllPages();
  showElementById("lang");
}
