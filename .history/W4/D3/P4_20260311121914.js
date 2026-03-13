const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {id : 90, 
        name: "Rhaashee",
        role: "FullStack develepor",
        skills: ["HLMK","CSS","JS"]
    };
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent = "User object saved as string to localStroage";
    jsonOutput
});