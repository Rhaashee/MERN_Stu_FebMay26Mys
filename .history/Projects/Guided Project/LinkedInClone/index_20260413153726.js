const readline = require("readline");

const { registerUser } = require("./user");
const { createProfile } = require("./profile");
const { addConnection } = require("./connections");
const { createPost } = require("./posts");
const { getFeed } = require("./feed");
const { validateUser, validatePost } = require("./validator");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n1. Register");
    console.log("2. Create Profile");
    console.log("3. Add Connection");
    console.log("4. Create Post");
    console.log("5. View Feed");
    console.log("6. Exit");

    rl.question("Choose option: ", handleInput);
}

function handleInput(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter user ID: ", (id) => {
                rl.question("Enter name: ", (name) => {

                    validateUser(name, async (err, validName) => {
                        if (err) return console.log(err);

                        try {
                            const user = await registerUser(Number(id), validName);
                            console.log(user);
                        } catch (e) {
                            console.log(e);
                        }

                        menu();
                    });

                });
            });
            break;

        case "2":
            rl.question("Enter bio: ", async (bio) => {
                try {
                    const profile = await createProfile(bio);
                    console.log(profile);
                } catch (e) {
                    console.log(e);
                }
                menu();
            });
            break;

        case "3":
            rl.question("Enter user ID to connect: ", async (id) => {
                try {
                    const res = await addConnection(Number(id));
                    console.log(res);
                } catch (e) {
                    console.log(e);
                }
                menu();
            });
            break;

        case "4":
            rl.question("Enter post: ", (content) => {
                validatePost(content, async (err, validPost) => {
                    if (err) return console.log(err);

                    const post = await createPost(validPost);
                    console.log(post);
                    menu();
                });
            });
            break;

        case "5":
            console.log(getFeed());
            menu();
            break;

        case "6":
            rl.close();
            break;

        default:
            console.log("Invalid choice");
            menu();
    }
}

menu();