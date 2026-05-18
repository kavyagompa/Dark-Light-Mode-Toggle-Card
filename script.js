// Toggle dark/light mode
function toggleMode() {
  const body = document.body;
  const btn  = document.querySelector('.toggle-btn');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
}
