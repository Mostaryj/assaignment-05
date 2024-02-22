const allBtn = document.getElementsByClassName('btnStyle');
// const maxSelectionSeat = 4;
let maxSeatBooked =0;
for (const btn of allBtn){
    btn.addEventListener('click', function(event){
        const bgStyle = event.target;
        const text = bgStyle.innerText;
        bgStyle.style.background = '#1DD100';

        // 
       

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = text;

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';

        const p3 = document.createElement('p');
        p3.innerText = '550';

        document.getElementById('append-seat');
        div.classList.add('append-div');
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        seatDecrease('seat-decrease');
        seatCount ('seat-count');
        totalAmount(getValueById('ticket-fare'));
        grandTotalAmount();
        event.target.setAttribute('disabled', false);


    });
}


// coupon
const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function (event) {
    const coupon = document.getElementById('coupon-code').value;
    event.preventDefault();
    if (coupon) {
        if (coupon == 'NEW15') {
            const discountPrice = grandTotalAmount() * 15 / 100;
            const discount1 = grandTotalAmount() - discountPrice;
            document.getElementById('grand-total').innerText = discount1;

        } else if (coupon == 'Couple20') {
            const discountPrice2 = grandTotalAmount() * 20 / 100;
            const discount2 = grandTotalAmount() - discountPrice2;
            document.getElementById('grand-total').innerText = discount2;
        } else {
            alert('Please input a valid coupon code');
        }
    } else {
        document.getElementById('grand-total').innerText = grandTotalAmount();
    }
})


const success = document.getElementById('success-btn')
success.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'test.html';
})

// grand total
function grandTotalAmount() {
    const previousAmount = document.getElementById("total-amount").innerText;
    const convertedTotalAmount = parseInt(previousAmount);
    document.getElementById('grand-total').innerText = convertedTotalAmount;
    return convertedTotalAmount;
}

// total price
function totalAmount(value) {
    const previousAmount = document.getElementById("total-amount").innerText;
    const convertedTotalAmount = parseInt(previousAmount);
    const convertedAmount = value;
    const sum = convertedTotalAmount + convertedAmount;
    document.getElementById("total-amount").innerText = sum;
}


// seat number count
function seatCount() {
    
    const seat = document.getElementById('seat-count').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat-count').innerText = seatValue + 1;
    return newValue;
}

function seatDecrease() {
    const seat = document.getElementById('seat-decrease').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat-decrease').innerText = seatValue - 1;
    return newValue;
}


function getValueById(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}