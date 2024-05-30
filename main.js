let api = "https://jsonplaceholder.typicode.com/posts";

let container = document.querySelector(".container");

fetch(api)
    .then(response => response.json())
    .then(jsonArray => {
        jsonArray.forEach(json => {
            // user name
            let username;

            if (json.userId === 1) {
                username = "mohamed khaled";
            } else if (json.userId === 2) {
                username = "ziad";
            } else if (json.userId === 3) {
                username = "ahmed mostafa";
            } else if (json.userId === 4) {
                username = "ahmed ezzt";
            } else if (json.userId === 5) {
                username = "ahmed adel";
            } else if (json.userId === 6) {
                username = "hassan";
            } else if (json.userId === 7) {
                username = "yossif jo";
            } else if (json.userId === 8) {
                username = "emad";
            } else if (json.userId === 9) {
                username = "mohamed hamdy";
            } else if (json.userId === 10) {
                username = "omar fahmy";
            }

            let mainDiv = document.createElement("div");
            let usernamee = document.createElement("span");
            let usernameText = document.createTextNode(`author by ${username}`);
            usernamee.appendChild(usernameText);

            let title = document.createElement("h3");
            let titleText = document.createTextNode(json.title);
            title.appendChild(titleText);

            // Append the text to main div
            mainDiv.appendChild(usernamee);
            mainDiv.appendChild(title);

            // Create json URL Anchor
            let post = document.createElement("div");
            let postText = document.createTextNode(json.body);
            post.appendChild(postText);
            mainDiv.appendChild(post);

            // Append the main div to container
            container.appendChild(mainDiv);
        });
    })
    .catch(error => console.error('Error:', error));
