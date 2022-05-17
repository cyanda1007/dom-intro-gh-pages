//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotal = document.querySelector(".billTotal");
var total = document.querySelector(".total");
//get a reference to the billString
var billString = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', () => {

const bill = billString.value
billString.setAttribute('placeholder', 'invalid input! please enter call or sms separated by commas(,)')
let totalCall = 0, totalSms = 0, totalAmount = 0.00, callCount =0, smsCount = 0
let billArray = bill.split(',')
if (typeof billString.value == 'string'){
  for(let i = 0; i < billArray.length;i++){
    billArray[i].trim().toLowerCase() == 'call'&& callCount++
    billArray[i].trim().toLowerCase() == 'sms' && smsCount++
  }
  totalCall = (callCount * 2.75)
  totalSms = (smsCount * 0.75)
  totalAmount = (totalCall + totalSms)
  
  if(totalAmount > 20 && totalAmount < 30){
    
    total.classList.add('warning')
    total.classList.remove('danger')
  }else if(totalAmount >= 30){
    total.classList.remove('warning')
    total.classList.add('danger')
  }
}
total.innerHTML = totalAmount.toFixed(2)
})