const accessKey =

constformEl = document.querySelector("form");
const inputEl = document.getElementByld("search-input");
const searchResults = document.querySelector(".search-results");
const showmore = document.getElementById("shpw-more-button");

let inputData ="";
let page = 1;

async function searchImages(){
    inputData =inputEl.value;
    const url = 

    constresponse = await fetch(url);
    const data = await Response.json();

    const results = data.results;

    if(page ===1){
        searchResults.innerHTML = "";
    }

    results.map((result)=>{
        const imageWrapper = document.createElement(`div`);
        imageWrapper.classList.add("search-result");
        const image = document.createElement(`img`);
        image.src = result.urls.small;
        console.log(result.urls.small);
        image.alt = result.alt_description;
        const imageLink = document.createElement(`a`);
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });

    page++
    if(page > 1){
        showMore.style.display="block";
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
})
showmore.addEventListener("click",()=>{
    searchImages();
})
 