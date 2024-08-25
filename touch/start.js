document.addEventListener('click', function(event) {
  const x = event.clientX; 
  const screenWidth = window.innerWidth; 
  const halfScreenWidth = screenWidth / 2; 

  if (x < halfScreenWidth) {
    side = 'left';
  } else {
    side = 'right';
  }
  localStorage.setItem('clientSide', side);
  window.location.href = 'main.html';
});