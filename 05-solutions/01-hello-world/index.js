async function loadData() {
    // const response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
  
    // if we are getting from our own server
    // JavaScript find the file relative to the javascript file
    const response = await axios.get("hello.txt");
   
    console.log(response.data);
    document.querySelector("#output").innerText = response.data;
}
loadData();