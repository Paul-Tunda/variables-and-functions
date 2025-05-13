document.getElementById("my_button").onclick = function () {

    startProgram();

    function startProgram() {
        let age = document.getElementById("age").value.trim();
        let employmentStatus = document.getElementById("employment_status").value.trim().toLowerCase();

        // Validate inputs
        if (age === "" || employmentStatus === "") {
            document.getElementById("warning_message").innerHTML = "Please enter the required information.";
            return;
        }

        if(isNaN(age)){

            document.getElementById("warning_message").innerHTML = "Please enter a valid age.";
            return;
        }

        // Clear warning
        document.getElementById("warning_message").innerHTML = "";

        let applicantAge = Number(age);
        let isUserEmployed = isEmployed(employmentStatus);

        document.getElementById("eligibility").innerHTML = checkEligibility(applicantAge, isUserEmployed);

    }

    function checkEligibility(age, isEmployed) {
        if (age >= 18 && isEmployed) {
            return "You are eligible for the program.";
        } else if (age >= 18 && !isEmployed) {
            return "You are tentatively eligible for the program.";
        } else {
            return "You are not eligible for the program.";
        }
    }

    function isEmployed(employmentStatus) {
        return employmentStatus.toLowerCase() === "employed";
    }
};
