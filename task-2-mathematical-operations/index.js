
document.getElementById("my_button").onclick = function() {

    startProgram();

    function startProgram(){

        // Get the values from the input fields
        let firstName = document.getElementById("first_name").value.trim();
        let lastName = document.getElementById("last_name").value.trim();



        // Check if the input fields are empty
        if (firstName === "" || lastName === "") {
            document.getElementById("warning_message").innerHTML= "Please enter the required information.";
            return;
        }



        // Clear warning message if input is valid
        document.getElementById("warning_message").innerHTML = "";



        // Capitalize the first letter of each name
        let name1 = firstName.charAt(0).toUpperCase().concat(firstName.slice(1));
        let name2 = lastName.charAt(0).toUpperCase().concat(lastName.slice(1));

        // Format the full name and displaying name initials
        let fullName = formatFullName(name1, name2);
        document.getElementById("greeting").innerHTML = `Nice to have you here, ${fullName}!`;
        document.getElementById("name_initials").innerHTML = `Initials: ${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`

    }

    function calculateTotalCost  (price, quantity, taxRate) {

        return price * quantity * (1 + taxRate);

    }

}