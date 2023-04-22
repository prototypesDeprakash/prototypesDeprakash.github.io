const accesskey = "Kj62LqyohhgXUGOI3Fp1BN52m6E7ji5lcNddf4q7Zrc";
const formEl= document.querySelector("form");
const SearchInputElement = document.getElementById("search_input");
const SearchResultEl=document.querySelector(".search-results");
const ShowMoreButtonEl = document.getElementById("show-more-button");
let inputData="";
let page=1;

async function searchImages(){ //as im using await it is necessary to use async function
    inputData=SearchInputElement.value;
   // console.log(inputData);
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;//generating url with api
   console.log(url);
   const response = await fetch(url);
   const data = await response.json();
   //console.log(data);
   if(page===1){
    SearchResultEl.innerHTML ="";
   }
   const results = data.results; //array of results1

   results.map((result)=>{ //looping 10 times
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img")
    image.src=result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.textContent=result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    SearchResultEl.appendChild(imageWrapper);
   });
   //creeating div automatically
 
page++;
   if(page>1){
    ShowMoreButtonEl.style.display ="block";
   }
   console.log(results);
}


formEl.addEventListener("submit" ,(event)=>{
    event.preventDefault()//to prevent auto refreshing
    page=1;
    searchImages();
   // console.log("submitted");  
});

ShowMoreButtonEl.addEventListener("click",()=>{
    searchImages();
})
