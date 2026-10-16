let points = 0;
document.getElementById('target').addEventListener('click', () => {
  document.getElementById('score').textContent = `Points: ${++points}`;
});
