const inputUser=document.getElementById("inputNumber");
const addBtn=document.getElementById('addBtn');
const subBtn=document.getElementById('subBtn');
const multBtn=document.getElementById('multBtn');
const diviBtn=document.getElementById('diviBtn');
const currentCalculationOutput=document.getElementById('current-calculation');
const currentResultOutput=document.getElementById('current-result');
const defaultResult=0;
let currentResult=defaultResult;
var entrirs=[];


function outputResult(currentResult,calculation){
 currentCalculationOutput.textContent=calculation;
 currentResultOutput.textContent=currentResult;
}

function getUserInput(){
    return parseInt(inputUser.value);
}
function createAndWriteOutput(operator,numberBefor,numberOpration ){
    const calcDescription=`${numberBefor} ${operator} ${numberOpration}`
    outputResult(currentResult,calcDescription)
    // displayHistory()
}
function historyOprations(operator,initialResult,enteredNumber,currentResult){
const entry={
    operation:operator,
    prevResult:initialResult,
    enteredNumber:enteredNumber,
    result:currentResult
}
entrirs.push(entry);
console.log(entrirs);

// function displayHistory()
 
// { let entryLog=``;
//     for(var i=0 ; i<entrirs.length;i++){
//     //  entryLog+=`<h2>${entry.prevResult} </h2>`;
//     entryLog+=`<h2>${entry[i].prevResult} ${entry[i].operation} ${entry[i].enteredNumber}=${entry[i].result}</h2>`;
// //         entryLog+=`<tr><td>${entrirs[i].prevResult} ${entrirs[i].operation} ${entrirs[i].enteredNumber}=${entrirs[i].result}
// //         </td></tr>`;
//        console.log("ok")
//   }
//    document.getElementById('tbody').innerHTML=entryLog;
// }
// displayHistory()
}

function calcOpration(calctype){
    const enteredNumber=getUserInput();
    const initialResult=currentResult
    let operator;
    if(
        calctype !=='add'&&
        calctype !=='sub'&&
        calctype !=='mult'&&
        calctype !=='divi'||
        !enteredNumber
        )
        {
            return;
        }
    if(calctype==='add')
    {
        currentResult += enteredNumber;
        operator='+'
    }else if(calctype ==='sub'){
        currentResult -= enteredNumber;
        operator='-'
    } if(calctype ==='mult'){
        currentResult *= enteredNumber;
        operator='*'
    } if(calctype ==='divi'){
        currentResult /= enteredNumber;
        operator='/'
    }
    createAndWriteOutput(operator,initialResult,enteredNumber)
    historyOprations(operator,initialResult,enteredNumber,currentResult)
}
// function displayHistory()
 
//  { let entryLog=``;
//      for(let i=0 ; i<=entrirs.length;i++){
// //        entryLog+=`<h2>sucsess</h2>`;
//      entryLog+=`<h2>${entr[i].prevResult} ${entrirs[i].operation} ${entrirs[i].enteredNumber}=${entrirs[i].result}</h2>`;
// // //         entryLog+=`<tr><td>${entrirs[i].prevResult} ${entrirs[i].operation} ${entrirs[i].enteredNumber}=${entrirs[i].result}
// // //         </td></tr>`;
// //         console.log("ok")
// //    }
//      document.getElementById('tbody').innerHTML=entryLog;
//   }

function add(){
 
    calcOpration('add')
}
   



function subtract(){
    
    calcOpration("sub")
}
function multiply(){
    
    calcOpration("mult")
}
function divide(){
    
    calcOpration("divi")
}
addBtn.addEventListener('click',add);
subBtn.addEventListener('click',subtract);
multBtn.addEventListener('click',multiply);
diviBtn.addEventListener('click',divide);
 
