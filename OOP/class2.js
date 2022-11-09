//class contains only properties and methods
class Order{
    Order_placed(){
        console.log("order is booking")
    }
    Order_dispatched(){
        console.log("order is being processed")
    }
    Order_delivary(){
        console.log("delivary within two days")
    }
    Order_delivered(){
        console.log("product delivered")
    }
}
//store the class in a variable use "NEW" keywprd
let a= new Order()
a.Order_placed()
a.Order_dispatched()
a.Order_delivary()
a.Order_delivered()