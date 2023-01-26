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
/*for (var i = 0; i < skillsList.length; i++) {
  skillsHTML += "<li>" + skillsList[i] + "</li>";
}
skills.innerHTML = skillsHTML;*/

// function - nume functie - parametru ( ii spun cv functiei)
// daca eu o intreb ceva poate sa imi raspunda cu ceva (return)
// apelare: numele functiei si daca se astepta sa ii spun ceva ii transmit (parametru)
// ca sa se excute functia: neaparat nume functie si paranteze + un parametru

function getInfo(name) {
  var msg = "Hello " + name + "," + " welcome!";
  return msg;
}

var info = getInfo("Andreea");

/*********** Curs 2*/

/* Work with each page separately */

/*function hidePages() {
  document.getElementById("education").style.display = "none";
  document.getElementById("experience").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function displayEducation() {
  hidePages();
  document.getElementById("education").style.display = "block";
}

function displayExperience() {
  hidePages();
  document.getElementById("experience").style.display = "block";
}

function displayHistory() {
  hidePages();
  document.getElementById("history").style.display = "block";
}*/

/* Work with multiple pages at a time using parameters, fewer lines of code, send args in html function*/

/*
  function hidePages() {
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("history").style.display = "none";
  }

  function displayPages(id) {
    hidePages();
    document.getElementById(id).style.display = "block";
  }
*/

/*************** Curs 3 */

/* Refacotor hide pages function, use args in this page */

function show(id) {
  // functie utilitara - ma ajuta in functia mama
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  // functie utilitara
  document.getElementById(id).style.display = "none";
}

/*function hidePages() {
  hide("education");
  hide("experience");
  hide("history");
}*/

/*function displayEducation() {
  hidePages();
  show("education");
}

function displayExperience() {
  hidePages();
  show("experience");
}

function displayHistory() {
  hidePages();
  show("history");
}*/

/* Use an array to store the pages in order to simplify functions */

var pages = ["education", "experience", "history"];

/*function h(id, i) {//parametrii din functie i-am declarat in () deoarece sunt folositi in console.warn, 
  //daca in console.warn se schimba ceva se schimba si in functia parinte
  console.warn("H", id, i); // pot da ce nume vreau la parametrii, va stii ce sunt deoarece asa e formata aceasta functie
}*/

/*function hidePages() {
  //pages.forEach(h); // mi se afiseaza pentru fiecare element din array H variabila = education/experience/history si indexul ei = 1/2/3
  pages.forEach(hide); // nu mai pun parametru la functie
}*/

/*function hidePages() {
  for ( var i=0; i < pages.length; i++ ) {
    document.getElementById(pages[i]).style.display = "none";
  }
}*/

// functiile hide si show au ramas din ex precedent

/*function hidePages() {
  // pages.forEach(function hide(id) {
  //   hide(id);
  // });
  //daca am o functie in foreach pot ignora numele functiei//anonymus function
  pages.forEach(function (id) {
    hide(id);
  });
}*/

function displayPage(id) {
  hidePages();
  show(id);
}

/* Refactor hidePaages in order tot not pe dependent on the id param */

function hidePages() {
  var allPages = document.querySelectorAll(".page"); //iterate through every element with class "page"
  allPages.forEach(function (sglPage) {
    hide(sglPage.id);
  });
}

/* Course 4 */

// Ascultam evenimentul de click
/*function initMenu() {
  //la body nu am nevoie sa zic getElementBy ceva sau querySelector
  console.warn("init menu"); // se apeleaza o singura data pentru ca am apelat-o mai jos

  document.body.addEventListener("click", function () {
    // al doilea param reprezinta cine asculta evenimentul de click
    console.warn("click"); //punem o consola ca sa aflam cand se apeleaza functia -> de fiecare data cand dau click pe body
  });
}

initMenu();*/

// Setam clickul pe un anumit element

/*function initMenu() {
  document.body.addEventListener("click", function (e) {
    //am adaugat un parametru event
    console.warn("click", e);// ne arata toate tipurile de evnimente si ne sugereaza care au fost folosite si care nu
    //ne arata si elementul html pe care am dat click care se numeste target
  });
}

initMenu();*/

// Afisez doar elementul html pe care s-a dat click

/*function initMenu() {
  document.getElementById("menu").addEventListener("click", function (e) {
    // in loc de body ma duc la cel mai apropiat parinte al tututot elementelor mele
    //console.warn("click", e.target); // afisam doar targetul obiectului adica elementul html pe care am dat click
    //console.warn("click", e.target.matches("a")); // ma anunta daca am dat sau nu click pe a
    if (e.target.matches("a")) {
      console.warn("click", e.target); //executam consola numai cand dau click pe a
    }
  });
}

initMenu();*/

// Afisez pagina in functie de id-ul pe care dam click
//data-page este element custom

function initMenu() {
  document.getElementById("menu").addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      //console.warn("click", e.target.innerText); // ne arata textul din tag
      var id = e.target.getAttribute("data-page"); //citesc atributul din data-page ( cel care ma intereseaza )
      // pentru elementele de tip data-* putem folosi si e.target.dataset.page
      console.warn("click", id, e.target);
      displayPage(id);
    }
  });
}

initMenu();
displayPage("education");

//var skills = ["HTML", "CSS", "JavaScript"];

// var skills = [
//   { name: "HTML", endorcements: 5 },
//   { name: "CSS", endorcements: 2 },
//   { name: "JavaScript", endorcements: 1 },
// ];

var skills = [];

var skillsEl = document.getElementById("skills-list");
skillsEl.innerHTML = skillsHTML;
skillsHTML = ""; //valoarea lui skillsHTML acum e nula, daca nu stabilesc alta valoare ea va ramane cu valoare ei pt totdeauna

/*for (var i = 0; i < skills.length; i++) {
  skillsHTML +=
    "<li>" + skills[i].name + " - " + skills[i].endorcements + "</li>";
}*/

/*skills.forEach(function (skill) {
  console.info(skill);
  skillsHTML += "<li>" + skill.name + " - " + skill.endorcements + "</li>";
});*/

//skillsEl.innerHTML = skillsHTML;

/*var s = skills.map(function (skill) {
  //functia map returneaza un array nou// functia map tranforma din ceva in altceva, primeste un skill si il transforma in
  //return "<li>" + skill.name + " - <span>" + skill.endorcements + "</span></li>";
  return `<li> ${skill.name} <span> - ${skill.endorcements} </span></li>`;
});
//console.warn("s", s);

skillsEl.innerHTML = s.join("");*/

/* Course 5 */

var skills = [];

/*var r1 = fetch("skills.json");
r1.then(function (raspuns) {
  var r2 = raspuns.json();
  console.warn("gata?", r2);
  r2.then(function (r3) {
    console.warn("json?", r3);
  });
});*/
console.warn("r1", r1); // primesc un promise// apare prima data promise-ul si apoi "gata"
//.then -> cu rezultatul dinainte de punct fac ceva cu urmatoarea functie

var r1 = fetch("skills.json");
r1.then(function (raspuns) {
  var r2 = raspuns.json();
  // console.warn("gata?", r2);
  r2.then(function (skills) {
    //console.warn("skills?", skills);
    displaySkills(skills);
  });
});
console.warn("r1", r1);

function displaySkills(skills) {
  var s = skills.map(function (skill) {
    return `<li> ${skill.name} <span> - ${skill.endorcements} </span></li>`;
  });
  skillsEl.innerHTML = s.join("");
}
