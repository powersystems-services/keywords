const btnSubmit = document.getElementById('submit');
const btnClear = document.getElementById('clear');
const textBox = document.getElementById('textInput');
let resultsDiv = document.getElementById('results');

let btnCopy = document.getElementById("copyclipboard");

let strDocument

import { EN_Keywords_E_mobility, EN_Keywords_Power_Systems, EN_Keywords_Services, EN_Keywords_Utilities, CN_Keywords_E_mobility, CN_Keywords_Power_Systems, CN_Keywords_Services, CN_Keywords_Utilities, KR_Keywords_E_mobility, KR_Keywords_Power_Systems, KR_Keywords_Services, KR_Keywords_Utilities, DE_Keywords_E_mobility, DE_Keywords_Power_Systems, DE_Keywords_Services, DE_Keywords_Utilities, ES_Keywords_E_mobility, ES_Keywords_Power_Systems, ES_Keywords_Services, ES_Keywords_Utilities, FR_Keywords_E_mobility, FR_Keywords_Power_Systems, FR_Keywords_Services, FR_Keywords_Utilities } from "./keywords.js";


let languageIndex, languageText, languageValue, categoryIndex, categoryText
let combinedKeywords = [[EN_Keywords_Power_Systems, EN_Keywords_Services , EN_Keywords_Utilities, EN_Keywords_E_mobility],[CN_Keywords_Power_Systems, CN_Keywords_Services,CN_Keywords_Utilities, CN_Keywords_E_mobility], [KR_Keywords_Power_Systems, KR_Keywords_Services , KR_Keywords_Utilities, KR_Keywords_E_mobility], [DE_Keywords_Power_Systems, DE_Keywords_Services,DE_Keywords_Utilities, DE_Keywords_E_mobility], [ES_Keywords_Power_Systems,ES_Keywords_Services,ES_Keywords_Utilities, ES_Keywords_E_mobility], [FR_Keywords_Power_Systems, FR_Keywords_Services , FR_Keywords_Utilities, FR_Keywords_E_mobility]]
//EN, CN, KR, DE, ES, FR
// Power Systems, Services, Utilities, E-mobility 

function setParameters() {
    var getLanguage = document.getElementById('language');
    languageIndex = getLanguage.options[getLanguage.selectedIndex].index;
    languageText = getLanguage.options[getLanguage.selectedIndex].text;
    languageValue = getLanguage.options[getLanguage.selectedIndex].value; 

    var getCategory = document.getElementById('category');
    categoryIndex = getCategory.options[getCategory.selectedIndex].index;
    categoryText = getCategory.options[getCategory.selectedIndex].text; 
}


function getWordCount(text) {
    let counter = 0; 
    switch(languageValue) {
        case "CN":
        case "KR":
            return text.length - text.split(" ").length + 1;
        default:
            // console.log(text.split(" ").length);

            // text.split(" ").forEach(function(e){
            //     console.log(e);
            //     counter++;
            //     console.log(counter);
            // })


            // /\w*([’-]+[a-z]+)?/
            let re = new RegExp( /\w+\S*/, 'g')
            let wordCount = strDocument.match(re).length
            return(wordCount) 


            // strDocument.match(re).forEach(function(e){
            //     console.log(e)
            // })
    }
}

btnCopy.addEventListener("click", function(event) {
    event.preventDefault()

    let children = resultsDiv.childNodes;
    let results = children[0].innerText;
    for(let i = 1; i < children.length; i++) {
        results = results.concat("\n", children[i].innerText)
    }
    // console.log(results)
    navigator.clipboard.writeText(results)

})  

btnSubmit.addEventListener("click", function(event){
    let resultDict = {}
    event.preventDefault()
    
    while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }


    setParameters()
    let arr = combinedKeywords[languageIndex][categoryIndex]

    if (textBox.value != "") {
        strDocument = textBox.value.trim();
        btnCopy.style.display = "block";
    }
    else {
        let p = document.createElement("p")
        p.innerHTML = "Please input something in the textbox."
        document.getElementById("results").append(p)
        return; 
    }


    arr.forEach(function(i) {
        let re

        switch(languageValue){
            case "CN" : 
            case "KR" :
                re = new RegExp( i, 'gi')
                break; 
            default:
                re = new RegExp('\\b' + i + '\\b','gi')        
        }


        if(re.test(strDocument) == true) {
            let count = strDocument.match(re).length;

            if(count != null && count > 0) {
                resultDict[i] = strDocument.match(re).length
            }
        }

    })

    let p = document.createElement("p")
    p.innerText = "--RESULTS--"
    document.getElementById('results').append(p)
    //store results in a dict then loop through dict to get the results

    let counter = 0
    for(let key in resultDict) {
        let p = document.createElement("p")
        p.innerText = key + ": " + resultDict[key]
        document.getElementById('results').append(p)
        counter += resultDict[key]

    }

    let p0 = document.createElement("p")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    let wordCount = getWordCount(textBox.value)

    p0.innerText = "---"
    p1.innerText = "Total Number of Keywords: " + Object.keys(resultDict).length 
    p2.innerText = "Total Number of Mentions: " + counter
    p3.innerText = "Word Count: " + wordCount   
    p4.innerText = "Keyword Percentage: " + Number(Math.round(counter/wordCount * 100 + 'e2') + 'e-2') + "%"

    document.getElementById('results').append(p0)
    document.getElementById('results').append(p1)
    document.getElementById('results').append(p2)
    document.getElementById('results').append(p3)
    document.getElementById('results').append(p4)
})

btnClear.addEventListener("click", function(event){
    event.preventDefault()
    textBox.value=""
    while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
    btnCopy.style.display = "none";
})

window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key ==="Enter") {
        btnSubmit.click()
    }
})




