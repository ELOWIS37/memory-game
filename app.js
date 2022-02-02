document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  // Exercici 3 - Variables vides
  var nVides= 4
  var vides = document.getElementById("vides")
  // Exercici 4
  var nAccions = 0
  var accions = document.getElementById("accio")
  vides.innerHTML = nVides
  // Exercici 1 - Cambiar color 
  var tauler = document.getElementById('tauler')
  tauler.addEventListener('mouseenter', ratoliSobre)
  tauler.addEventListener('mouseleave', ratoliFora)

  function ratoliSobre() {
      document.getElementById('result').style.color = 'blue';
  } 
  function ratoliFora() {
    document.getElementById('result').style.color = 'green';
  }
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
      
      // Exercici 3 - Restar vides
      nVides--
      vides.innerHTML = nVides
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
      // Exercici 3 - Restar vides
      nVides--
      vides.innerHTML = nVides
    }
    //Exercici 2 - Eliminar el nom
    borrarNom();

    // Exercici 3 - Si el contador de vides es = 0 has perdut
    if (nVides == 0){
      alert ("Has perdut Eloy Castaño Molina!")
      window.location.reload();
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }
  //Exercici 2 - Funcions posar i borrar el nom
  function posarNom(nomDeLaImatge){
    console.log(nomDeLaImatge);
    document.getElementById("nomDeLaImatge").innerHTML=(nomDeLaImatge);
  }
  function borrarNom(){
  document.getElementById("nomDeLaImatge").innerHTML=("");
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    //Exercici 2 - Mostrar el nom
    posarNom(cardArray[cardId].name)
  }
  createBoard()
})


