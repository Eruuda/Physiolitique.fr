let currentIndex = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

const deputes = [
  { name: "Politicien1", image: "imgQ/l (1).jpg" },
  { name: "Politicien2", image: "imgQ/l (2).jpg" },
  { name: "Politicien3", image: "imgQ/l (3).jpg" },
  { name: "Politicien4", image: "imgQ/l (4).jpg" },
  { name: "Politicien5", image: "imgQ/l (5).jpg" },
  { name: "Politicien6", image: "imgQ/l (6).jpg" },
  { name: "Politicien7", image: "imgQ/l (7).jpg" },
  { name: "Politicien8", image: "imgQ/l (8).jpg" },
  { name: "Politicien9", image: "imgQ/l (9).jpg" },
  { name: "Politicien10", image: "imgQ/l (10).jpg" },
  { name: "Politicien11", image: "imgQ/l (11).jpg" },
  { name: "Politicien12", image: "imgQ/l (12).jpg" },
  { name: "Politicien13", image: "imgQ/l (13).jpg" },
  { name: "Politicien14", image: "imgQ/l (14).jpg" },
  { name: "Politicien15", image: "imgQ/l (15).jpg" },
  { name: "Politicien16", image: "imgQ/l (16).jpg" },
  { name: "Politicien17", image: "imgQ/l (17).jpg" },
  { name: "Politicien18", image: "imgQ/l (18).jpg" },
  { name: "Politicien19", image: "imgQ/l (19).jpg" },
  { name: "Politicien20", image: "imgQ/l (20).jpg" },
  { name: "Politicien21", image: "imgQ/l (21).jpg" },
  { name: "Politicien22", image: "imgQ/l (22).jpg" },
  { name: "Politicien23", image: "imgQ/l (23).jpg" },
  { name: "Politicien24", image: "imgQ/l (24).jpg" },
  { name: "Politicien25", image: "imgQ/l (25).jpg" },
  { name: "Politicien26", image: "imgQ/l (26).jpg" },
  { name: "Politicien27", image: "imgQ/l (27).jpg" },
  { name: "Politicien28", image: "imgQ/l (28).jpg" },
  { name: "Politicien29", image: "imgQ/l (29).jpg" },
  { name: "Politicien30", image: "imgQ/l (30).jpg" },
  { name: "Politicien31", image: "imgQ/l (31).jpg" },
  { name: "Politicien32", image: "imgQ/l (32).jpg" },
  { name: "Politicien33", image: "imgQ/l (33).jpg" },
  { name: "Politicien34", image: "imgQ/l (34).jpg" },
  { name: "Politicien35", image: "imgQ/l (35).jpg" },
  { name: "Politicien36", image: "imgQ/l (36).jpg" },
  { name: "Politicien37", image: "imgQ/l (37).jpg" },
  { name: "Politicien38", image: "imgQ/l (38).jpg" },
  { name: "Politicien39", image: "imgQ/l (39).jpg" },
  { name: "Politicien40", image: "imgQ/l (40).jpg" },
  { name: "Politicien41", image: "imgQ/l (41).jpg" },
  { name: "Politicien42", image: "imgQ/l (42).jpg" },
  { name: "Politicien43", image: "imgQ/l (43).jpg" },
  { name: "Politicien44", image: "imgQ/l (44).jpg" },
  { name: "Politicien45", image: "imgQ/l (45).jpg" },
  { name: "Politicien46", image: "imgQ/l (46).jpg" },
  { name: "Politicien47", image: "imgQ/l (47).jpg" },
  { name: "Politicien48", image: "imgQ/l (48).jpg" },
  { name: "Politicien49", image: "imgQ/l (49).jpg" },
  { name: "Politicien50", image: "imgQ/l (50).jpg" },
  { name: "Politicien51", image: "imgQ/l (51).jpg" },
  { name: "Politicien52", image: "imgQ/l (52).jpg" },
  { name: "Politicien53", image: "imgQ/l (53).jpg" },
  { name: "Politicien54", image: "imgQ/l (54).jpg" },
  { name: "Politicien55", image: "imgQ/l (55).jpg" },
  { name: "Politicien56", image: "imgQ/l (56).jpg" },
  { name: "Politicien57", image: "imgQ/l (57).jpg" },
  { name: "Politicien58", image: "imgQ/l (58).jpg" },
  { name: "Politicien59", image: "imgQ/l (59).jpg" },
  { name: "Politicien60", image: "imgQ/l (60).jpg" },
  { name: "Politicien61", image: "imgQ/r (1).jpg" },
  { name: "Politicien62", image: "imgQ/r (2).jpg" },
  { name: "Politicien63", image: "imgQ/r (3).jpg" },
  { name: "Politicien64", image: "imgQ/r (4).jpg" },
  { name: "Politicien65", image: "imgQ/r (5).jpg" },
  { name: "Politicien66", image: "imgQ/r (6).jpg" },
  { name: "Politicien67", image: "imgQ/r (7).jpg" },
  { name: "Politicien68", image: "imgQ/r (8).jpg" },
  { name: "Politicien69", image: "imgQ/r (9).jpg" },
  { name: "Politicien70", image: "imgQ/r (10).jpg" },
  { name: "Politicien71", image: "imgQ/r (11).jpg" },
  { name: "Politicien72", image: "imgQ/r (12).jpg" },
  { name: "Politicien73", image: "imgQ/r (13).jpg" },
  { name: "Politicien74", image: "imgQ/r (14).jpg" },
  { name: "Politicien75", image: "imgQ/r (15).jpg" },
  { name: "Politicien76", image: "imgQ/r (16).jpg" },
  { name: "Politicien77", image: "imgQ/r (17).jpg" },
  { name: "Politicien78", image: "imgQ/r (18).jpg" },
  { name: "Politicien79", image: "imgQ/r (19).jpg" },
  { name: "Politicien80", image: "imgQ/r (20).jpg" },
  { name: "Politicien81", image: "imgQ/r (21).jpg" },
  { name: "Politicien82", image: "imgQ/r (22).jpg" },
  { name: "Politicien83", image: "imgQ/r (23).jpg" },
  { name: "Politicien84", image: "imgQ/r (24).jpg" },
  { name: "Politicien85", image: "imgQ/r (25).jpg" },
  { name: "Politicien86", image: "imgQ/r (26).jpg" },
  { name: "Politicien87", image: "imgQ/r (27).jpg" },
  { name: "Politicien88", image: "imgQ/r (28).jpg" },
  { name: "Politicien89", image: "imgQ/r (29).jpg" },
  { name: "Politicien90", image: "imgQ/r (30).jpg" },
  { name: "Politicien91", image: "imgQ/r (31).jpg" },
  { name: "Politicien92", image: "imgQ/r (32).jpg" },
  { name: "Politicien93", image: "imgQ/r (33).jpg" },
  { name: "Politicien94", image: "imgQ/r (34).jpg" },
  { name: "Politicien95", image: "imgQ/r (35).jpg" },
  { name: "Politicien96", image: "imgQ/r (36).jpg" },
  { name: "Politicien97", image: "imgQ/r (37).jpg" },
  { name: "Politicien98", image: "imgQ/r (38).jpg" },
  { name: "Politicien99", image: "imgQ/r (39).jpg" },
  { name: "Politicien100", image: "imgQ/r (40).jpg" },
  { name: "Politicien101", image: "imgQ/r (41).jpg" },
  { name: "Politicien102", image: "imgQ/r (42).jpg" },
  { name: "Politicien103", image: "imgQ/r (43).jpg" },
  { name: "Politicien104", image: "imgQ/r (44).jpg" },
  { name: "Politicien105", image: "imgQ/r (45).jpg" },
  { name: "Politicien106", image: "imgQ/r (46).jpg" },
  { name: "Politicien107", image: "imgQ/r (47).jpg" },
  { name: "Politicien108", image: "imgQ/r (48).jpg" },
  { name: "Politicien109", image: "imgQ/r (49).jpg" },
  { name: "Politicien110", image: "imgQ/r (50).jpg" },
  { name: "Politicien111", image: "imgQ/r (51).jpg" },
  { name: "Politicien112", image: "imgQ/r (52).jpg" },
  { name: "Politicien113", image: "imgQ/r (53).jpg" },
  { name: "Politicien114", image: "imgQ/r (54).jpg" },
  { name: "Politicien115", image: "imgQ/r (55).jpg" },
  { name: "Politicien116", image: "imgQ/r (56).jpg" },
  { name: "Politicien117", image: "imgQ/r (57).jpg" },
  { name: "Politicien118", image: "imgQ/r (58).jpg" },
  { name: "Politicien119", image: "imgQ/r (59).jpg" },
  { name: "Politicien120", image: "imgQ/r (60).jpg" }
];


