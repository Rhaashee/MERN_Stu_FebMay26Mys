// Object Iteration
const book = {
    title: "JS for newbies",
    author: "----",
    year : 2026
};

for(let key in book){
    console.log(key,":",book[key])
}