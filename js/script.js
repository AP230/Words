// scripts.js

document.getElementById("madlib-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    const noun = document.getElementById("noun").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const place = document.getElementById("place").value.trim();

    // Check if all fields are filled
    if (!noun || !verb || !adjective || !place) {
        alert("Please fill out all fields!");
        return;
    }

    // Get the selected story template
    const selectedStory = document.getElementById("story-selector").value;

    // Define stories based on template
    let story = "";

    if (selectedStory === "pirate") {
        story = `A ${adjective} pirate sailed to the ${place} to ${verb} with a ${noun}. It was a swashbuckling adventure!`;
    } else if (selectedStory === "zombie") {
        story = `The ${adjective} zombie chased the hero through the ${place} to ${verb} with a ${noun}. The horror was real!`;
    } else if (selectedStory === "fairytale") {
        story = `Once upon a time, a ${adjective} prince rode his ${noun} to the ${place} to ${verb} the evil dragon. It was a fairytale turned upside down!`;
    }

    // Add animation to reveal the story
    const storyBox = document.querySelector('.story-box');
    storyBox.classList.add('fade-out');
    setTimeout(() => {
        document.getElementById("story-text").innerText = story;
        storyBox.classList.remove('fade-out');
        storyBox.classList.add('fade-in');
    }, 500);
});

