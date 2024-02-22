function updatedGrandTotalByUsingCoupon(){
    const couponOfferString = document.getElementById('coupon-new-str').innerText;
    const couponCoupleString = document.getElementById('coupon-couple').innerText ;
    const couponApplyField = document.getElementById('coupon-apply-field').value;
       const currentGrandTotal = getElementById('grand-total');

       if(currentGrandTotal < 2000){
        alert('already have this coupon');
        return;
       }
       if(couponApplyField === couponOfferString){
        const discountOffer = currentGrandTotal * (15/100);
        const newGrandTotal = currentGrandTotal - discountOffer;
        setValueById('grand-total', newGrandTotal);
       }
       else if(couponApplyField === couponCoupleString){
        const discountCoupleOffer = currentGrandTotal * (20/100);
        const updateGrandTotal = currentGrandTotal - discountCoupleOffer;
        setValueById('grand-total',updateGrandTotal);
       }
       else{
        alert('inter the right coupon');
        return
       }      
}

const seats = ['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4','G1','G2','G3','G4','H1','H2','H3','H4','I1','I2','I3','I4','J1','J2','J3','J4'];
for(const seat of seats){
    const selectSeat = document.getElementById(seat);
    selectSeat.addEventListener('click', setAll);

    function setAll(){
        const currentSeats = getElementByValueId('remain-seats');
        if(currentSeats=== 37){
            const disableButton = document.getElementById('disable-btn');
            disableButton.removeAttribute('disabled');
        }
        if(currentSeats < 37){
            alert ('can not select more than 4 seats');
            return;
        }

        const updateSeats = currentSeats - 1;
        setValueById('remain-seats', updateSeats);
        selectSeat.classList.add('bg-[#1DD100]');

        const selectSeatDetailsContainer = document.getElementById('selected-seat-details');
        const element = `<p>Seat name: ${seat}</p><p>Economy</p><p>Price: 550</p>`;
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between');
        div.innerHTML = element;
        selectSeatDetailsContainer.appendChild(div);

        const currentSelectSeat = getElementByValueId('selected-seat');
        const updateSelectSeat = currentSelectSeat + 1;
        setValueById('selected-seat', updateSelectSeat);

        const currentTotal = getElementByValueId('current-total');
        const updateTotal = currentTotal + 550;
        setValueById('current-total', updateTotal);
        setValueById('grand-total', updateTotal);
    }
}