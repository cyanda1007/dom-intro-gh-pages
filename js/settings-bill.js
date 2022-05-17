const totalAddBtn = document.querySelector(".totalAddSetBtn");
const callsTotalSetElem = document.querySelector(".callTotalSettings");
const smsTotalSetElem = document.querySelector(".smsTotalSettings");
const totalCostSetElem = document.querySelector(".totalSettings");

const update = document.querySelector(".updateSettings");

var callCostSet = 0;
var smsCostSet = 0;
var warningLevelOne = 0;
var criticalLevelOne = 0;

function updateFunction(){
    const callCostS = document.querySelector(".callCostSetting").value;
    const smsCostS = document.querySelector(".smsCostSetting").value;
    const warningLevel = document.querySelector(".warningLevelSetting").value;
    const criticalLevel = document.querySelector(".criticalLevelSetting").value;

    if(callCostS){
        callCostSet = Number(callCostS);
    }
    if(smsCostS){
        smsCostSet = Number(smsCostS);
    }
    if(warningLevel){
        warningLevelOne = Number(warningLevel);
    }
    if(criticalLevel){
        criticalLevelOne = Number(criticalLevel);
    }
    totalCostSetElem.classList.remove("danger");
    totalCostSetElem.classList.remove("warning");

}

var callsSet = 0;
var smsSet = 0;

function countingFunction(){
    return Number(callsSet) + Number(smsSet);
}

function cricalFunction(){
    callsTotalSetElem.innerHTML = callsSet.toFixed(2);
        smsTotalSetElem.innerHTML = smsSet.toFixed(2);
        var counts = countingFunction();    
        totalCostSetElem.classList.remove("danger");
        totalCostSetElem.classList.remove("warning");
        if (counts >= warningLevelOne && counts < criticalLevelOne){
            totalCostSetElem.classList.add("warning");
        }
        if (counts >= criticalLevelOne){
             totalCostSetElem.classList.add("danger");
        }
        totalCostSetElem.innerHTML = Number(counts).toFixed(2);
}


function settingBillTotal(){
    var checkedRadioSetBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
    var amu = countingFunction();
    if(amu < criticalLevelOne){
        if (checkedRadioSetBtn === "call"){
            callsSet += Number(callCostSet);
        }
        else if (checkedRadioSetBtn === "sms"){
            smsSet += Number(smsCostSet);
        }
    } 
    cricalFunction();
}


totalAddBtn.addEventListener('click', settingBillTotal);
update.addEventListener('click', updateFunction);