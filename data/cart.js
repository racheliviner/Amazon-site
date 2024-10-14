export const cart = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1
      },{
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3
      },{
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 2
      }
];

export function addToCart(productId){
    let itemExist;
  
    cart.forEach(cartItem => {
      if (productId === cartItem.id){
        cartItem.quantity++;
        itemExist = true; 
      }   
    }); 
  
    if (!itemExist){
      cart.push({
        id: productId,
        quantity: 1
      });
    } 
  }