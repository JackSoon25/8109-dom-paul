const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

// get the data automatically on page load
// // when we call axios.get, it returns a promise
// // a promise is a function call that is still pending 
// // (meaning it being processing)
// const promise = axios.get(url);

// // how do we tell the promise to do something when it is finished?
// // .then() will be called when the promise finished
// // and the return of the promise will be sent to the first paramter
// // of the anomyous function
// promise.then(function(results){
//     console.log("promise finished");
//     console.log("data =", results.data);
//     document.querySelector("#output").innerText = results.data;
// })

// console.log("End of program");

// get data on button press
document.querySelector("#getDataBtn").addEventListener("click", function(){
    const promise = axios.get(url);
    promise.then(function(response){
        document.querySelector("#output").innerText = response.data;
    })
})