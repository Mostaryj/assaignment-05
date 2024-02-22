function buyTickets() {
    const paribahanSection = document.getElementById("paribahan-section")
    paribahanSection.scrollTop = paribahanSection.scrollHeight

}

const classTitle = 'Economy';
const priceTitle = '550';

let count = 0;
let totalPrice = 0;


const seats = document.querySelectorAll(".seats");

for (let index = 0; index < seats.length; index++) {

    const seat = seats[index];

    seat.addEventListener('click', function () {

        const title = seat.querySelector("span").innerText;
        setBackgroundColorById(title)

        // remove element

        const continueBtn = document.getElementById("continue-btn")
        continueBtn.addEventListener('click', function () {
            removeBackgroundColorById(title);
            totalCountedPrice.innerText = "" ;
            addedSeat.innerHTML= 0 ;
            p1.innerText = "";
            p2.innerText = "";
            p3.innerText = "";
            seatLeft.innerText = 16 ;
            document.getElementById("rest-total").innerText = 0;
            document.getElementById("discount-price").innerText = 0 ;
        })

        const addedSeat = document.getElementById("added-seat")
        count++
        addedSeat.innerHTML= count ;

        // stop if click more than 4

        if(count > 4){
            alert("You can't select more than four seat.");
            removeBackgroundColorById(title);
            totalCountedPrice.innerText = "" ;
            addedSeat.innerHTML= 0 ;
            p1.innerText = "";
            p2.innerText = "";
            p3.innerText = "";

        }

        const seatLeft = document.getElementById("seats-left")
        const seatLeftText = seatLeft.innerText ;
        const currentSeat = parseInt(seatLeftText);
        const newSeat = currentSeat - 1 ;
        seatLeft.innerText = newSeat ;
        




        const seatDetailContainer = document.getElementById("seat-details-container")

        const p1 = document.createElement("p")
        p1.innerText = title;
        seatDetailContainer.appendChild(p1)

        const economyClass = document.getElementById("economy-class")

        const p2 = document.createElement("p")
        p2.innerText = classTitle;
        economyClass.appendChild(p2)

        const priceClass = document.getElementById("price-title")

        const p3 = document.createElement("p")
        p3.innerText = priceTitle;
        priceClass.appendChild(p3)

        // total price

        const price = parseFloat(priceTitle)
        totalPrice += price

        const totalCountedPrice = document.getElementById("total-price")
        totalCountedPrice.innerText = totalPrice
    })

}

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener('click', function () {

    const couponElement = document.getElementById("coupon-input").value;
    const couponCode = couponElement.split("").join("").toUpperCase();
    console.log(couponCode)

    if (totalPrice >= 2200) {
        if (couponCode === "NEW15") {
            const discountElement = document.getElementById("discount-price")
            const discountAmount = totalPrice * 15 / 100;
            discountElement.innerText = discountAmount.toFixed(2);

            const grandTotal = totalPrice - discountAmount.toFixed(2);
            document.getElementById("rest-total").innerText = grandTotal;

            document.getElementById("coupon-input").value = "";

        }
        else {
            alert("Invalid coupon code.");
            document.getElementById("coupon-input").value = "";

        }

    }
    else {
        alert("Please purchase 4 seat to get coupon.");
        document.getElementById("coupon-input").value = "";
    }

})


