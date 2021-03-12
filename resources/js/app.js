let addToCart= document.querySelectorAll('.add-to-cart');
addToCart.forEach((btn)=>{

    btn.addEventListener('click',(e)=>{

        let pizza = btn.dataset.pizza
        console.log(pizza);


    })

})