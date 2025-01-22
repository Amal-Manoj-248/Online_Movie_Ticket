document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ticket submitted successfully!');
});

document.getElementById('download-ticket').addEventListener('click', function() {
    alert('Ticket downloaded!');
});

document.getElementById('process-payment').addEventListener('click', function() {
    alert('Payment processed!');
});

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Define prices for different seat types
const seatPrices = {
  classic: 100,  // Classic ticket price
  prime: 200,    // Prime ticket price
  premium: 350   // Premium ticket price
};

// Update total and count based on selected seats
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    let seatNumbers = [];
    let selectedSeatsCount = 0;
    let totalPrice = 0;

    selectedSeats.forEach(seat => {
        seatNumbers.push(seat.innerText); // Get seat numbers
        if (seat.classList.contains('classic')) {
            totalPrice += seatPrices.classic;
        } else if (seat.classList.contains('prime')) {
            totalPrice += seatPrices.prime;
        } else if (seat.classList.contains('premium')) {
            totalPrice += seatPrices.premium;
        }
        selectedSeatsCount++;
    });

    count.innerText = selectedSeatsCount;
    total.innerText = totalPrice;
    document.getElementById('seat').value = seatNumbers.join(','); // Set seat numbers in the form
    document.getElementById('payment-amount').value = totalPrice; // Set total price in the form
}


document.getElementById('download-ticket').addEventListener('click', function() {
    const movie = document.getElementById('movie').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const place = document.getElementById('place').value;
    const theatre = document.getElementById('theatre').value;
    const seats = document.getElementById('seat').value;
    const amount = document.getElementById('payment-amount').value;
    const showTime = document.getElementById('show-time').value;
    const date = document.getElementById('date').value;
    const userName = document.getElementById('name').value;

    // Store form data in localStorage
    localStorage.setItem('ticketDetails', JSON.stringify({
        movie: movie,
        seats: seats,
        age:age,
        place:place,
        theatre:theatre,
        gender:gender,
        amount: amount,
        showTime: showTime,
        date: date,
        userName: userName
    }));

    // Redirect to the download ticket page
    window.location.href = "download_ticket.html";
});


// Seat click event to toggle selection and update count/total
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount(); // Update count and total on selection
  }
});

updateSelectedCount(); // Initialize the count and total