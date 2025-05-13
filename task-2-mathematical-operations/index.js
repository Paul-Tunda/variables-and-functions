
document.getElementById("my_button").onclick = function() {

    startProgram();

    function startProgram(){

        // Get the values from the input fields
        let numberOfUnits = document.getElementById("quantity").value.trim();
        let pricePerUnit = document.getElementById("price").value.trim();
        let taxRate = document.getElementById("tax_rate").value.trim();



        // Check if the input fields are empty
        if (numberOfUnits === "" || pricePerUnit === "" || taxRate === "") {
            document.getElementById("warning_message").innerHTML= "Please enter the required information.";
            return;
        }



        // Clear warning message if input is valid
        document.getElementById("warning_message").innerHTML = "";



        // Capitalize the first letter of each name
        let quantity = Number(numberOfUnits);
        let price = Number(pricePerUnit);
        let rate = Number(taxRate);

        // Format the full name and displaying name initials
        let totalCost = calculateTotalCost(price, quantity, rate);
        document.getElementById("total_cost").innerHTML = `Your total cost is $${totalCost}`;

    }

    function calculateTotalCost  (price, quantity, taxRate) {

        return price * quantity * (1 + taxRate);

    }

}