// Fonction pour déterminer l'orientation en fonction du nom du fichier
function determineOrientation(imageName) {
  if (imageName.includes('l')) {
      return "l";
  } else if (imageName.includes('r')) {
      return "r";
  } else {
      return "inconnu"; // Ou une valeur par défaut si aucun indicateur n'est trouvé
  }
}

// Ajouter l'orientation à chaque politicien
deputes.forEach(politician => {
  politician.orientation = determineOrientation(politician.image);
});

// Afficher le meilleur score :
  document.getElementById("highScore").innerText = `${highScore}`;

// Mélanger la liste des députés après une réponse :
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Mélanger la liste des députés au chargement de la page :
  shuffleArray(deputes);

// Charger une image dans la liste des députés :
function loadNewImage() {
  const politician = deputes[currentIndex];
  document.getElementById("politiPics").src = politician.image;
}

// Vérifier si la réponse donnée est correcte :
  function checkAnswer(orientation) {
    const politician = deputes[currentIndex];
    if (politician.orientation === orientation) {
      score++;
      document.getElementById("correctSound").play();
 } 
    else {
      score = 0;
      document.getElementById("inccorrectSound").play();
 }
      document.getElementById("scorePoint").innerText = `${score}`;

  // Mettre à jour le meilleur score :
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      document.getElementById("highScore").innerText = `${highScore}`;
 }

  currentIndex = (currentIndex + 1) % deputes.length;
    loadNewImage();
 }

// Boutons
  document
    .querySelector(".leftB")
    .addEventListener("click", () => checkAnswer("l"));
  document
    .querySelector(".rightB")
    .addEventListener("click", () => checkAnswer("r"));


// Charger la première image au démarrage
  loadNewImage();

// Sélectionner les boutons
  const leftButton = document.querySelector(".leftB");
  const rightButton = document.querySelector(".rightB");

// Sons :
  const correctSound = document.getElementById('correctSound');
  const inccorrectSound = document.getElementById('inccorrectSound');

// Définir le volume des sons :
  correctSound.volume = 0.1;
  inccorrectSound.volume = 0.1;