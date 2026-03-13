//getElementById('id')
// console.log("Document Object:",document);
// console.log("Page title:",document.title);

const heading = document.getElementById("mainHeading");
// console.log("Heading text",heading.textContent);

// getElementByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

// getElementByTagName('tag')
const spanTag = document.getElementsByTagName("span");

span.addEventListener("click",function(){
    for(let i = 0; i < span.length ; i++){
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
        for(let i = 0; i < spanTag.length ; i++){
        span[i].style.backgroundcolor = "lightgreen";
    }
});
