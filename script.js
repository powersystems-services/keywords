const btnSubmit = document.getElementById('submit');
const btnClear = document.getElementById('clear');
const textBox = document.getElementById('textInput');
let resultsDiv = document.getElementById('results');
let btnCopy = document.getElementById("copyclipboard");
let strDocument

import { EN_Keywords_E_mobility, EN_Keywords_Power_Systems, EN_Keywords_Services, EN_Keywords_Utilities, CN_Keywords_E_mobility, CN_Keywords_Power_Systems, CN_Keywords_Services, CN_Keywords_Utilities, KR_Keywords_E_mobility, KR_Keywords_Power_Systems, KR_Keywords_Services, KR_Keywords_Utilities, DE_Keywords_E_mobility, DE_Keywords_Power_Systems, DE_Keywords_Services, DE_Keywords_Utilities, ES_Keywords_E_mobility, ES_Keywords_Power_Systems, ES_Keywords_Services, ES_Keywords_Utilities, FR_Keywords_E_mobility, FR_Keywords_Power_Systems, FR_Keywords_Services, FR_Keywords_Utilities, PL_Keywords_Power_Systems, PL_Keywords_Services, PL_Keywords_Utilities, PL_Keywords_E_mobility,VN_Keywords_E_mobility,VN_Keywords_Power_Systems,VN_Keywords_Services,VN_Keywords_Utilities, PT_Keywords_Power_Systems,PT_Keywords_Services,PT_Keywords_E_mobility, PT_Keywords_Utilities,BG_Keywords_Power_Systems,BG_Keywords_E_mobility,BG_Keywords_Services,BG_Keywords_Utilities,HR_Keywords_Power_Systems,HR_Keywords_Services,HR_Keywords_Utilities,HR_Keywords_E_mobility,CZ_Keywords_Power_Systems,CZ_Keywords_Services,CZ_Keywords_Utilities,CZ_Keywords_E_mobility,DK_Keywords_Power_Systems,DK_Keywords_Services,DK_Keywords_E_mobility,DK_Keywords_Utilities,NL_Keywords_Power_Systems,NL_Keywords_Services,NL_Keywords_Utilities,NL_Keywords_E_mobility,FI_Keywords_Power_Systems,FI_Keywords_Services,FI_Keywords_Utilities,FI_Keywords_E_mobility,GR_Keywords_Power_Systems,GR_Keywords_Services,GR_Keywords_E_mobility,GR_Keywords_Utilities,IL_Keywords_Power_Systems,IL_Keywords_Services,IL_Keywords_E_mobility,IL_Keywords_Utilities,HU_Keywords_Power_Systems,HU_Keywords_Services,HU_Keywords_Services,HU_Keywords_E_mobility,ID_Keywords_Power_Systems,ID_Keywords_Services,ID_Keywords_E_mobility,ID_Keywords_Utilities, IT_Keywords_Power_Systems,IT_Keywords_Services,IT_Keywords_Utilities,IT_Keywords_E_mobility,JP_Keywords_Power_Systems,JP_Keywords_Services,JP_Keywords_E_mobility,JP_Keywords_Utilities,MY_Keywords_Power_Systems,MY_Keywords_Services,MY_Keywords_Utilities,MY_Keywords_E_mobility,NO_Keywords_Power_Systems,NO_Keywords_Services,NO_Keywords_Utilities,NO_Keywords_E_mobility,RO_Keywords_Power_Systems,RO_Keywords_Services,RO_Keywords_Utilities,RO_Keywords_E_mobility,RU_Keywords_Power_Systems,RU_Keywords_Services,RU_Keywords_Utilities,RU_Keywords_E_mobility,RS_Keywords_Power_Systems,RS_Keywords_Services,RS_Keywords_Utilities,RS_Keywords_E_mobility,SK_Keywords_Power_Systems,SK_Keywords_Services,SK_Keywords_E_mobility,SK_Keywords_Utilities,SI_Keywords_Power_Systems,SI_Keywords_Services,SI_Keywords_E_mobility,SI_Keywords_Utilities,SE_Keywords_Power_Systems,SE_Keywords_Services,SE_Keywords_E_mobility,SE_Keywords_Utilities, TH_Keywords_Power_Systems,TH_Keywords_Services,TH_Keywords_E_mobility,TH_Keywords_Utilities,TR_Keywords_Power_Systems,TR_Keywords_Services,TR_Keywords_Utilities,TR_Keywords_E_mobility} from "./keywords.js";

