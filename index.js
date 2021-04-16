$(document).ready(function() {
    class Order {
        constructor(type, crust, price, toppings) {
            this.type = type;
            this.crust = crust;
            this.price = price;
            this.toppings = toppings;
        }
    }



    const myPrices = {

        large: 1000,
        medium: 800,
        small: 500
    };

    var pizzaFlavour = ["Chicken", "veggie", "Periperi"];
    var finalPrice = [];


    $("#explore").click(function() {
        $("body, html").animate({
                scrollTop: $("#dishes").offset().top
            },
            1000
        );
    });



    //   $(".shopping-cart").hide()
    var pizzaAmount = 0;
    $(".items-added small").text(pizzaAmount);

    $(".cart .close").click(function() {
        $(".cart").fadeOut(500);
        $(".shopping-cart").show(500);
    });

    $(".shopping-cart").click(function() {
        $(".cart").fadeIn(500);

        $(".shopping-cart").hide();
        var lastPrice = 0;

        for (let i = 0; i < finalPrice.length; i++) {
            lastPrice += finalPrice[i];
        }
        $("#total_price").text(lastPrice);
        // console.log("Total " + lastPrice)
    });

    // chicken pizza logic

    $("#chic").click(function() {
        $(".kuku").slideToggle();
        $("html, body").animate({
                scrollTop: $(".kuku").offset().top
            },
            1000
        );
    });

    $(".kuku").submit(function(e) {
        e.preventDefault();
        if ($("#quantity").val() == "" || $("#quantity").val() == 0 || $("#quantity").val() < 0) {
            alert("Please input the number of pizza you want. It can't be zero or a negative number :)");
        } else {

            var pizza = pizzaFlavour[0];
            var cheeseTopping = $("#cheese");
            var peperoniTopping = $("#peperoni");
            var hamTopping = $("#ham");
            var selectedToppings1 = {
                name: "toppings",
                selected: []
            };

            if (cheeseTopping.prop("checked") == true) {
                selectedToppings1.selected.push(cheeseTopping.val());
            }
            if (peperoniTopping.prop("checked") == true) {
                selectedToppings1.selected.push(peperoniTopping.val());
            }
            if (hamTopping.prop("checked") == true) {
                selectedToppings1.selected.push(hamTopping.val());
            }
            console.log(selectedToppings1.selected.length);

            var crust = $("input[name=crust-l]:checked").val();
            var size = $("input[name=size]:checked").val();
            var quantity = parseInt($("#quantity").val());
            pizzaAmount += quantity;

            $(".items-added small").text(pizzaAmount);

            var summary;
            var price;


            switch ($("input[name=size]:checked").val()) {
                case "large":
                    price =
                        myPrices.large * quantity + selectedToppings1.selected.length * 120;
                    break;
                case "medium":
                    price =
                        myPrices.medium * quantity + selectedToppings1.selected.length * 120;
                    break;
                case "small":
                    price =
                        myPrices.small * quantity + selectedToppings1.selected.length * 120;
                    break;
                default:
                    alert("No size selected")
                    break;
            }




            var order1 = new Order(pizza, crust, price, selectedToppings1);

            if (order1.toppings.selected.length == 3 && pizza == "Chicken") {
                summary = "cheese, Peperoni, ham";
            } else if (order1.toppings.selected.length == 2 && pizza == "Chicken") {
                summary =
                    " " + order1.toppings.selected[0] + "," + order1.toppings.selected[1];
            } else if (order1.toppings.selected.length == 1 && pizza == "Chicken") {
                summary = order1.toppings.selected[0];
            } else {
                summary = "No Toppings ";
            }

            $(".cart1").append(
                "<tr>" +
                "<th scope='row'>1</th>" +
                "<td>" +
                order1.type +
                "</td>" +
                "<td>" +
                order1.crust +
                "</td>" +
                "<td>" +
                summary +
                "</td>" +
                "<td> " +
                size +
                "</td>" +
                "<td>" +
                order1.price +
                "</td>" +
                "</tr>"
            );

            finalPrice.push(price);
            $("#submission")
                .delay(500)
                .addClass("btn-unique")
                .text("Added + ✔️ ");
            $(".shopping-cart").show(500);
        }
    });

    // end of chicken pizza logic



    // Periperi pizza logic
    $("#peri").click(function() {
        $(".periperi").slideToggle();
        $("html, body").animate({
                scrollTop: $(".periperi").offset().top
            },
            1000
        );
    });

    $(".periperi").submit(function(e) {
        e.preventDefault();
        if ($("#pquantity").val() == "" || $("#pquantity").val() == 0 || $("#pquantity").val() < 0) {
            alert("Please input the number of pizza you want. It can't be zero or a negative number :)");
        } else {

            var pizza = pizzaFlavour[2];
            var cheeseTopping = $("#pcheese");
            var peperoniTopping = $("#ppeperoni");
            var hamTopping = $("#pham");
            var selectedToppings2 = {
                name: "toppings",
                selected: []
            };

            if (cheeseTopping.prop("checked") == true) {
                selectedToppings2.selected.push(cheeseTopping.val());
            }
            if (peperoniTopping.prop("checked") == true) {
                selectedToppings2.selected.push(peperoniTopping.val());
            }
            if (hamTopping.prop("checked") == true) {
                selectedToppings2.selected.push(hamTopping.val());
            }
            console.log(selectedToppings2.selected.length);

            var crust = $("input[name=pcrust-l]:checked").val();
            var size = $("input[name=psize]:checked").val();
            var quantity = parseInt($("#pquantity").val());
            pizzaAmount += quantity;

            $(".items-added small").text(pizzaAmount);

            var summary;
            var price;


            switch ($("input[name=psize]:checked").val()) {
                case "large":
                    price =
                        myPrices.large * quantity + selectedToppings2.selected.length * 120;
                    break;
                case "medium":
                    price =
                        myPrices.medium * quantity + selectedToppings2.selected.length * 120;
                    break;
                case "small":
                    price =
                        myPrices.small * quantity + selectedToppings2.selected.length * 120;
                    break;
                default:
                    alert("No size selected")
                    break;
            }




            var order2 = new Order(pizza, crust, price, selectedToppings2);
            if (pizza == "Periperi") {
                if (order2.toppings.selected.length == 3) {
                    summary = "cheese, Peperoni, ham";
                } else if (order2.toppings.selected.length == 2) {
                    summary =
                        " " + order2.toppings.selected[0] + "," + order2.toppings.selected[1];
                } else if (order2.toppings.selected.length == 1) {
                    summary = order2.toppings.selected[0];
                } else {
                    summary = "No Toppings ";
                }
            }
            $(".cart1").append(
                "<tr>" +
                "<th scope='row'>2</th>" +
                "<td>" +
                order2.type +
                "</td>" +
                "<td>" +
                order2.crust +
                "</td>" +
                "<td>" +
                summary +
                "</td>" +
                "<td> " +
                size +
                "</td>" +
                "<td>" +
                order2.price +
                "</td>" +
                "</tr>"
            );

            finalPrice.push(price);
            $("#psubmission")
                .delay(500)
                .addClass("btn-unique")
                .text("Added + ✔️ ");
            $(".shopping-cart").show(500);
        }
    });

    // end of periperi pizza logic

    // Veggie pizza logic
    $("#vegi").click(function() {
        $(".veggie").slideToggle();
        $("html, body").animate({
                scrollTop: $(".veggie").offset().top
            },
            1000
        );
    });

    $(".veggie").submit(function(e) {
        e.preventDefault();
        if ($("#vquantity").val() == "" || $("#vquantity").val() == 0 || $("#vquantity").val() < 0) {
            alert("Please input the number of pizza you want. It can't be zero or a negative number :)");
        } else {

            var pizza = pizzaFlavour[2];
            var cheeseTopping = $("#vcheese");
            var peperoniTopping = $("#vpeperoni");
            var hamTopping = $("#vham");
            var selectedToppings3 = {
                name: "toppings",
                selected: []
            };

            if (cheeseTopping.prop("checked") == true) {
                selectedToppings3.selected.push(cheeseTopping.val());
            }
            if (peperoniTopping.prop("checked") == true) {
                selectedToppings3.selected.push(peperoniTopping.val());
            }
            if (hamTopping.prop("checked") == true) {
                selectedToppings3.selected.push(hamTopping.val());
            }
            console.log(selectedToppings3.selected.length);

            var crust = $("input[name=vcrust-l]:checked").val();
            var size = $("input[name=vsize]:checked").val();
            var quantity = parseInt($("#vquantity").val());
            pizzaAmount += quantity;

            $(".items-added small").text(pizzaAmount);

            var summary;
            var price;


            switch ($("input[name=vsize]:checked").val()) {
                case "large":
                    price =
                        myPrices.large * quantity + selectedToppings3.selected.length * 120;
                    break;
                case "medium":
                    price =
                        myPrices.medium * quantity + selectedToppings3.selected.length * 120;
                    break;
                case "small":
                    price =
                        myPrices.small * quantity + selectedToppings3.selected.length * 120;
                    break;
                default:
                    alert("No size selected")
                    break;
            }




            var order3 = new Order(pizza, crust, price, selectedToppings3);
            if (pizza == "Periperi") {
                if (order3.toppings.selected.length == 3) {
                    summary = "cheese, Peperoni, ham";
                } else if (order3.toppings.selected.length == 2) {
                    summary =
                        " " + order3.toppings.selected[0] + "," + order3.toppings.selected[1];
                } else if (order3.toppings.selected.length == 1) {
                    summary = order3.toppings.selected[0];
                } else {
                    summary = "No toppings";
                }
            }
            $(".cart1").append(
                "<tr>" +
                "<th scope='row'>3</th>" +
                "<td>" +
                order3.type +
                "</td>" +
                "<td>" +
                order3.crust +
                "</td>" +
                "<td>" +
                summary +
                "</td>" +
                "<td> " +
                size +
                "</td>" +
                "<td>" +
                order3.price +
                "</td>" +
                "</tr>"
            );

            finalPrice.push(price);
            $("#vsubmission")
                .delay(500)
                .addClass("btn-unique")
                .text("Added + ✔️ ");
            $(".shopping-cart").show(500);
        }
    });

    // end of veggie pizza logic

    $("#delivery").click(function() {
        var location = prompt("Enter your Location");
        if (location == "") {
            $("#delivery").hide();
        } else {
            alert(
                "Thank you. Pizzas will be delivered to " + location + " delivery Is Free"
            );
            $("#delivery").hide();
        }
    });
    $("#checkout").click(function() {
        alert("Thank you");
        location.reload();
    });

    $("#Email").submit(function() {
        Event.preventDefault();
        alert("Gracious" + $("#names").val() + ". Email sent");
    });

})