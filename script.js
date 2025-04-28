// Define your lists
const list1 = ['roman noir', 'rimes ou vers', 'roman', 'épistolaire', 'forum internet', 'crieur public / annonce publique', 'petite annonce', 'blague salace', 'monologue', 'huis clos', 'notice de médicament', 'haiku', 'mail', 'profil Tinder', 'powerpoint / slides', 'prospectus (lieu / événement)', 'conversation téléphonique', 'PDV 1e personne', 'fiction SMS', 'prose', 'mode d\'emploi', 'recette de cuisine'];
const list2 = ['science fiction', 'roman gothique', 'course-poursuite', 'tragédie', 'écriture de soi', 'tragi-comédie', 'steampunk', 'policier', 'anticipation', 'romance mais ridicule', 'horreur', 'érotique'];
const list3 = ['bibliothèque', 'journaux / kiosque', 'far west', 'flaque d\'eau', 'parme ?', 'troglodyte', 'automne', 'palais', 'l\'ENC très romancée', 'poisson', 'feutre (feuetre?)', 'mime', 'barbouze', 'nouilles sautées', 'petit-pois', 'salle de syndicat', 'cours du soir type cours de cuisine', 'salle des profs', 'bistro mal fréquenté', 'atelier d\'artiste (sculpture par ex)', 'ébrécher', 'nyan-cat', 'catapulte', 'plante/foret', 'l\'autre', 'cathédrale', 'arts martiaux', 'propolys (propolis?)', 'cuisine', 'balancelle', 'clef', 'tar-pé', 'Dior', 'lever de soleil', 'rallye (de riche)', 'chorale', 'peinture', 'vaisseau', 'le temps qui passe / sur plusieurs générations', 'disparition', 'aquarium', 'prunes de Damas', 'serpillère', 'reécriture de conte'];

// Function to select a random item from any list
function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Function to select multiple random items
function getRandomElements(list, count) {
  const randomElements = [];
  for (let i = 0; i < count; i++) {
    const element = getRandomElement(list);
    randomElements.push(element);
  }
  return randomElements;
}

// Function to select random items and display them
function selectRandom() {
    const randomItemFromList1 = getRandomElement(list1);
    const randomItemFromList2 = getRandomElement(list2);
    const randomItemsFromList3 = getRandomElements(list3, 2); // Select 2 items from list3
  
    // Prepare the result text
    const resultText = `
      <b>Genre</b> : ${randomItemFromList1}<br>
      <b>Forme</b> : ${randomItemFromList2}<br>
      <b>Thèmes</b> : ${randomItemsFromList3.join(', ')}
    `;
  
    // Display the result on the webpage
    document.getElementById('textPlaceholder').innerHTML = resultText;
}
