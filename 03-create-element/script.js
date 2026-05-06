document.querySelector("#addBtn").addEventListener("click", function(){
    const newNumber = document.querySelector("#newNumber").value;
    
    // document.createElement allows us to create a new DOM
    // element
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${newNumber} <button>Say Hi</button>`

    // get the parent of the new list item
    const parent = document.querySelector("#numberList");
    parent.appendChild(newListItem);
})