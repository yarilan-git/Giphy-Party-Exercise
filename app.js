// Add a listener to the Submit button
const submitBtn = document.querySelector("#subKey");
submitBtn.addEventListener("click", getGIFs);

// Add a listener to the Remove button
const removeBtn = document.querySelector("#removeButton");
removeBtn.addEventListener("click", removeGifs);

// Initialize variables
const gifsArea = document.querySelector("#gifs");
const APIKey = "IdbSkASW3LgYSiy9evCGiDqApeygNznc";
const baseURL = "http://api.giphy.com/v1/gifs/search";

// Funtion to search for gifs
async function getGIFs(e) {
    e.preventDefault();

    // Build the params object for the giphy request
    const search = document.querySelector("#search"); 
    const params = { params : {api_key: APIKey, q : search.value}};         

    // Execute the request to giphy
    try {
        const result = await axios.get(baseURL, params);        
        const img = document.createElement("img");        

        // Append the first result gif to the page
        img.src=result.data.data[0].images.preview_webp.url;        
        gifsArea.append(img);   

        // Clear the search term input field
        search.value = ''; 
    } catch {
        alert("There was a problem finding gifs");
    }
} 

// Function to clear the gifs area on the page
function removeGifs() {
    gifsArea.innerHTML = '';
}

