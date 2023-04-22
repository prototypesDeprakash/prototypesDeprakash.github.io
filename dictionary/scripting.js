const inputEl=document.getElementById("input");
async function fetchAPI(word){
const infoTextEl = document.getElementById("info-text");
const MeaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
    try{
        infoTextEl.style.display="block"
        MeaningContainerEl.style.display="none"
       
        infoTextEl.innerText =`Searching the meaning of "${word}"`//loading until fetching data
        const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json())//.then is used to wait for the response and then do the action
        if(result.title){
            MeaningContainerEl.style.display="block"
            infoTextEl.style.display="none"
            titleEl.innerText = word;
            meaningEl.innerText="Wtf have you entered!!!";
            audioEl.style.display="none";
        }
        else{
            infoTextEl.style.display="none"
            MeaningContainerEl.style.display="block"
            audioEl.style.display = "inline-flex"
            titleEl.innerText = result[0].word;
            meaningEl.innerText=result[0].meanings[0].definitions[0].definition;
            audioEl.src=result[0].phonetics[0].audio;//these are the arrays in the api and im just getting a single meaning 
        }
        
    }catch(error){
        console.log(error);
    }

 
}
inputEl.addEventListener("keyup" ,(e)=>{//checking if the input box is not empty and checking if the user presses the enter key
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    } 
});