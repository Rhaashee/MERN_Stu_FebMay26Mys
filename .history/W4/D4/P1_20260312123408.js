const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    const info = {
        htmlLang : document.documentElement.lang, 
        charset : document.characterSet,
        //browser's  primary preffered laanaguague
        browserLanguague : navigator.language, 
        //Array of all browsers lanaguaugue
        browserLanguagues : navigator.languages
    }
})
