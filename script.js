//* add elements
const countEl = document.getElementById("count");
const incrementBtnEl = document.getElementById("increment");
const decrementBtnEl = document.getElementById("decrement");
const resetBtnEl = document.getElementById("reset");
let count = 0;

//* add event listeners
incrementBtnEl.addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});
decrementBtnEl.addEventListener("click", function () {
  count--;
  countEl.textContent = count;
});
resetBtnEl.addEventListener("click", function () {
  count = 0;
  countEl.textContent = count;
});
