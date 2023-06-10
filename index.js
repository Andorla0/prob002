// Obtener el botón por su identificador
const botonSI = document.getElementById('botonSI');

// Agregar un evento de clic al botón
botonSI.addEventListener('click', function() {
  // Mostrar la alerta
  alert('Ya sabía ctm, dejemos esto aquí, no quiero contagiarme');
});


// Obtener el botón por su identificador
const botonNO = document.getElementById('botonNO');

// Agregar un evento de clic al botón
botonNO.addEventListener('mouseover', function() {
  // Obtener una posición aleatoria para el botón
  const posicionX = Math.floor(Math.random() * window.innerWidth);
  const posicionY = Math.floor(Math.random() * window.innerHeight);
  

  // Aplicar la posición aleatoria al botón
  botonNO.style.position = 'absolute';
  botonNO.style.left = posicionX- 20+ 'px';
  botonNO.style.top = posicionY -20+ 'px';
});

