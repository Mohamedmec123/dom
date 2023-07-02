let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shoppingCart');
let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  let generateCartItems = ()=>{
    if(basket.lengh !==0){
      alert("basket is not empty")
    }else{
      console.log("basket is empty")
    }
  };
  generateCartItems();