const messages = {
    1: {
        message: "بتحبيني يا فاطنه؟ 😂❤",
        buttons: [
            {
                name: "بحبك ياقلب فاطنه 😂❤",
                replyMessage: "قلبي ياقلبي 😂❤",
                action: "next"
            },
            {
                name: "مبحبكش 😒",
                replyMessage: "هششش بتحبيني مفيش الكلام دا يلا ياقلبي جربي تاني 🙄🔪😂",
                action: "redo"
            }
        ]
    },
    2: {
        message: "هاتي بوسه عشان تعدي اللفل دا! 🙄😂",
        buttons: [
            {
                name: "امواه 😉😂",
                replyMessage: "اخخخ جت في قلبي 😂❤",
                action: "next"
            },
            {
                name: "عيييب 🙄",
                replyMessage: "مفيش الكلام دا هاتي بوسه 🔪😂",
                action: "redo"
            }
        ]
    },
    3: {
        message: "العيون دي مش هنتفسحو انا وهي قريب؟ 🙄😂",
        buttons: [
            {
                name: "يلا بينــاا 😂❤",
                replyMessage: "شوف بحبها وهي عاقله 😂❤",
                action: "next"
            },
            {
                name: "لا بعينك 😒😂",
                replyMessage: "قلبي تحطم واختفى الله يسامحك 😔",
                action: "next"
            }
        ]
    },
    4: {
        message: "خلاص انت استحلتيها 😂 هاتي بوسه يلا وقفلي مش حوار هو 😂",
        buttons: [
            {
                name: "امواه مره كمان 😉😂❤",
                replyMessage: "بس خلصان اكاد من الفرط الجمال اذوب 😂❤",
                action: "next"
            },
            {
                name: "بس ياحبيبي كفاية واحده 😒🔪",
                replyMessage: "اطلعي بالبوسه مش سايبك 😂🔪",
                action: "redo"
            }
        ]
    }
};

const messageContainer = document.getElementById("messageContainer");
const buttonsContainer = document.getElementById("buttonsContainer");
const gameBtn = document.getElementById("game-btn");
let currentLevel = 0;

function startGame() {
    currentLevel = 1;
    gameBtn.style.display = "none";
    loadLevel();
}

function loadLevel() {
    if (!messages[currentLevel]) {
        messageContainer.textContent = "بس كفاية مش لاقي حاجه اقولها تاني غير بحبك 😂❤!";
        buttonsContainer.innerHTML = "";
        gameBtn.style.display = "none";
        return;
    }

    const { message, buttons } = messages[currentLevel];
    messageContainer.textContent = message;
    buttonsContainer.innerHTML = "";

    buttons.forEach((button) => {
        const btn = document.createElement("button");
        btn.textContent = button.name;
        btn.onclick = () => handleButtonClick(button);
        buttonsContainer.appendChild(btn);
    });
}

function handleButtonClick(button) {
    messageContainer.textContent = button.replyMessage;
    buttonsContainer.innerHTML = "";

    if (button.action === "next") {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "اللي بعده 😉😂";
        nextBtn.onclick = () => {
            currentLevel++;
            loadLevel();
        };
        buttonsContainer.appendChild(nextBtn);
    } else if (button.action === "redo") {
        const redoBtn = document.createElement("button");
        redoBtn.textContent = "يلا تاني زي الشاطره 🙄😂";
        redoBtn.onclick = loadLevel;
        buttonsContainer.appendChild(redoBtn);
    }
}