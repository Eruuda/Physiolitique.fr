// Liste des politiciens avec leur orientation (g ou d)
    const politicians = [
        { name: "Politicien1", orientation: "d", image: "imgQ/266793d.jpg" },
        { name: "Politicien2", orientation: "d", image: "imgQ/267561d.jpg" },
        { name: "Politicien3", orientation: "d", image: "imgQ/267763d.jpg" },
        { name: "Politicien4", orientation: "d", image: "imgQ/332228d.jpg" },
        { name: "Politicien5", orientation: "g", image: "imgQ/335999g.jpg" },
        { name: "Politicien6", orientation: "g", image: "imgQ/342415g.jpg" },
        { name: "Politicien7", orientation: "d", image: "imgQ/408578d.jpg" },
        { name: "Politicien8", orientation: "g", image: "imgQ/588884g.jpg" },
        { name: "Politicien9", orientation: "d", image: "imgQ/606507d.jpg" },
        { name: "Politicien10", orientation: "g", image: "imgQ/606793g.jpg" },
        { name: "Politicien11", orientation: "g", image: "imgQ/610968g.jpg" },
        { name: "Politicien12", orientation: "d", image: "imgQ/642695d.jpg" },
        { name: "Politicien13", orientation: "g", image: "imgQ/642764g.jpg" },
        { name: "Politicien14", orientation: "d", image: "imgQ/642847d.jpg" },
        { name: "Politicien15", orientation: "d", image: "imgQ/642935d.jpg" },
        { name: "Politicien16", orientation: "g", image: "imgQ/643143g.jpg" },
        { name: "Politicien17", orientation: "d", image: "imgQ/687214d.jpg" },
        { name: "Politicien18", orientation: "d", image: "imgQ/718884d.jpg" },
        { name: "Politicien19", orientation: "d", image: "imgQ/719024d.jpg" },
        { name: "Politicien20", orientation: "d", image: "imgQ/719218d.jpg" },
        { name: "Politicien21", orientation: "d", image: "imgQ/719558d.jpg" },
        { name: "Politicien22", orientation: "d", image: "imgQ/719968d.jpg" },
        { name: "Politicien23", orientation: "d", image: "imgQ/720162d.jpg" },
        { name: "Politicien24", orientation: "d", image: "imgQ/720256d.jpg" },
        { name: "Politicien25", orientation: "d", image: "imgQ/720362d.jpg" },
        { name: "Politicien26", orientation: "g", image: "imgQ/720430g.jpg" },
        { name: "Politicien27", orientation: "d", image: "imgQ/720668d.jpg" },
        { name: "Politicien28", orientation: "d", image: "imgQ/720822d.jpg" },
        { name: "Politicien29", orientation: "d", image: "imgQ/721158d.jpg" },
        { name: "Politicien30", orientation: "d", image: "imgQ/721410d.jpg" },
        { name: "Politicien31", orientation: "d", image: "imgQ/721816d.jpg" },
        { name: "Politicien32", orientation: "d", image: "imgQ/722190d.jpg" },
        { name: "Politicien33", orientation: "d", image: "imgQ/774954d.jpg" },
        { name: "Politicien34", orientation: "d", image: "imgQ/793158d.jpg" },
        { name: "Politicien35", orientation: "d", image: "imgQ/793238d.jpg" },
        { name: "Politicien36", orientation: "g", image: "imgQ/793262g.jpg" },
        { name: "Politicien37", orientation: "d", image: "imgQ/793374d.jpg" },
        { name: "Politicien38", orientation: "d", image: "imgQ/793432d.jpg" },
        { name: "Politicien39", orientation: "g", image: "imgQ/793444g.jpg" },
        { name: "Politicien40", orientation: "g", image: "imgQ/793772g.jpg" },
        { name: "Politicien41", orientation: "g", image: "imgQ/793780g.jpg" },
        { name: "Politicien42", orientation: "d", image: "imgQ/793844d.jpg" },
        { name: "Politicien43", orientation: "d", image: "imgQ/793992d.jpg" },
        { name: "Politicien44", orientation: "g", image: "imgQ/794094g.jpg" },
        { name: "Politicien45", orientation: "g", image: "imgQ/794138g.jpg" },
        { name: "Politicien46", orientation: "d", image: "imgQ/794278d.jpg" },
        { name: "Politicien47", orientation: "d", image: "imgQ/794434d.jpg" },
        { name: "Politicien48", orientation: "d", image: "imgQ/794562d.jpg" },
        { name: "Politicien49", orientation: "g", image: "imgQ/794938g.jpg" },
        { name: "Politicien50", orientation: "g", image: "imgQ/795084g.jpg" },
        { name: "Politicien51", orientation: "d", image: "imgQ/795144d.jpg" },
        { name: "Politicien52", orientation: "g", image: "imgQ/795228g.jpg" },
        { name: "Politicien53", orientation: "d", image: "imgQ/795278d.jpg" },
        { name: "Politicien54", orientation: "g", image: "imgQ/795362g.jpg" },
        { name: "Politicien55", orientation: "g", image: "imgQ/795454g.jpg" },
        { name: "Politicien56", orientation: "g", image: "imgQ/795588g.jpg" },
        { name: "Politicien57", orientation: "g", image: "imgQ/795616g.jpg" },
        { name: "Politicien58", orientation: "d", image: "imgQ/795950d.jpg" },
        { name: "Politicien59", orientation: "d", image: "imgQ/796042d.jpg" },
        { name: "Politicien60", orientation: "g", image: "imgQ/796106g.jpg" },
        { name: "Politicien61", orientation: "d", image: "imgQ/796118d.jpg" },
        { name: "Politicien62", orientation: "d", image: "imgQ/805166d.jpg" },
        { name: "Politicien63", orientation: "g", image: "imgQ/840665g.jpg" },
        { name: "Politicien64", orientation: "g", image: "imgQ/840829g.jpg" },
        { name: "Politicien65", orientation: "d", image: "imgQ/840889d.jpg" },
        { name: "Politicien66", orientation: "g", image: "imgQ/840997g.jpg" },
        { name: "Politicien67", orientation: "d", image: "imgQ/841067d.jpg" },
        { name: "Politicien68", orientation: "d", image: "imgQ/841207d.jpg" },
        { name: "Politicien69", orientation: "g", image: "imgQ/841315g.jpg" },
        { name: "Politicien70", orientation: "d", image: "imgQ/841487d.jpg" },
        { name: "Politicien71", orientation: "d", image: "imgQ/841495d.jpg" },
        { name: "Politicien72", orientation: "g", image: "imgQ/841507g.jpg" },
        { name: "Politicien73", orientation: "d", image: "imgQ/841645d.jpg" },
        { name: "Politicien74", orientation: "d", image: "imgQ/841657g.jpg" },
        { name: "Politicien75", orientation: "g", image: "imgQ/841701g.jpg" },
        { name: "Politicien76", orientation: "g", image: "imgQ/841885g.jpg" },
        { name: "Politicien77", orientation: "d", image: "imgQ/842001d.jpg" },
        { name: "Politicien78", orientation: "g", image: "imgQ/842105g.jpg" },
        { name: "Politicien79", orientation: "g", image: "imgQ/842211g.jpg" },
        { name: "Politicien80", orientation: "d", image: "imgQ/842279d.jpg" }
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
shuffleArray(politicians);


// Fonction pour charger une nouvelle image
function loadNewImage() {
    const politician = politicians[currentIndex];
    document.getElementById('politiPics').src = politician.image;
}
  
  // Fonction pour vérifier la réponse
  function checkAnswer(orientation) {
    const politician = politicians[currentIndex];
    if (politician.orientation === orientation) {
      score++;
      document.getElementById('correctSound').play();
    } else {
      score = 0;
      document.getElementById('inccorrectSound').play();
    }
    document.getElementById('scorePoint').innerText = `${score}`;
    currentIndex = (currentIndex + 1) % politicians.length;
    loadNewImage();
  }
  
  // Écouteurs d'événements pour les boutons
  document.querySelector('.leftB').addEventListener('click', () => checkAnswer('g'));
  document.querySelector('.rightB').addEventListener('click', () => checkAnswer('d'));
  
  // Charger la première image au démarrage
  loadNewImage();


  // Sélectionner les boutons
const leftButton = document.querySelector('.leftB');
const rightButton = document.querySelector('.rightB');

// Variable pour stocker le timeout
let hoverTimeoutL;
let hoverTimeoutR;

// Fonction pour jouer le son au survol
function playHoverSoundL() {
    const hoverSound = document.getElementById('hoverSoundL');
    hoverSound.currentTime = 1; // Réinitialiser le son pour qu'il rejoue à chaque survol
    hoverSound.play();  
}

function stopHoverSoundL() {
    const hoverSound = document.getElementById('hoverSoundL');
    hoverSound.pause(); // Arrêter le son
    hoverSound.currentTime = 0; // Réinitialiser le son
    clearTimeout(hoverTimeoutL); // Annuler le timeout si la souris quitte le bouton
}    

function playHoverSoundR() {
    const hoverSound = document.getElementById('hoverSoundR');
    hoverSound.currentTime = 1; // Réinitialiser le son pour qu'il rejoue à chaque survol
    hoverSound.play();
}    

function stopHoverSoundR() {
    const hoverSound = document.getElementById('hoverSoundR');
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
leftButton.addEventListener('mouseover', startHoverSoundDelayL);
leftButton.addEventListener('mouseout', stopHoverSoundL);
rightButton.addEventListener('mouseover', startHoverSoundDelayR);
rightButton.addEventListener('mouseout', stopHoverSoundR);
