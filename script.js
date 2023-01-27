function cardName(){
  const fullName=document.getElementById('fullName').value;
  const cardName=document.querySelector('.name');
  cardName.innerHTML=fullName.toUpperCase();
  if(fullName.length===0){
    document.getElementById('fullName').style. border = "thin solid hsl(0, 100%, 66%)";
  }else if(fullName.length>0){
  document.getElementById('fullName').style. border = "thin solid hsl(270, 3%, 87%)";
  }
  console.log(fullName.length)
}

function accNum(){
 let inputNum=document.getElementById('inputNum').value;
  if(inputNum.length!==16){ 
    document.getElementById('wrongAcc').innerHTML='Please input a valid account number';
    document.getElementById('inputNum').style. border = "thin solid hsl(0, 100%, 66%)";
    }
  else{
   let space1= inputNum.slice(0,4);
   space1 +=' '
   let space2= inputNum.slice(4,8);
   space2 +=' '
   let space3= inputNum.slice(8,12);
   space3 +=' '
   let space4= inputNum.slice(12,16);
   space4 +=' '
   inputNum=`${space1}${space2} ${space3}${space4}`;
   document.getElementById('inputNum').style. border = "thin solid hsl(270, 3%, 87%)";
   document.getElementById('wrongAcc').innerHTML='';
  }
    const cardNum= document.querySelector('.acc-num');
    cardNum.innerHTML=inputNum;  
}

function dateTime(){
  const month=document.getElementById('month').value;
  const year=document.getElementById('year').value;
  const expDate=`${month}/${year}`;
  if(month.length==0||year.length==0){
  document.getElementById('wrongDate').innerHTML="Can't be Blank";
  document.getElementById('month').style. border = "thin solid hsl(0, 100%, 66%)";
  document.getElementById('year').style. border = "thin solid hsl(0, 100%, 66%)";
  }else{
    document.getElementById('wrongDate').innerHTML=" ";
    document.getElementById('month').style. border = "thin solid hsl(270, 3%, 87%)";
    document.getElementById('year').style. border = "thin solid hsl(270, 3%, 87%)";
  }
  document.querySelector('.date').innerHTML=expDate;
}

function cvv(){
  const cvvNum=document.getElementById('cvvNum').value;
  console.log(cvvNum);
  const cvvInput=document.querySelector('.cvv');
  cvvInput.innerHTML=cvvNum;
  if(cvvNum.length==0){
    document.getElementById('wrongDate').style.marginLeft='200px'
    document.getElementById('wrongDate').innerHTML="Can't be Blank"
    document.getElementById('cvvNum').style. border = "thin solid hsl(0, 100%, 66%)";
  }else if(cvvNum.length=3){
    document.getElementById('wrongDate').innerHTML=" ";
    document.getElementById('cvvNum').style. border = "thin solid hsl(270, 3%, 87%)";
  }
}

function complete(){
  let inputNum=document.getElementById('inputNum').value;
  const fullName=document.getElementById('fullName').value;
  const month=document.getElementById('month').value;
  const year=document.getElementById('year').value;
  const cvvNum=document.getElementById('cvvNum').value;
  const form=document.getElementById("form");
  const message=document.querySelector(".completed")
  if(inputNum.length==16 && fullName.length>2 && month.length==2 && year.length==2 && cvvNum.length==3){
    document.querySelector(".completed").style.display="block"
    document.getElementById("form").style.display="none"
  }
  
}
