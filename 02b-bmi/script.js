const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(){
    // state / input
    const emailInputEl = document.querySelector("#email");
    const email = emailInputEl.value;

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;

    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const units = document.querySelector(".units:checked").value;

    // map from the selected checkbox values to their values
    let selectedConcerns = [];
    let selectedCheckboxes = document.querySelectorAll(".concerns:checked");
    for (let checkbox of selectedCheckboxes) {
        selectedConcerns.push(checkbox.value)
    }


    let bmi = 0;
    // processing
    if (units == "metric") {
        bmi = weight / height ** 2;
    } else if (units == "imperial") {
        bmi = (weight / height ** 2) * 703;
    }
    console.log("bmi =", bmi);
    console.log(email, firstName, lastName, selectedConcerns)
})