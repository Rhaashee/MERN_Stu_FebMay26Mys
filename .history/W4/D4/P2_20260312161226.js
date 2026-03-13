const translations ={
    kn : {title: , desc: },
    en : {title: "Welcome", desc: "This is a localized interface" },
    hi : {title: , desc: }
};
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");

function render(lang){
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current UI lang: "+lang;
    console.log("Rendered lang:",lang)
}