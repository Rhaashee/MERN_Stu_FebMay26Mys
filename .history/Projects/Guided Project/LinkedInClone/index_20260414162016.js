// Add CLI menu for profile, connections, posts, and feed
const readline = require("readline");
const chalk = require("chalk");

const { createProfile, login } = require("./user");
const { viewProfile, addSkill } = require("./profile");
const { sendRequest, viewRequests, acceptRequest, rejectRequest, viewConnections } = require("./connections");
const { createPost, likePost, commentPost } = require("./posts");
const { viewFeed } = require("./feed");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(chalk.yellow("\n=== MENU ==="));
    console.log("1.Create Profile");
    console.log("2.Login");
    console.log("3.View Profile");
    console.log("4.Add Skill");
    console.log("5.Send Request");
    console.log("6.View Requests");
    console.log("7.Accept Request");
    console.log("8.Reject Request");
    console.log("9.View Connections");
    console.log("10.Create Post");
    console.log("11.View Feed");
    console.log("12.Exit");

    rl.question("Choice: ", async (c) => {

        switch (c) {

            case "1":
    rl.question("Name: ", (name) => {
        rl.question("Headline: ", (headline) => {
            rl.question("Skills (comma separated): ", (skills) => {
                rl.question("Education (comma separated): ", (edu) => {
                    rl.question("Experience (comma separated): ", async (exp) => {

                        await createProfile(name, headline, skills, edu, exp);
                        menu();

                    });
                });
            });
        });
    });
    break;

            case "2":
    rl.question("Name: ", (name) => {
        rl.question("Enter ID: ", async (id) => {

            await login(name, id);
            console.log("Login successful");

            menu();
        });
    });
    break;

           case "3":
    rl.question("Enter Name or ID (leave empty for self): ", (input) => {
        viewProfile(input || null);
        menu();
    });
    break;

            case "4":
                rl.question("Skill: ", s => { addSkill(s); menu(); });
                break;

            case "5":
                rl.question("User name: ", async n => {
                    await sendRequest(n); menu();
                });
                break;

            case "6":
                viewRequests(); menu(); break;

            case "7":
                rl.question("No: ", async n => {
                    await acceptRequest(n-1); menu();
                });
                break;

            case "8":
                rl.question("No: ", async n => {
                    await rejectRequest(n-1); menu();
                });
                break;

            case "9":
                viewConnections(); menu(); break;

            case "10":
                rl.question("Post: ", async t => {
                    await createPost(t); menu();
                });
                break;

            case "11":
                await viewFeed(); menu(); break;

            case "12":
                rl.close(); break;

            default:
                console.log(chalk.red("Invalid"));
                menu();
        }
    });
}

menu();