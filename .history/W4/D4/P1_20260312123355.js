const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    const info = {
        htmlLang : document.documentElement.lang, 
        charset : document.characterSet,
        //browser's  primary preffered laanaguague
        browserLanguague : navigator.language, 
        //
        browserLanguagues : navigator.languages
    }
})
