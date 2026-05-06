// select the form 
const bmiForm = document.querySelector("#bmiForm");

// intercept the form's submit event
bmiForm.addEventListener("submit", function (event) {
    // prevents the default behaviour from happening
    event.preventDefault();

    // get all the form data
    // important:for this to work, all the 
    // form elements must have a name attrbute
    const formData = new FormData(bmiForm);
    const formValues = Object.fromEntries(formData);
    // for checkboxes, we have to use the getAll function
    formValues.concerns = formData.getAll("concerns");

    let bmi = 0;
    if (formValues.units == "metric") {
        bmi = formValues.weight / formValues.height ** 2;
    } else {
        bmi = (formValues.weight / formValues.height ** 2) * 703;
    }

    const resultDiv = document.querySelector("#result");
    resultDiv.innerText = `Your BMI is ${bmi}`;

})

// change the labels of the weight and height depending on the radio button
const unitRadios = document.querySelectorAll(".units");
for (let radioButton of unitRadios) {
    radioButton.addEventListener("change", function () {
        const selectedRadioButton = document.querySelector(".units:checked");
        if (selectedRadioButton.value == "metric") {
            document.querySelector("#weight-label").innerText = "Weight (kg)";
            document.querySelector("#height-label").innerText = "Height (m)";
        } else {
            document.querySelector("#weight-label").innerText = "Weight (pounds)";
            document.querySelector("#height-label").innerText = "Height (inches)";
        }
    })
}