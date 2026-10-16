let inputs = 0;
function record(direction) {
  document.getElementById('score').textContent = `Inputs: ${++inputs}`;
  document.getElementById('direction').textContent = direction;
}
document.querySelectorAll('button').forEach(button => button.addEventListener('click', () => record(button.dataset.direction)));
document.addEventListener('keydown', event => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
    record(event.key.slice(5));
  }
});
