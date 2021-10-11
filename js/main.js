const schemeSvg = document.querySelector('.scheme svg');
const totalPriceTag = document.querySelector('.price-total');

// Цена билета
let cost = 1600;

schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('_active');
  }
  writePriceTotal();
});

function writePriceTotal() {
  // Кол-во выбранных мест
  let totalSeats = schemeSvg.querySelectorAll('._active').length;
  // Кол-во выбранных мест * цена билета
  let totalPrice = totalSeats * cost;
  totalPriceTag.textContent = totalPrice;
}

writePriceTotal();
