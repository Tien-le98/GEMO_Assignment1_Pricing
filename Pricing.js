const drink_size_hot = {
    "S": 0,
    "M": 0.5
}

const drink_size = {
    "S": 0,
    "M": 0.5,
    "L": 1,
    "XL": 1.5
}

const milk_type = {
    "whole": 0,
    "n": 0,
    "almond": 0.5
}

const drink_type = ["hot", "cold", "blended", "milk tea"];

const base_price_coffee = 2;

const whipped_cream = 0.5;

const base_price_milktea = 2.25

const extra_chocolate = 0.5

const list_drink = [];

let order_drink = prompt("Do you want to add a new drink? - Y for yes, N for no: ");
while (order_drink.toUpperCase() != "Y" && order_drink.toUpperCase() != "N") {
    order_drink = prompt("Please choose a valid option to add a new item - Y for yes, N for no: ");
}

while (order_drink.toUpperCase() == "Y") {
    function Drink() {
        this.type = prompt("Which drink type would you like? - hot, cold, blended, milk tea: ");
        while (!drink_type.includes(this.type.toLowerCase())) {
            this.type = prompt("Which drink type would you like? - hot, cold, blended, milk tea: ");
        }
        this.size = prompt("Which size would you like? - hot (S, M), other (S, M, L, XL): ");
        if (this.type.toLowerCase() == "hot") {
            while (!drink_size_hot.hasOwnProperty(this.size.toUpperCase())) {
                this.size = prompt("Which size would you like? - S, M: ");  
        }} else {
            while (!drink_size.hasOwnProperty(this.size.toUpperCase())) {
                this.size = prompt("Which size would you like? - S, M, L, XL: ");  
        }}
        if (this.type.toLowerCase() != "milk tea") {
            this.cream = prompt("Do you want to add whipped cream to your drink? - Y for yes, N for no: ");
            while (this.cream.toUpperCase() != "Y" && this.cream.toUpperCase() != "N") {
                this.cream = prompt("Please choose a valid option for adding whipped cream - Y for yes, N for no: ");
        }} else {this.cream = "N"};
        this.milk = prompt("Do you want to add milk? - whole, almond, N for no: ");
        while (!milk_type.hasOwnProperty(this.milk.toLowerCase())) {
            this.milk = prompt("Please choose a valid option - whole, almond, N for no: ");
        }
        if (this.type == "hot") {
            this.chocolate = prompt("How many pumps do you want? - integers from 0 to 6: ");
            while (/^\d+\.\d+$/.test(this.chocolate) || parseInt(this.chocolate) < 0 || parseInt(this.chocolate) > 6) {
                this.chocolate = prompt("Please input a valid number of pumps - integers from 0 to 6: ");
            }} else {this.chocolate = 0};

        
        this.calculatePrice1 = function () {
            let extra_charge = 0;

            if (this.type.toLowerCase() == "blended") {
                extra_charge += 1;
            }
            if (this.type.toLowerCase() == "hot") {
                extra_charge += drink_size_hot[this.size.toUpperCase()];
            } else {
                extra_charge += drink_size[this.size.toUpperCase()];
            }
            if (this.cream.toUpperCase() == "Y") {
                extra_charge += whipped_cream;
            }
            
            extra_charge += milk_type[this.milk.toLowerCase()]

            if (this.chocolate > 2){
                extra_charge += extra_chocolate * (this.chocolate - 2);
            }

            if (this.type.toLowerCase() != "milk tea") {
                return base_price_coffee + extra_charge;} else {
                    return base_price_milktea + extra_charge;
                }
            
        };
    }

    let drink = new Drink();
    list_drink.push(["Drink type is: " + drink.type.toLocaleLowerCase(), "Size is: " + drink.size.toUpperCase(), drink.cream + " whipped cream", drink.milk + " milk", drink.chocolate + " pumps of chocolate sauce", drink.calculatePrice1()]);
    order_drink = prompt("Do you want to add a new drink? - Y for yes, N for no: ");
    while (order_drink.toUpperCase() != "Y" && order_drink.toUpperCase() != "N") {
        order_drink = prompt("Please choose a valid option to add a new item - Y for yes, N for no: ");}
}    

const list_breakfast = [];

const base_price_breakfast = 3;

const breakfast_type = ["S", "B"]

const breakfast_option = {
    "S": 1,
    "B": 0.5
}

let order_breakfast = prompt("Do you want to order a breakfast? - Y for yes, N for no: ");
while (order_breakfast.toUpperCase() != "Y" && order_drink.toUpperCase() != "N") {
    order_breakfast = prompt("Please choose a valid option to add a new item - Y for yes, N for no: ");
}

while (order_breakfast.toUpperCase() == "Y") {
    function Breakfast() {
        this.type = prompt("What would you like for breakfast? - S for sandwiches, B for bagels: ");
        while (!breakfast_type.includes(this.type.toUpperCase())) {
            this.type = prompt("Please choose a valid option for breakfast - S for sandwiches, B for bagels: ");
        }
        if (this.type.toUpperCase == "S") {
            this.option = prompt("Do you want to add egg or turkey to your sandwich? - Y for yes, N for no: ");
            while (this.option.toUpperCase() != "Y" && this.option.toUpperCase() != "N") {
                this.option = prompt("Please choose a valid option to add egg or turkey? - Y for yes, N for no: ");
            }} else {
                this.option = prompt("Do you want to add butter or cream to your bagels? - Y for yes, N for no: ");
                while (this.option.toUpperCase() != "Y" && this.option.toUpperCase() != "N") {
                    this.option = prompt("Please choose a valid option to add butter or cream - Y for yes, N for no: ");}}

        this.calculatePrice4 = function() {
            let extra_price = 0;
            if (this.option.toUpperCase() == "Y") {
                extra_price += breakfast_option[this.type.toUpperCase()];}
            return base_price_breakfast + extra_price;
            
        }}
        
    let breakfast = new Breakfast();
    list_breakfast.push(["Breakfast type is : " + breakfast.type.toUpperCase(), "Breakfast option is: " + breakfast.option, breakfast.calculatePrice4()]);
    order_breakfast = prompt("Do you want to order a breakfast? - Y for yes, N for no: ");
    while (order_breakfast.toUpperCase() != "Y" && order_breakfast.toUpperCase() != "N") {
        order_breakfast = prompt("Please choose a valid option to add a new item - Y for yes, N for no: ");}
}  


const order_list = [];

for (let i = 0; i < list_drink.length; i++) {order_list.push(list_drink[i])};

for (let i = 0; i < list_breakfast.length; i++) {order_list.push(list_breakfast[i])};

let total_price = 0;

for(let i = 0; i < order_list.length; i++) {total_price += order_list[i][order_list[i].length - 1]}

let tax = 0;

tax = total_price * 0.0725;

total_price += tax;

for (let i = 0; i < order_list.length; i++) {console.log(order_list[i])};

console.log("Tax is : " + tax);

console.log('Total price is: ' + total_price);