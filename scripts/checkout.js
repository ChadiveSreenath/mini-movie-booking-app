// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let arr = JSON.parse(localStorage.getItem("amount"))
  
let wallet = document.getElementById("wallet").innerText = arr;

let movies = document.getElementById("movie")


  let data = JSON.parse(localStorage.getItem("movie"))
  console.log(data)

  appendData(data)

  function appendData(data){
 
      let div = document.createElement("div")
  
      let img = document.createElement("img")
      img.src = data.Poster
  
      let title = document.createElement("p")
      title.innerText = data.Title 

      div.append(title,img)
      movies.append(div)
  }


  let submit = document.getElementById("confirm").addEventListener("click", ()=>{
    
    let seats = document.getElementById("number_of_seats").value;
    let total = +(seats*100)
    
let wallet = JSON.parse(localStorage.getItem("amount"))


    if(wallet<0 || wallet<total){
      alert("Insufficient Balance!")
    }
    else{

    let updated_wallet = arr-total
    booking (updated_wallet)

    function booking (updated_wallet){
    console.log(updated_wallet)

      if(updated_wallet<0)  {
        alert("Insufficient Balance!")
        // document.getElementById("wallet").innerText = arr;
      }
      else{
        alert("Booking successfull")
        document.getElementById("wallet").innerText = updated_wallet;
        localStorage .setItem("amount", updated_wallet)
      }

    }

    }


  })
