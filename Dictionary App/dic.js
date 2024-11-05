const form=document.querySelector('form');
const resultDiv=document.querySelector('.result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getwordInfo(form.elements[0].value);
})
const getwordInfo=async(word)=>{
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data= await response.json();
    // alert("word:" + word);
    let definitions=data[0].meanings[0].definitions[0];

    resultDiv.innerHTML=`
        <h2><storng>Word:</strong>${data[0].word}</h2>
        <p>${data[0].meanings[0].partofSpeech}</p>
        <p><stong>Meaning:</strong>${definitions.definition===undefined? "Not Found":


            definitions.definition}</p>
        <p><stong>Example:</strong>${definitions.example}</p>
         <p><stong>Antonyms:</strong>


         
    `;
    if(definitions.antonyms.length===0){
        resultDiv.innerHTML +=`<p>Not Found</p>`;
    }

    for(let i=0;i<definitions.antonyms.length;i++){
        resultDiv.innerHTML +=`<li>${definitions.antonyms[i]}</li>`
    }
    console.log(data)
}

const arr=[5,1,3,2,6]
function double(x){
    return x*2;
}


const output=arr.map(double)
console.log(output);