let languageIndex, languageText, languageValue, categoryIndex, categoryText
let combinedKeywords = [[EN_Keywords_Power_Systems, EN_Keywords_Services , EN_Keywords_Utilities, EN_Keywords_E_mobility],[CN_Keywords_Power_Systems, CN_Keywords_Services,CN_Keywords_Utilities, CN_Keywords_E_mobility], [KR_Keywords_Power_Systems, KR_Keywords_Services , KR_Keywords_Utilities, KR_Keywords_E_mobility], [DE_Keywords_Power_Systems, DE_Keywords_Services,DE_Keywords_Utilities, DE_Keywords_E_mobility], [ES_Keywords_Power_Systems,ES_Keywords_Services,ES_Keywords_Utilities, ES_Keywords_E_mobility], [FR_Keywords_Power_Systems, FR_Keywords_Services , FR_Keywords_Utilities, FR_Keywords_E_mobility], [PL_Keywords_Power_Systems, PL_Keywords_Services,PL_Keywords_Utilities, PL_Keywords_E_mobility],[VN_Keywords_Power_Systems,VN_Keywords_Services,VN_Keywords_Utilities,VN_Keywords_E_mobility],[PT_Keywords_Power_Systems,PT_Keywords_Services,PT_Keywords_Utilities,PT_Keywords_E_mobility],[BG_Keywords_Power_Systems,BG_Keywords_Services,BG_Keywords_Utilities,BG_Keywords_E_mobility],[HR_Keywords_Power_Systems,HR_Keywords_Services,HR_Keywords_Utilities,HR_Keywords_E_mobility],[CZ_Keywords_Power_Systems,CZ_Keywords_Services,CZ_Keywords_Utilities,CZ_Keywords_E_mobility],[DK_Keywords_Power_Systems,DK_Keywords_Services,DK_Keywords_Utilities,DK_Keywords_E_mobility],[NL_Keywords_Power_Systems,NL_Keywords_Services,NL_Keywords_Utilities,NL_Keywords_E_mobility],[FI_Keywords_Power_Systems,FI_Keywords_Services,FI_Keywords_Utilities,FI_Keywords_E_mobility],[GR_Keywords_Power_Systems,GR_Keywords_Services,GR_Keywords_Utilities,GR_Keywords_E_mobility],[IL_Keywords_Power_Systems,IL_Keywords_Services,IL_Keywords_Utilities,IL_Keywords_E_mobility],[HU_Keywords_Power_Systems,HU_Keywords_Services,HU_Keywords_Utilities,HU_Keywords_E_mobility],[ID_Keywords_Power_Systems,ID_Keywords_Services,ID_Keywords_Utilities,ID_Keywords_E_mobility],[IT_Keywords_Power_Systems,IT_Keywords_Services,IT_Keywords_Utilities,IT_Keywords_E_mobility],[JP_Keywords_Power_Systems,JP_Keywords_Services,JP_Keywords_Utilities,JP_Keywords_E_mobility],[MY_Keywords_Power_Systems,MY_Keywords_Services,MY_Keywords_Utilities,MY_Keywords_E_mobility],[NO_Keywords_Power_Systems,NO_Keywords_Services,NO_Keywords_Utilities,NO_Keywords_E_mobility],[RO_Keywords_Power_Systems,RO_Keywords_Services,RO_Keywords_Utilities,RO_Keywords_E_mobility],[RU_Keywords_Power_Systems,RU_Keywords_Services,RU_Keywords_Utilities,RU_Keywords_E_mobility],[RS_Keywords_Power_Systems,RS_Keywords_Services,RS_Keywords_Utilities,RS_Keywords_E_mobility],[SK_Keywords_Power_Systems,SK_Keywords_Services,SK_Keywords_Utilities,SK_Keywords_E_mobility],[SI_Keywords_Power_Systems,SI_Keywords_Services,SI_Keywords_Utilities,SI_Keywords_E_mobility],[SE_Keywords_Power_Systems,SE_Keywords_Services,SE_Keywords_Utilities,SE_Keywords_E_mobility],[TH_Keywords_Power_Systems,TH_Keywords_Services,TH_Keywords_Utilities,TH_Keywords_E_mobility],[TR_Keywords_Power_Systems,TR_Keywords_Services,TR_Keywords_Utilities,TR_Keywords_E_mobility]]

//EN, CN, KR, DE, ES, FR, PL, PT, BG, HR, CZ, DK, NL, FI, GR, IL, HU, ID, IT, JP, MY, NO, RO, RU, RS, SK, SI, SE, TH, TR
//Power Systems, Services, Utilities, E-mobility 

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
        case "JP":
        case "TH":
            return text.length - text.split(" ").length + 1;
        default:
            let re = new RegExp( /\w+\S*/, 'g')
            let wordCount = strDocument.match(re).length
            return(wordCount)
    }
}

btnCopy.addEventListener("click", function(event) {
    event.preventDefault()

    let children = resultsDiv.childNodes;
    let results = children[0].innerText;
    for(let i = 1; i < children.length; i++) {
        results = results.concat("\n", children[i].innerText)
    }
    navigator.clipboard.writeText(results)
    let p = document.createElement("p")
    document.getElementById("results").prepend(p)
    p.innerHTML = "Text Copied!"
})

btnSubmit.addEventListener("click", function(event){
    event.preventDefault()
    let resultDict = {}
    
    while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }

    setParameters()
    let arr = combinedKeywords[languageIndex][categoryIndex]
    console.log(languageIndex)
    console.log(categoryIndex)
    console.log(arr)

    if (textBox.value != "") {
        strDocument = textBox.value.trim();
        btnCopy.style.display = "block";
    }
    else {
        let p = document.createElement("p");
        p.innerHTML = "Please input something in the textbox.";
        document.getElementById("results").append(p);
        return; 
    }

    arr.forEach(function(i) {
        let re
        switch(languageValue){
            case "CN" : 
            case "KR" :
            case "JP":
            case "TH":
                re = new RegExp(i, 'gi');
                break; 
            default: //case "VN":
                re = new RegExp('(?<=[\\s,.:;"\']|^)' + i + '(?=[\\s,.:;"\']|$)', 'gi');
                break;
            // default:
            //     re = new RegExp('\\b' + i + '\\b','gi');
            //     break;      
        }

        if(strDocument.match(re)) {
            let count = strDocument.match(re).length;   
            if(count != null && count > 0) {
                resultDict[i] = strDocument.match(re).length
            }
        }
    })

    let p = document.createElement("p")
    p.innerText = "--Results on Keywords Used and # of Mentions--"
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

    p0.innerText = "--Summary--"
    p1.innerText = "Total Number of Keywords: " + Object.keys(resultDict).length 
    p2.innerText = "Total Number of Mentions: " + counter
    p3.innerText = "Word Count: " + wordCount   
    p4.innerText = "Keyword Density: " + Number(Math.round(counter/wordCount * 100 + 'e1') + 'e-1') + "%"

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
