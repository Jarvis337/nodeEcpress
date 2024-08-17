const EventEmitter = require('events')

class pizzashop extends EventEmitter{
  constructor(){
    super();
    this.orderNumber = 0;
  }
  order(size, topping){
    this.orderNumber++;
    this.emit("order", size, topping);
  }
  displayOrderNumber(){
    console.log(`The order number is : ${this.orderNumber}`)
  }
}
module.exports = pizzashop