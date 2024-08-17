const Pizzashop = require('./pizzashop');

const pizzashop = new Pizzashop();
pizzashop.on("order", (size, topping)=>{
  console.log(`Order received baking a ${size} pizza with ${topping}`)
})
pizzashop.order("large", "paneer")
pizzashop.displayOrderNumber();