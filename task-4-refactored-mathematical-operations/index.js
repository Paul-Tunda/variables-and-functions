
document.getElementById("my_button").onclick = function() {

    startProgram();

    function startProgram(){

        // Get the values from the input fields
        let numberOfUnits = document.getElementById("quantity").value.trim();
        let pricePerUnit = document.getElementById("price").value.trim();
        let discount = document.getElementById("discount").value.trim();
        let taxRate = document.getElementById("tax_rate").value.trim();



        // Check if the input fields are empty
        if (numberOfUnits === "" || pricePerUnit === "" || taxRate === "") {
            document.getElementById("warning_message").innerHTML= "Please enter the required information.";
            return;
        }





        if(isNaN(numberOfUnits) || isNaN(pricePerUnit) || isNaN(discount) || isNaN(taxRate)){
            document.getElementById("warning_message").innerHTML = "Please enter a valid number.";
            return;
        }



        // Clear warning message if input is valid
        document.getElementById("warning_message").innerHTML = "";



        // Capitalize the first letter of each name
        let quantity = Number(numberOfUnits);
        let price = Number(pricePerUnit);
        let discountAmount = Number(discount);
        let rate = Number(taxRate);


        if(numberOfUnits <= 0 || pricePerUnit <= 0 || discount <= 0 || taxRate <= 0){
            document.getElementById("warning_message").innerHTML = "Please enter a number greater than 0.";
            return;
        }

        // Clear warning message if input is valid
        document.getElementById("warning_message").innerHTML = "";

        let totalCost = 0;

        if(discountAmount > 0){
            totalCost = discountedTotalCost(price, quantity, discountAmount, rate);
            document.getElementById("total_cost").innerHTML = `Your total cost is $${totalCost}`;
        }else{
            totalCost = calculateTotalCost(price, quantity, rate);
            document.getElementById("total_cost").innerHTML = `Your total cost is $${totalCost}`;
        }

    }

    function calculateTotalCost  (price, quantity, taxRate) {

        return price * quantity * (1 + taxRate);

    }

    function discountedTotalCost  (price, quantity, discount, taxRate) {

        return (price - ((discount/100) * price)) * quantity * (1 + taxRate);

    }

}