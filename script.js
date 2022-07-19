let actBal=document.getElementById("actBal")
let loanAmt=document.getElementById("loanAmt")
let selectOne=document.getElementById("selectOne")
let selectTwo=document.getElementById("selectTwo")
let selectThree=document.getElementById("selectThree")
let selectFour=document.getElementById("selectFour")
let selectFive=document.getElementById("selectFive")
let belMon=document.getElementById("belMon")
let abvMon=document.getElementById("abvMon")
let wMonth=document.getElementById("wMonth")
let mMonth=document.getElementById("mMonth")
let aboveSix=document.getElementById("aboveSix")
let belowSix=document.getElementById("belowSix")
let aboveSix2=document.getElementById("aboveSix2")
let belowSix2=document.getElementById("belowSix2")
let cuAct=document.getElementById("cuAct")
let saAct=document.getElementById("saAct")
let btnEnter=document.getElementById("btnEnter")
let point=document.getElementById("point")
let loanAward=document.getElementById("LoanAward")
let errorLabel=document.getElementById("errorLabel")


btnEnter.addEventListener('click',function(){
  validate()
    
})

function validate(){
    if(actBal.value==""){
        errorLabel.innerHTML="Account balance is required";
      }else if(loanAmt.value==""){
        errorLabel.innerHTML="Loan amount is required";
      }else if(selectOne.value=="blank"){
        errorLabel.innerHTML="Please provide your credit history";
      }else if(selectTwo.value=="blank"){
        errorLabel.innerHTML="Please select your last deposit date";
      }else if(selectThree.value=="blank"){
        errorLabel.innerHTML="Please select your last loan collection date";
      }else if(selectFour.value=="blank"){
        errorLabel.innerHTML="Please select a loan repayment period";
      }else if(selectFive.value=="blank"){
        errorLabel.innerHTML="Please select your account type";
      }else{
        errorLabel.innerHTML="You have provided all the information";
    }

}



