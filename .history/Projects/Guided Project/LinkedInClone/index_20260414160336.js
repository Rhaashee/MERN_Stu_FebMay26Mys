// Add CLI menu for profile, connections, posts, and feed
const readline = require("readline");
const chalk = require("chalk");

const { createProfile, login } = require("./user");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(chalk.yellow("\n=== LinkedIn CLI ==="));
    console.log("1. Create Profile");
    console.log("2. Login");
    console.log("3. Exit");

    rl.question("Choose option: ", async (choice) => {

        switch (choice) {

            case "1":
                rl.question("Enter name: ", (name) => {
                    rl.question("Enter headline: ", async (headline) => {
                        try {
                            await createProfile(name, headline);
                        } catch (err) {}
                        menu();
                    });
                });
                break;

            case "2":
                rl.question("Enter name: ", async (name) => {
                    try {
                        await login(name);
                        console.log(chalk.green("Logged in successfully"));
                    } catch (err) {}
                    menu();
                });
                break;

            case "3":
                rl.close();
                break;

            default:
                console.log(chalk.red("Invalid choice"));
                menu();
        }
    });
}

menu();