// Pestañas menú principal
const menuItems = document.querySelectorAll('#mainMenu li');
const sections = document.querySelectorAll('section.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    menuItems.forEach(i => i.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    item.classList.add('active');
    document.getElementById(item.dataset.tab).classList.add('active');
  });
});

// Smooth scroll para el menú lateral en inicio
document.querySelectorAll('.menu-lateral a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElem = document.getElementById(targetId);
    if(targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// IMC + QR
const imcForm = document.getElementById('imcForm');
const resultadoIMC = document.getElementById('resultadoIMC');
imcForm.addEventListener('submit', e => {
  e.preventDefault();
  const altura = parseFloat(document.getElementById('altura').value) / 100;
  const peso = parseFloat(document.getElementById('peso').value);
  const imc = peso / (altura * altura);
  let categoria = '';
  let qrImage = '';

  if (imc < 18.5) {
    categoria = 'Bajo peso';
    qrImage = 'images/SUBIR.jpg'
  } else if (imc < 25) {
    categoria = 'Peso normal';
    qrImage = 'images/MANTENER.jpg';
  } else {
    categoria = 'Sobrepeso u obesidad';
    qrImage = 'images/BAJAR.jpg';
  }


 resultadoIMC.innerHTML = `
  <p>Tu IMC es ${imc.toFixed(2)} (${categoria})</p>
  <p>Escanea el código QR para ver tu plan alimenticio personalizado:</p>
  <div class="d-flex justify-content-center">
    <img src="${qrImage}" alt="Código QR para plan alimenticio" class="img-fluid" style="max-width: 150px;" />
  </div>
`;

});


// Membresía
document.getElementById('form-membresia').addEventListener('submit', function (e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('confirmacion-membresia').style.display = 'block';
  });


// Pedido
document.getElementById('form-pedido').addEventListener('submit', function (e) {
    e.preventDefault();
    const trackingCode = 'FE' + Math.floor(Math.random() * 1000000000);
    document.getElementById('tracking-code').textContent = trackingCode;
    this.style.display = 'none';
    document.getElementById('confirmacion-pedido').style.display = 'block';
    });
  
    document.getElementById('rastreo-btn').addEventListener('click', function () {
    const estado = document.getElementById('estado-pedido');
    estado.style.display = 'block';
    estado.textContent = '📦 Tu caja está en preparación y será enviada pronto.';
    });


