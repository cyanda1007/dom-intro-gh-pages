const billItemTypeRadio = document.querySelector('.billItemTypeRadio')
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')
const callTotalTwo = document.querySelector('.callTotalTwo')
const smsTotalTwo = document.querySelector('.smsTotalTwo')
const totalTwo = document.querySelector('.totalTwo');

var TotalCall = 0;
var TotalSms = 0;


    function raidoBillAddbtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
  if(billItemType === "call"){
    TotalCall += 2.75
  }
  else if(billItemType === "sms"){
    TotalSms += 0.75;
  }
  callTotalTwo.innerHTML = TotalCall.toFixed(2);
  smsTotalTwo.innerHTML = TotalSms.toFixed(2);
  var TotalCost = TotalCall + TotalSms;
  totalTwo .innerHTML = TotalCost.toFixed(2);
  if(TotalCost >= 50){
    totalTwo.classList.add('danger');
  }
  else if(TotalCost >= 30){
    totalTwo.classList.add('warning');
  }
}
radioBillAddBtn.addEventListener('click', raidoBillAddbtnClicked);