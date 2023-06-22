"use strict";
const enterDate = document.getElementById("enterDate");
const numberOfDays = document.getElementById("numberOfDays");


const optionsRow = document.getElementById("optionsRow");

//options checkboxes
const tollOption = document.getElementById("tollOption");
const gpsOption = document.getElementById("gpsOption");
const assistanceOption = document.getElementById("assistanceOption");

const checkboxYes = document.getElementById("checkboxYes");
const checkboxNo = document.getElementById("checkboxNo");

const submitBtn = document.getElementById("submitBtn");

const basePrice = document.getElementById("basePrice");
const optionsAmount = document.getElementById("optionsAmount");
const surcharge = document.getElementById("surcharge");
const totalAmount = document.getElementById("totalAmount");





window.onload = function(){
    console.log("window loaded")

    submitBtn.onclick = onSubmitBtnClick;
   


};

function onSubmitBtnClick(){


  
    let perDay = 29.99;
    
    
    let rentalDays = Number(numberOfDays.value);
    
        let basePriceAmount = perDay * rentalDays;
        basePrice.innerHTML = basePriceAmount.toFixed(2);;

        if (checkboxYes.checked) {
          basePriceAmount += basePriceAmount * 0.3;
        }
        
    
        let optionsAmountTotal = 0;

      if (tollOption.checked) {
          optionsAmountTotal += 3.95;
      }
      if (gpsOption.checked) {
          optionsAmountTotal += 2.95;
      }
      if (assistanceOption.checked) {
        basePriceAmount += 2.95 * rentalDays;
      }
    //total options value
      optionsAmount.innerHTML = optionsAmountTotal;


      //calculate the total

     let total = optionsAmountTotal + basePriceAmount;

     surcharge.innerHTML = calculateSurcharge().toFixed(2);

     totalAmount.innerHTML = total.toFixed(2);



    }

    function calculateSurcharge() {
      if (checkboxYes.checked) {
        let perDay = 29.99;
        let rentalDays = Number(numberOfDays.value);
        let basePriceAmount = perDay * rentalDays;
        return basePriceAmount * 0.3;
      }
      return 0;
    }

   
