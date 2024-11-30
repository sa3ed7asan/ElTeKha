const messages = {
    1: {
        message: `بتحبيني يا فاطنه؟ <span class="emoji">😂❤</span>`,
        buttons: [
            {
                name: `بحبك ياقلب فاطنه <span class="emoji">😂❤</span>`,
                replyMessage: `قلبي ياقلبي <span class="emoji">😂❤</span>`,
                action: `next`
            },
            {
                name: `مبحبكش <span class="emoji">😒</span>`,
                replyMessage: `هششش بتحبيني مفيش الكلام دا يلا ياقلبي جربي تاني <span class="emoji">🙄🔪😂</span>`,
                action: `redo`
            }
        ]
    },
    2: {
        message: `هاتي بوسه عشان تعدي اللفل دا! <span class="emoji">🙄😂</span>`,
        buttons: [
            {
                name: `امواه <span class="emoji">😉😂`,
                replyMessage: `اخخخ جت في قلبي <span class="emoji">😂❤</span>`,
                action: `next`
            },
            {
                name: `عيييب <span class="emoji">🙄`,
                replyMessage: `مفيش الكلام دا هاتي بوسه <span class="emoji">🔪😂</span>`,
                action: `redo`
            }
        ]
    },
    3: {
        message: `العيون دي مش هنتفسحو انا وهي قريب؟ <span class="emoji">🙄😂</span>`,
        buttons: [
            {
                name: `يلا بينــاا 😂❤`,
                replyMessage: `شوف بحبها وهي عاقله <span class="emoji">😂❤</span>`,
                action: `next`
            },
            {
                name: `لا بعينك 😒😂`,
                replyMessage: `قلبي تحطم واختفى الله يسامحك <span class="emoji">😔</span>`,
                action: `next`
            }
        ]
    },
    4: {
        message: `خلاص انت استحلتيها 😂 هاتي بوسه يلا وقفلي مش حوار هو <span class="emoji">😂</span>`,
        buttons: [
            {
                name: `امواه مره كمان <span class="emoji">😉😂❤</span>`,
                replyMessage: `بس خلاص اكاد من فرط الجمال اذوب <span class="emoji">😂❤</span>`,
                action: `next`
            },
            {
                name: `بس ياحبيبي كفاية واحده <span class="emoji">😒🔪</span>`,
                replyMessage: `اطلعي بالبوسه مش سايبك <span class="emoji">😂🔪</span>`,
                action: `redo`
            }
        ]
    }
};

const messageContainer = document.getElementById(`messageContainer`);
const buttonsContainer = document.getElementById(`buttonsContainer`);
const gameBtn = document.getElementById(`game-btn`);
let currentLevel = 0;

function startGame() {
    currentLevel = 1;
    gameBtn.style.display = `none`;
    loadLevel();
}

function loadLevel() {
    if (!messages[currentLevel]) {
        messageContainer.innerHTML = `بس كفاية مش لاقي حاجه اقولها تاني غير بحبك <span class="emoji">😂❤!</span>`;
        buttonsContainer.innerHTML = ``;
        gameBtn.style.display = `none`;
        return;
    }

    const { message, buttons } = messages[currentLevel];
    messageContainer.innerHTML = message;
    buttonsContainer.innerHTML = ``;

    buttons.forEach((button) => {
        const btn = document.createElement(`button`);
        btn.innerHTML = button.name;
        btn.onclick = () => handleButtonClick(button);
        buttonsContainer.appendChild(btn);
    });
}

function handleButtonClick(button) {
    messageContainer.innerHTML = button.replyMessage;
    buttonsContainer.innerHTML = ``;

    if (button.action === `next`) {
        const nextBtn = document.createElement(`button`);
        nextBtn.innerHTML = `اللي بعده <span class="emoji">😉😂</span>`;
        nextBtn.onclick = () => {
            currentLevel++;
            loadLevel();
        };
        buttonsContainer.appendChild(nextBtn);
    } else if (button.action === `redo`) {
        const redoBtn = document.createElement(`button`);
        redoBtn.innerHTML = `يلا تاني زي الشاطره <span class="emoji">🙄😂</span>`;
        redoBtn.onclick = loadLevel;
        buttonsContainer.appendChild(redoBtn);
    }
}
