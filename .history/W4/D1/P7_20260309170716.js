// Get element By Id
console.log("Document Object:", document);
console.log("Page title", document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading text", heading.textContent);

// get element by class name
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

// getElementsByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightblue";
    }
});

// Query Selector: returns the first elements matching a css selector
const mainFirstHeading = document.querySelector(".mainHeading");