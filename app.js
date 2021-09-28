let billAmount = document.querySelector('#bill-amount');
let cashGiven = document.querySelector('#cash-given');
let cashGivenLabel = document.querySelector('#cash-given-label');
let checkBtn = document.querySelector('#calculate-btn');
let nextBtn = document.querySelector('#next-btn');
let resetBtn = document.querySelector('#reset-btn');
let p = document.querySelector('p');
let thinking = document.querySelector('.thinking-gif');
let outputEl = document.querySelectorAll('.output-money');
let table = document.querySelector('table');
let footer= document.querySelector('footer');
let notes=[2000,500,100,20,10,5,2,1];
thinking.style.display="none";
p.style.color="red";
cashGiven.style.display="none";
cashGivenLabel.style.display="none";
checkBtn.style.display="none";
resetBtn.style.display="none";
table.style.display="none";
footer.style.marginTop="43vh";
function checkBillAmount(amount){
    if(amount<0){p.innerText="🚫Bill amount cant be negative🚫"; return false;}
    else if (amount==="0"){p.innerText="🚫Bill amount cant be zero🚫"; return false;}
    else if (amount===""){p.innerText="🚫Pls Enter Bill Amount🚫"; return false;}
    return true;
}
function checkCashGiven(amount){
     if(amount<0){p.innerText="🚫Cash Given cant be negative🚫"; return false;}
    else if(amount===""){p.innerText="🚫Pls Enter Cash Given🚫"; return false;}
    else if(amount==="0"){p.innerText="Cash Given Cant be Zero Untill  and unless you are willing to wash plates"; return false;}
    return true;
}
nextBtn.addEventListener('click',()=>{
    if(checkBillAmount(billAmount.value)){
        nextBtn.style.display="none";
        cashGiven.style.display="block";
        cashGivenLabel.style.display="block";
        checkBtn.style.display="inline";
        p.innerText="";
        footer.style.marginTop="30vh";
    }
footer.style.marginTop="37vh";
})
checkBtn.addEventListener('click',()=>{
    footer.style.marginTop="30vh";
    if(checkCashGiven(cashGiven.value)){
        resetBtn.style.display="inline";
        if(Number(billAmount.value)>Number(cashGiven.value)){p.innerText="Seems like u waana wash plates";}
        else if (billAmount.value===cashGiven.value){p.innerText="Ahh!! Thats why we peoples used to say don't skip classes in KinderGarden"}
        else{
                    p.style.color="black";
                    thinking.style.display="inline";
                    footer.style.marginTop="5vh";
                    p.innerText="⏱️Calculating with the speed of 99Light years⏱️";

            setTimeout(()=>{thinking.style.display="none"
                billAmountValue=Number(billAmount.value);
                cashGivenValue=Number(cashGiven.value);
                let remainingMoney= cashGivenValue-billAmountValue;
                p.innerText=`The amount to be returned is ₹${remainingMoney}`;
                table.style.display="block";
                for(let i =0; i<notes.length;i++){
                    outputEl[i].innerText=Math.trunc(remainingMoney/notes[i]);
                    remainingMoney=remainingMoney%notes[i];
                }
        },5000);
        }
    }
})
resetBtn.addEventListener('click',()=>{
    billAmount.value="";
    cashGiven.value="";
    cashGiven.style.display="none";
    cashGivenLabel.style.display="none";
    nextBtn.style.display="inline";
    checkBtn.style.display="none";
    resetBtn.style.display="none";
    p.innerText="";
    footer.style.marginTop="43vh";
    table.style.display="none";
})

