const readline = require("readline");
const chalk = require("chalk");

const { createProfile } = require("./user");
const { createPost } = require("./posts");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(chalk.yellow("\n=== LinkedIn CLI ==="));
    console.log("1. Create Profile");
    console.log("2. Create Post");
    console.log("3. Exit");

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                rl.question("Name: ", (name) => {
                    rl.question("Headline: ", async (headline) => {
                        await createProfile(name, headline);
                        menu();
                    });
                });
                break;

            case "2":
                rl.question("Post content: ", async (content) => {
                    await createPost(content);
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