const pricingTable = {
    priority: {
        weekdays: {
            adult: 80,
            children: 50
        },
        weekends: {
            adult: 100,
            children: 75
        }
    },
    nonPriority: {
        weekdays: {
            adult: 60,
            children: 30
        },
        weekends: {
            adult: 70,
            children: 35
        }
    }
}

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", function () {

    // select all the div with class invalid-feedback
    const allError = document.querySelectorAll('.invalid-feedback');
    for (let e of allError) {
        e.innerText = "";
    }

    const ticketType = document.querySelector(".ticket-type:checked").value;
    const date = document.querySelector("#date").value;
    const name = document.querySelector("#name").value;
    const adultTickets = document.querySelector("#adult-tickets").value;
    const childrenTickets = document.querySelector("#children-tickets").value;

    // calculate the day of the week
    const dateObject = new Date(date);
    const todayDateObject = new Date();
    const diffInTime = dateObject - todayDateObject;

    // Convert to days: milliseconds / (ms * sec * min * hr)
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) {
        document.querySelector("#date-error").innerText = "Cannot book tickets in the past";

    }
    if (diffInDays > 90) {
         document.querySelector("#date-error").innerText = "Cannot book more than 90 days in advance";
    }

    // if diffInDays is NaN or 0
    if (!diffInDays) {
         document.querySelector("#date-error").innerText = "Please select a valid date";
    }
    

    // check if the name is an empty string
    // some values in JavaScript are considered to be falsy.
    // they are the same as false when used with logical operators: "", NaN, undefined, null, 0
    if (!name) {
        document.querySelector("#name-error").innerText = "Please enter your name"
    }

    if (adultTickets < 1) {
        document.querySelector("#adult-ticket-error").innerText = "Must have at least 1 adult ticket";
    }

    if (childrenTickets < 0) {
        document.querySelector("#children-ticket-error").innerText = "Cannot buy negative amount"
    }

    // calculate ticket price
    // check if it's weekday or weekend
    let day = "";
    if (dateObject.getDay() >= 1 && dateObject.getDay() <= 5) {
        day = "weekdays";
    } else {
        day = "weekends";
    }
    console.log("day =", day);

    // if ticketType is 'priority'
    // and if day is 'weekend'
    // then pricingTable[ticketType][day]
    //    => pricingTable["priority"]["weekends"]
    //    => pricingTable.priority.weekends
    const adultPrice = pricingTable[ticketType][day].adult;
    console.log("Adult price =", adultPrice);
    const childrenPrice = pricingTable[ticketType][day].children;
    console.log("Children Price =", childrenPrice)

    const total = adultTickets * adultPrice + childrenTickets * childrenPrice;
    console.log("total =", total);

    document.querySelector("#total").innerText = `Total: ${total}`
    document.querySelector("#total").classList.remove("d-none")

})