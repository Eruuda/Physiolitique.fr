// Liste des députés avec leur orientation (g ou d) :
const deputes = [
  { name: "député1", orientation: "d", image: "imgQ/266793d.jpg" },
  { name: "député2", orientation: "d", image: "imgQ/267561d.jpg" },
  { name: "député3", orientation: "d", image: "imgQ/267763d.jpg" },
  { name: "député4", orientation: "d", image: "imgQ/332228d.jpg" },
  { name: "député5", orientation: "g", image: "imgQ/335999g.jpg" },
  { name: "député6", orientation: "g", image: "imgQ/342415g.jpg" },
  { name: "député7", orientation: "d", image: "imgQ/408578d.jpg" },
  { name: "député8", orientation: "g", image: "imgQ/588884g.jpg" },
  { name: "député9", orientation: "d", image: "imgQ/606507d.jpg" },
  { name: "député10", orientation: "g", image: "imgQ/606793g.jpg" },
  { name: "député11", orientation: "g", image: "imgQ/610968g.jpg" },
  { name: "député12", orientation: "d", image: "imgQ/642695d.jpg" },
  { name: "député13", orientation: "g", image: "imgQ/642764g.jpg" },
  { name: "député14", orientation: "d", image: "imgQ/642847d.jpg" },
  { name: "député15", orientation: "d", image: "imgQ/642935d.jpg" },
  { name: "député16", orientation: "g", image: "imgQ/643143g.jpg" },
  { name: "député17", orientation: "d", image: "imgQ/687214d.jpg" },
  { name: "député18", orientation: "d", image: "imgQ/718884d.jpg" },
  { name: "député19", orientation: "d", image: "imgQ/719024d.jpg" },
  { name: "député20", orientation: "d", image: "imgQ/719218d.jpg" },
  { name: "député21", orientation: "d", image: "imgQ/719558d.jpg" },
  { name: "député22", orientation: "d", image: "imgQ/719968d.jpg" },
  { name: "député23", orientation: "d", image: "imgQ/720162d.jpg" },
  { name: "député24", orientation: "d", image: "imgQ/720256d.jpg" },
  { name: "député25", orientation: "d", image: "imgQ/720362d.jpg" },
  { name: "député26", orientation: "g", image: "imgQ/720430g.jpg" },
  { name: "député27", orientation: "d", image: "imgQ/720668d.jpg" },
  { name: "député28", orientation: "d", image: "imgQ/720822d.jpg" },
  { name: "député29", orientation: "d", image: "imgQ/721158d.jpg" },
  { name: "député30", orientation: "d", image: "imgQ/721410d.jpg" },
  { name: "député31", orientation: "d", image: "imgQ/721816d.jpg" },
  { name: "député32", orientation: "d", image: "imgQ/722190d.jpg" },
  { name: "député33", orientation: "d", image: "imgQ/774954d.jpg" },
  { name: "député34", orientation: "d", image: "imgQ/793158d.jpg" },
  { name: "député35", orientation: "d", image: "imgQ/793238d.jpg" },
  { name: "député36", orientation: "g", image: "imgQ/793262g.jpg" },
  { name: "député37", orientation: "d", image: "imgQ/793374d.jpg" },
  { name: "député38", orientation: "d", image: "imgQ/793432d.jpg" },
  { name: "député39", orientation: "g", image: "imgQ/793444g.jpg" },
  { name: "député40", orientation: "g", image: "imgQ/793772g.jpg" },
  { name: "député41", orientation: "g", image: "imgQ/793780g.jpg" },
  { name: "député42", orientation: "d", image: "imgQ/793844d.jpg" },
  { name: "député43", orientation: "d", image: "imgQ/793992d.jpg" },
  { name: "député44", orientation: "g", image: "imgQ/794094g.jpg" },
  { name: "député45", orientation: "g", image: "imgQ/794138g.jpg" },
  { name: "député46", orientation: "d", image: "imgQ/794278d.jpg" },
  { name: "député47", orientation: "d", image: "imgQ/794434d.jpg" },
  { name: "député48", orientation: "d", image: "imgQ/794562d.jpg" },
  { name: "député49", orientation: "g", image: "imgQ/794938g.jpg" },
  { name: "député50", orientation: "g", image: "imgQ/795084g.jpg" },
  { name: "député51", orientation: "d", image: "imgQ/795144d.jpg" },
  { name: "député52", orientation: "g", image: "imgQ/795228g.jpg" },
  { name: "député53", orientation: "d", image: "imgQ/795278d.jpg" },
  { name: "député54", orientation: "g", image: "imgQ/795362g.jpg" },
  { name: "député55", orientation: "g", image: "imgQ/795454g.jpg" },
  { name: "député56", orientation: "g", image: "imgQ/795588g.jpg" },
  { name: "député57", orientation: "g", image: "imgQ/795616g.jpg" },
  { name: "député58", orientation: "d", image: "imgQ/795950d.jpg" },
  { name: "député59", orientation: "d", image: "imgQ/796042d.jpg" },
  { name: "député60", orientation: "g", image: "imgQ/796106g.jpg" },
  { name: "député61", orientation: "d", image: "imgQ/796118d.jpg" },
  { name: "député62", orientation: "d", image: "imgQ/805166d.jpg" },
  { name: "député63", orientation: "g", image: "imgQ/840665g.jpg" },
  { name: "député64", orientation: "g", image: "imgQ/840829g.jpg" },
  { name: "député65", orientation: "d", image: "imgQ/840889d.jpg" },
  { name: "député66", orientation: "g", image: "imgQ/840997g.jpg" },
  { name: "député67", orientation: "d", image: "imgQ/841067d.jpg" },
  { name: "député68", orientation: "d", image: "imgQ/841207d.jpg" },
  { name: "député69", orientation: "g", image: "imgQ/841315g.jpg" },
  { name: "député70", orientation: "d", image: "imgQ/841487d.jpg" },
  { name: "député71", orientation: "d", image: "imgQ/841495d.jpg" },
  { name: "député72", orientation: "g", image: "imgQ/841507g.jpg" },
  { name: "député73", orientation: "d", image: "imgQ/841645d.jpg" },
  { name: "député74", orientation: "d", image: "imgQ/841657g.jpg" },
  { name: "député75", orientation: "g", image: "imgQ/841701g.jpg" },
  { name: "député76", orientation: "g", image: "imgQ/841885g.jpg" },
  { name: "député77", orientation: "d", image: "imgQ/842001d.jpg" },
  { name: "député78", orientation: "g", image: "imgQ/842105g.jpg" },
  { name: "député79", orientation: "g", image: "imgQ/842211g.jpg" },
  { name: "député80", orientation: "d", image: "imgQ/842279d.jpg" },
];

