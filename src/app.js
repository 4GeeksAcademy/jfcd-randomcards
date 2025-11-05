import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suits = [
    {name: "heart", symbol: "♥", color: "red"},
    {name: "spade", symbol: "♠", color: "black"},
    {name: "club", symbol: "♣", color: "black"},
    {name: "diamond", symbol: "♦", color: "red"},
  ];

  const generateRandomCard = () => {
    const randomValueIndex = Math.floor(Math.random() * values.length);
    const randomSuitIndex = Math.floor(Math.random() * suits.length);

    return {
      value: values[randomValueIndex],
      suit: suits[randomSuitIndex]
    };
  };

  const renderCard = (card) => {
    const container = this.document.getElementById('card-container');
    if (!container) {
      console.error("conteedor 'card-container' no encontrado.");
      return;
    }

    container.innerHTML = '';

    const cardDiv = this.document.createElement('div');
    cardDiv.classList.add('card', card.suit.name);

    cardDiv.style.color = card.suit.color;

    const topSuit = document.createElement('div');
    topSuit.classList.add('top-suit');
    topSuit.innerHTML = card.suit.symbol;

    const cardValue = this.document.createElement('div');
    cardValue.classList.add('card-value');
    cardValue.innerHTML = card.value;

    const bottomSuit = this.document.createElement('div');
    bottomSuit.classList.add('bottom-suit');
    bottomSuit.innerHTML = card.suit.symbol;

    cardDiv.appendChild(topSuit);
    cardDiv.appendChild(cardValue);
    cardDiv.appendChild(bottomSuit);

    container.appendChild(cardDiv);

  };
  const newCard = generateRandomCard();
  renderCard(newCard);

  console.log(`carta generada: ${newCard.value} de ${newCard.suit.name}`);
};


