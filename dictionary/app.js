const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let meaning = document.querySelector(".meaning");
let synonim= document.querySelector(".synonyms");
let partOfSpeach=document.querySelector(".partOfSpeach");
let phonetic=document.querySelector(".phonetics");
let antonym=document.querySelector(".antonym");
let res;
let btnSound=document.querySelector(".btn-sound");
let sound=document.querySelector(".sound");


let getMeaning = async () => {
    if(text.value==""){
        alert("no");
    }
    let word = text.value;
    let updatedUrl = url + word;
    res = await fetch(updatedUrl);
    let data = await res.json();

    
    
    
    if(data.length>0){
        let meaningText=data[0].meanings[0].definitions[0].definition;
        let synonimsText=data[0].meanings[0].synonyms[0];
        let partOfSpeachText=data[0].meanings[0].partOfSpeech;
        let phoneticsText=data[0].phonetic;
        let antonymText=data[0].meanings[0].antonyms[0]+","+data[0].meanings[0].antonyms[1];
        meaning.innerText=meaningText;
        synonim.innerText=synonimsText;
        partOfSpeach.innerText=partOfSpeachText;
        phonetic.innerText=phoneticsText;
        antonym.innerText=antonymText;
        console.log(data);
    }
    else if(data.length==null){
        alert("not found or check the speling");
        meaning.innerText="";
        synonim.innerText="";
        partOfSpeach.innerText="";
        phonetic.innerText="";
        antonym.innerText="";
    } 
    else if(text.value==""){
        alert("no");
        meaning.innerText="";
        synonim.innerText="";
        partOfSpeach.innerText="";
        phonetic.innerText="";
        antonym.innerText="";
        
    }
}
btn.addEventListener("click", getMeaning);

