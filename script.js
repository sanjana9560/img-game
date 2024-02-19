

    const obj1 = [
        {
            "img": "./assets/dog.jpeg",
            "match": 1
        },
        {
            "img": "./assets/cat.jpg",
            "match": 2
        },
        {
            "img": "./assets/elephent.jpg",
            "match": 3
        },
        {
            "img": "./assets/rabbit.jpg",
            "match": 4
        },{
            "img": "./assets/camel.jpg",
            "match": 5
        },{
            "img": "./assets/Donkey.webp",
            "match": 6
        }
    ];

    const obj2 = [
        {
            "name": "This is dog",
            "match": 1
        },
        {
            "name": "This is cat kw ewkrfhe qkwrha qwjre xlwjdlqw qwkrqwtwertwet wekrhwekbeiyr",
            "match": 2
        },
        {
            "name": "This is elephant",
            "match": 3
        },
        {
            "name": "This is rabbit ",
            "match": 4
        },{
            "name": "This is camel",   
            "match": 5
        },
        {
            "name": "This is Donkey",
            "match": 6
        }
    ];

    let selectedObj1Index = null;
    let selectedObj2Index = null;



function startBtn(){
let startPage = document.getElementById("start-page");
startPage.style.display = "none";
document.getElementById("container").style.display = "block";
}









    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(obj1);
    shuffleArray(obj2);

    // Render all images
    const imageBox = document.getElementById("image-box");
    obj1.forEach((item, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = "Image";
        imgElement.classList.add("img");
        imageBox.appendChild(imgElement);
    });

    // Render all names with draggable attribute
    const nameBox = document.getElementById("name-box");
    obj2.forEach((item, index) => {
        const nameElement = document.createElement("div");
        nameElement.textContent = item.name;
        nameElement.classList.add("name");
        nameElement.draggable = true;
        nameElement.ondragstart = (event) => drag(event, index);
        nameBox.appendChild(nameElement);
    });

    // Drag and Drop Functions
    function allowDrop(event) {
        event.preventDefault();
    }

    function drag(event, index) {
        event.dataTransfer.setData("text/plain", index);
        selectedObj2Index = index;
    }

    // function drop(event) {
    //     event.preventDefault();
    //     const draggedIndex = event.dataTransfer.getData("text/plain");

    //     // Swap names in obj2
    //     const temp = obj2[selectedObj2Index];
    //     obj2[selectedObj2Index] = obj2[draggedIndex];
    //     obj2[draggedIndex] = temp;

    //     // Re-render names after swapping
    //     renderNames();
    // }

    // Function to render names
    
    // function drop(event) {
    //     event.preventDefault();
    //     const draggedIndex = event.dataTransfer.getData("text/plain");
    
    //     // Get the dragged item's data
    //     const draggedItem = obj2[draggedIndex];
    
    //     // Find the index of the item being dropped onto
    //     const dropIndex = Array.from(nameBox.children).indexOf(event.target);
    
    //     // Check if both indices are valid
    //     if (selectedObj2Index !== null && selectedObj2Index !== undefined && dropIndex !== -1) {
    //         // Swap names in obj2
    //         obj2[draggedIndex] = obj2[dropIndex];
    //         obj2[dropIndex] = draggedItem;
    
    //         // Re-render names after swapping
    //         renderNames();
    
    //         // Reset selectedObj2Index
    //         selectedObj2Index = null;
    //     } else {
    //         console.error("Invalid indices:", selectedObj2Index, dropIndex);
    //     }
    // }
    

    // Variable to store the indices of previously dropped items
let previouslyDroppedIndices = [];

function drop(event) {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text/plain");

    // Get the dragged item's data
    const draggedItem = obj2[draggedIndex];

    // Find the index of the item being dropped onto
    const dropIndex = Array.from(nameBox.children).indexOf(event.target);

    // Check if both indices are valid
    if (selectedObj2Index !== null && selectedObj2Index !== undefined && dropIndex !== -1) {
        // Swap names in obj2
        obj2[draggedIndex] = obj2[dropIndex];
        obj2[dropIndex] = draggedItem;

        // Re-render names after swapping
        renderNames();

        // Reset selectedObj2Index
        selectedObj2Index = null;

        // Change background color of the dropped item
        nameBox.children[dropIndex].style.backgroundColor = " rgba(225, 28, 61, 0.591)";

        // Keep track of the previously dropped items
        previouslyDroppedIndices.push(dropIndex);

        // Reset background color of previously dropped items
        previouslyDroppedIndices.forEach((index) => {
            if (index !== dropIndex) {
                nameBox.children[index].style.backgroundColor = " rgba(225, 28, 61, 0.591)";
            }
        });
    } else {
        console.error("Invalid indices:", selectedObj2Index, dropIndex);
    }
}

    
    
    function renderNames() {
        // Clear existing names
        nameBox.innerHTML = "";

        // Render updated names
        obj2.forEach((item, index) => {
            const nameElement = document.createElement("div");
            nameElement.textContent = item.name;
            nameElement.classList.add("name");
            nameElement.draggable = true;
            nameElement.ondragstart = (event) => drag(event, index);
            nameBox.appendChild(nameElement);
        });
    }


    // ... (previous code)

// Create a submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkAnswers);

// Function to check answers
// function checkAnswers() {
//     const correctAnswers = obj1.map(item => item.match); // Array of correct match values
//     const userAnswers = obj2.map(item => item.match); // Array of user-selected match values

//     const correctIndices = correctAnswers.map((answer, index) => {
//         return answer === userAnswers[index] ? index : null;
//     }).filter(index => index !== null);

//     const incorrectIndices = correctAnswers.map((answer, index) => {
//         return answer !== userAnswers[index] ? index : null;
//     }).filter(index => index !== null);

//     console.log("Correct Answers:", correctIndices.map(index => obj2[index].name));
//     console.log("Incorrect Answers:", incorrectIndices.map(index => obj2[index].name));
// }

// ... (remaining code)

// ... (previous code)

// Variable to store the user's score
let userScore = 0;

// ... (previous code)

// Function to check answers
function checkAnswers() {
    const correctAnswers = obj1.map(item => item.match); // Array of correct match values
    const userAnswers = obj2.map(item => item.match); // Array of user-selected match values

    const correctIndices = correctAnswers.map((answer, index) => {
        return answer === userAnswers[index] ? index : null;
    }).filter(index => index !== null);

    const incorrectIndices = correctAnswers.map((answer, index) => {
        return answer !== userAnswers[index] ? index : null;
    }).filter(index => index !== null);

    // Increment user's score for each correct answer
    userScore += correctIndices.length * 10;

    console.log("Correct Answers:", correctIndices.map(index => obj2[index].name));
    console.log("Incorrect Answers:", incorrectIndices.map(index => obj2[index].name));

    // Check if all questions are answered
    if (correctIndices.length + incorrectIndices.length === obj1.length) {
        // Display an alert with the user's score
        alert(`Total Questions: ${obj1.length}\nCorrect Answers: ${correctIndices.length}\nWrong Answers: ${incorrectIndices.length}\nYour Score: ${userScore} marks`);
    }
}

// ... (remaining code)


