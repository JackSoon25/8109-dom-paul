let changeBtnEl = document.querySelector("#changeBtn");

// first argument - name of the event
// second argument - the function to execute when the
// event is detected on the element
changeBtnEl.addEventListener("click", function () {
    // the `document` object is available
    // as long as the JavaScript is ran
    // as part of html

    // when doing frontend programming,
    // we will select, THEN manipulate

    // document.querySelector accepts one parameter
    // - the selector of the element (same as in CSS)
    let titleEl = document.querySelector("#title");
    titleEl.style.fontFamily = "Verdana";
    titleEl.style.color = "green";
    titleEl.innerText = "GreatTours Private Limited";

    // document.querySelector will select the first match
    // only
    let firstH2El = document.querySelector("h2");
    firstH2El.style.textDecoration = "underline";

    // use document.querySelectorAll to select more than one
    // it will return an array of elements
    let recommendItemsEl = document.querySelectorAll(".recommended");

    // since it will return an array, we must use a loop to extract
    // one element at a time to manipulate them
    let i = 0;
    while (i < recommendItemsEl.length) {
        recommendItemsEl[i].style.backgroundColor = "green";
        i = i + 1;
    }

    // the `for` is like the `while` loop but more streamlined
    let allItemEl = document.querySelectorAll('li');
    // for (let i =0; i < allItemEl.length; i++) {
    //     allItemEl[i].style.color = "orange";
    // }

    // the `for of` loop allows us to skip the indexing
    for (let item of allItemEl) {
        item.style.color = "orange";
    }

    // advanced syntax: apply a function to each element in the array
    let allH2El = document.querySelectorAll("h2");
    allH2El.forEach(function (el) {
        el.style.color = "orange";
    })


})