let currentIndex = 0;
let score = 0;

// Fonction pour mélanger la liste
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Mélanger la liste au chargement de la page
shuffleArray(deputes);

// Fonction pour charger une nouvelle image
function loadNewImage() {
  const politician = deputes[currentIndex];
  document.getElementById("politiPics").src = politician.image;
}

// Fonction pour vérifier la réponse
function checkAnswer(orientation) {
  const politician = deputes[currentIndex];
  if (politician.orientation === orientation) {
    score++;
    document.getElementById("correctSound").play();
  } else {
    score = 0;
    document.getElementById("inccorrectSound").play();
  }
  document.getElementById("scorePoint").innerText = `${score}`;
  currentIndex = (currentIndex + 1) % deputes.length;
  loadNewImage();
}

// Écouteurs d'événements pour les boutons
document
  .querySelector(".leftB")
  .addEventListener("click", () => checkAnswer("g"));
document
  .querySelector(".rightB")
  .addEventListener("click", () => checkAnswer("d"));

// Charger la première image au démarrage
loadNewImage();

// Sélectionner les boutons
const leftButton = document.querySelector(".leftB");
const rightButton = document.querySelector(".rightB");

// Variable pour stocker le timeout
let hoverTimeoutL;
let hoverTimeoutR;

// Fonction pour jouer le son au survol
function playHoverSoundL() {
  const hoverSound = document.getElementById("hoverSoundL");
  hoverSound.currentTime = 1; // Réinitialiser le son pour qu'il rejoue à chaque survol
  hoverSound.play();
}

function stopHoverSoundL() {
  const hoverSound = document.getElementById("hoverSoundL");
  hoverSound.pause(); // Arrêter le son
  hoverSound.currentTime = 0; // Réinitialiser le son
  clearTimeout(hoverTimeoutL); // Annuler le timeout si la souris quitte le bouton
}

function playHoverSoundR() {
  const hoverSound = document.getElementById("hoverSoundR");
  hoverSound.currentTime = 1; // Réinitialiser le son pour qu'il rejoue à chaque survol
  hoverSound.play();
}

function stopHoverSoundR() {
  const hoverSound = document.getElementById("hoverSoundR");
  hoverSound.pause(); // Arrêter le son
  hoverSound.currentTime = 0; // Réinitialiser le son
  clearTimeout(hoverTimeoutR); // Annuler le timeout si la souris quitte le bouton
}

// Fonction pour démarrer le délai avant de jouer le son
function startHoverSoundDelayL() {
  hoverTimeoutL = setTimeout(playHoverSoundL, 3000); // Délai de 5000 ms
}

function startHoverSoundDelayR() {
  hoverTimeoutR = setTimeout(playHoverSoundR, 3000); // Délai de 5000 ms
}

// Ajouter des écouteurs d'événements pour le survol
leftButton.addEventListener("mouseover", startHoverSoundDelayL);
leftButton.addEventListener("mouseout", stopHoverSoundL);
rightButton.addEventListener("mouseover", startHoverSoundDelayR);
rightButton.addEventListener("mouseout", stopHoverSoundR);
