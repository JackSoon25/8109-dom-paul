document.querySelector("#submitBtn")
        .addEventListener("click", function(){
            const userNameEl = document.querySelector("#userName");
            const userName = userNameEl.value;

            // get the user email
            const userEmail = document.querySelector("#userEmail").value;

            // get which radio button been checked
            // the radio button that has been checked will have the pesudo-class 'checked'
            const selectedAgeGroupEl = document.querySelector(".age-group:checked");
            const ageGroup = selectedAgeGroupEl.value;

            // when we want to convert one array to another array, but slightly different,
            // it's known mapping
            
            // get all the selected checkboxes
            const selectedDestinationsEl = document.querySelectorAll(".destinations:checked");

            // we want to get a new array from the selected checkboxes, but the array will contain
            // the value of each of the selected checkboxes
            let selectedDestinations = [];
            for (let checkbox of selectedDestinationsEl) {
                selectedDestinations.push(checkbox.value);
            }

            // get the counrty of the user
            const country = document.querySelector("#country").value;

            // alternatively
            // const countryEl = document.querySelector("#country");
            // const country = countryEl.value


            console.log("User name =", userName);
            console.log("User Email =", userEmail);
            console.log("Age Group =", ageGroup);
            console.log("Selected destinations =", selectedDestinations);
            console.log("selected country =", country)
        })