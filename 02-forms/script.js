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

            console.log("User name =", userName);
            console.log("User Email =", userEmail);
            console.log("Age Group =", ageGroup);
        })