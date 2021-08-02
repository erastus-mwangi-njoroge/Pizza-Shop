var pizzaPrice = [1000, 800, 500]
var transport = [0, 500];
$(document).ready(function () {
    $('form#orderForm').submit(function (event) {
        event.preventDefault();
        
        var name = $('#name').val();

        var contact = parseInt($('#contact').val());


        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTopping = $('#topping').val();

        var pizzaQuantity = parseInt($('#quantity').val());

        var pizzaDeliver = parseInt($('#deliver').val());


        var price = pizzaPrice[pizzaSize - 1];


        var DeliveryCost = transport[pizzaDeliver - 1];



        newOrder = new Order(pizzaSize, pizzaCrust, pizzaTopping);
        newTotal = new Total(price, pizzaQuantity, DeliveryCost);
        if (pizzaDeliver===1){
        alert("Hello " + name)
        alert("Your oder contains" + newOrder.fullOrder() + ".continue to see your total bill");
        alert("your bill is: " + newTotal.finalTotal() + ".You will receive your pizza in the next few minutes");
        }else{
            if(pizzaDeliver===2){
                prompt("Hello " + name + "Please enter where you want your pizza to be delivered");
                alert("Your order has been received and it will be delivered. Continue to see your order details");
                alert("Your Pizza oder contains" + newOrder.fullOrder() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal() + ".You pizza will be delevered in the next 30minutes");
            }
        }

    });
    function Total(price, quantity, delivery) {
        this.price = price;
        this.quantity = quantity;
        this.delivery = delivery;
    }
    
    Total.prototype.finalTotal = function () {
        return this.price * this.quantity + this.delivery;
    };
    

