// Store the wallet amount to your local storage with key "amount"


let arr = JSON.parse(localStorage.getItem('amout')) || []
let wallet = document.getElementById("wallet").innerText=0;


let btn = document.getElementById("add_to_wallet").addEventListener("click", ()=> {

  let amount = document.getElementById("amount").value;

  arr.push(amount);

  let balance  = 0;
  for(var i=0;i<arr.length;i++) {
    balance = balance + (+arr[i])
  }

  let wallet = document.getElementById("wallet").innerText=balance;


  localStorage.setItem("amount",(balance))


})



