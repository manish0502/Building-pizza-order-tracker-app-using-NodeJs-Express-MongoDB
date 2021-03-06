import axios from "axios";
import  Noty from "noty";
//import { initAdmin } from './admin'
//const initAdmin =require('./admin')

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter =document.querySelector('#cartCounter');


function updateCart(pizza){


  // we will do ajax call or we will use axios libarary
  axios.post("/update-cart", pizza).then((res) => {

   // console.log(res);
    cartCounter.innerText = res.data.totalQty;

    new Noty({
      type:'success',
      timeout:1000,
      text: "Item has beed added to cart successfully",
      progressBar:false
    }).show();
  }).catch((err) =>{

    new Noty({
      type:'error',
      timeout:1000,
      text: "Something went Wrong!!",
      progressBar:false,
    }).show();

  });
}
//initAdmin();


addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
 
  });
});

// Remove alert message after X seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

