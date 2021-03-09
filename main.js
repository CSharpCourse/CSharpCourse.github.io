let cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
var dict = [];
let cardFronts = document.querySelectorAll('.student-card');
let cardBacks = document.querySelectorAll('.student-cardb');
for (let index = 0; index < cardFronts.length; index++) {

  dict.push({
    key: cardFronts[index],
    value: cardBacks[index],
  });

}
dict.forEach(element => {
  element.key.addEventListener('mouseover', () => {
    element.key.classList.toggle('set-background');
    element.value.classList.toggle('set-background');
  });
  element.key.addEventListener('mouseout', () => {
    element.key.classList.toggle('set-background');
    element.value.classList.toggle('set-background');
  });

  element.value.addEventListener('mouseover', () => {
    element.key.classList.toggle('set-background');
    element.value.classList.toggle('set-background');
  });
  element.value.addEventListener('mouseout', () => {
    element.key.classList.toggle('set-background');
    element.value.classList.toggle('set-background');
  });
});