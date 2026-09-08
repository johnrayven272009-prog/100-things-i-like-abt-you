// =========================
// 100 THINGS I LIKE ABOUT YOU
// =========================

const things = [
    "I like your smile.",
    "I like the way you laugh.",
    "I like how you get excited over little things.",
    "I like how you can make random conversations fun.",
    "I like how comfortable you make people feel.",
    "I like your sense of humor.",
    "I like how you can be so effortlessly funny.",
    "I like the way you talk about things you're interested in.",
    "I like how you remember little things.",
    "I like your personality.",

    "I like how you can be both chaotic and sweet.",
    "I like how you don't always realize how cute your little habits are.",
    "I like hearing your stories.",
    "I like our random conversations.",
    "I like the little inside jokes we have.",
    "I like how easy it is to talk to you.",
    "I like how you make ordinary moments memorable.",
    "I like seeing you genuinely happy.",
    "I like how you care about the people close to you.",
    "I like how you listen when someone needs to talk.",

    "I like how you have your own way of doing things.",
    "I like your random thoughts.",
    "I like when you get really passionate about something.",
    "I like how you can make me smile without even trying.",
    "I like the little things you do that you probably don't even notice.",
    "I like how being around you never feels boring.",
    "I like how you can turn a normal conversation into something I'll remember.",
    "I like getting to know more about you.",
    "I like the memories we've made together.",
    "I like simply having you in my life.",

    "I like your nails.",
    "I like how the mole near your lips suits you so well, even if you're insecure about it.",
    "I like your new black hair.",
    "I liked your older brown-goldish hair too.",
    "I like your long hair.",
    "I like your taste in music.",
    "I like how our music taste kind of matches.",
    "I like that indie-romance vibe we both have.",
    "I like how much you care about your family.",
    "I like that we can understand each other about having a mom who's an OFW.",

    "I like how you know what to say when someone isn't doing okay.",
    "I like how you somehow know when something is bothering someone.",
    "I like that you genuinely want to enjoy your life.",
    "I admire how strong you can be when things get difficult.",
    "I admire how you handle problems even when you don't always talk about them.",
    "I like that even when you're dealing with your own stuff, you can still make other people laugh.",
    "I like how funny you are.",
    "I like your sense of humor, even when your jokes are completely random.",
    "I like your makeup looks.",
    "I like how much you love food.",

    "I like how much you love ube.",
    "I like how happy pastries make you.",
    "I like the way you get excited about the things you love.",
    "I like that there's a strong side of you that you don't always show.",
    "I like how you know your own limits.",
    "I like that you have your own boundaries.",
    "I like how outgoing you are.",
    "I like that you can make people around you feel comfortable.",
    "I like how you help people even when there's nothing in it for you.",
    "I like how you care about your friends.",

    "I like how you can tell when something's not right.",
    "I like how strong you are even if you don't tell everyone what you're going through.",
    "I like how you still find a way to enjoy the little things.",
    "I like how there's always something new to learn about you.",
    "I like all the little things that make you, you.",
    "I just like you, Jil. Like, I don't really know how else to explain it.",
    "I like how you can make a simple day feel less boring.",
    "I like how you can be so random out of nowhere HAHAHA.",
    "I like your soft laugh, especially yung mga times na hindi mo naman sinasadyang tumawa nang ganon.",
    "I like hearing you talk, kahit minsan kung ano-ano na napag-uusapan natin.",

    "I like how you react kapag may sinabi akong compliment sayo.",
    "I like how you don't always take yourself too seriously.",
    "I like how you can be playful with the people you're comfortable with.",
    "I like how you can make people laugh without forcing it.",
    "I like how you have your own personality and hindi ka basta sumusunod sa ginagawa ng iba.",
    "I like how you can be confident and shy at the same time.",
    "I like how you care about what other people are feeling.",
    "I like how you try to be there for people kapag kailangan ka nila.",
    "I like how thoughtful you can be without making a big deal out of it.",
    "I like how you notice things about people.",

    "I like how you can understand someone without them having to explain everything.",
    "I like how you know when to have fun and when to take things seriously.",
    "I like how you know yourself kahit hindi mo laging sinasabi.",
    "I like how you have your own little ways of showing that you care.",
    "I like how you don't give up easily kapag may important sayo.",
    "I like how independent you can be.",
    "I like how you keep going kahit may mga bagay na mahirap.",
    "I like how you can still smile kahit hindi naman perfect yung araw mo.",
    "I like how you make me want to know more about you.",
    "I like how talking to you never feels forced.",

    "I like how comfortable our conversations can get.",
    "I like how we can go from serious conversations to absolute nonsense in like two seconds HAHAHA.",
    "I like how you have this way of making me feel like I can just be myself.",
    "I like how our personalities somehow work together.",
    "I like how we have things in common but we're still different in our own ways.",
    "I like all the small moments with you na baka ordinary lang sayo, pero memorable sakin.",
    "I like the person you are now, and I like seeing the person you're becoming.",
    "I like knowing that there's still so much more about you that I haven't discovered yet.",
    "I like every little thing about you that makes you different from everyone else.",
    "And after writing all of this, I still feel like 100 isn't enough to explain why I like you."
];


// =========================
// GET ELEMENTS
// =========================

const introScreen = document.getElementById("intro-screen");
const listScreen = document.getElementById("list-screen");
const finalScreen = document.getElementById("final-screen");

const openBtn = document.getElementById("open-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const thingCard = document.getElementById("thing-card");
const currentNumber = document.getElementById("current-number");
const thingText = document.getElementById("thing-text");
const progress = document.getElementById("progress");
const photoContainer = document.getElementById("photo-container");
const thingPhoto = document.getElementById("thing-photo");

const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("background-music");


// =========================
// CURRENT ITEM
// =========================

let currentIndex = 0;


// =========================
// DISPLAY ITEM
// =========================

function displayThing() {
    currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");

    thingText.textContent = things[currentIndex];

    progress.textContent = `${currentIndex + 1} / ${things.length}`;

    prevBtn.disabled = currentIndex === 0;

    if (currentIndex === things.length - 1) {
        nextBtn.textContent = "finish ♡";
    } else {
        nextBtn.textContent = "next →";
    }
}


// =========================
// CARD ANIMATION
// =========================

function changeCard(direction = "next") {
    thingCard.classList.remove("card-enter", "card-exit");

    // Force animation restart
    void thingCard.offsetWidth;

    thingCard.classList.add("card-exit");

    setTimeout(() => {
        if (direction === "next") {
            currentIndex++;
        } else {
            currentIndex--;
        }

        displayThing();

        thingCard.classList.remove("card-exit");

        void thingCard.offsetWidth;

        thingCard.classList.add("card-enter");
    }, 220);
}


// =========================
// OPEN WEBSITE
// =========================

openBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    listScreen.classList.remove("hidden");

    currentIndex = 0;
    displayThing();
});


// =========================
// NEXT BUTTON
// =========================

nextBtn.addEventListener("click", () => {

    // If we're currently on #100
    if (currentIndex === things.length - 1) {
        listScreen.classList.add("hidden");
        finalScreen.classList.remove("hidden");
        return;
    }

    changeCard("next");
});


// =========================
// PREVIOUS BUTTON
// =========================

prevBtn.addEventListener("click", () => {

    if (currentIndex === 0) {
        return;
    }

    changeCard("prev");
});


// =========================
// RESTART
// =========================

restartBtn.addEventListener("click", () => {

    currentIndex = 0;

    finalScreen.classList.add("hidden");
    listScreen.classList.remove("hidden");

    displayThing();

    thingCard.classList.remove("card-enter");

    void thingCard.offsetWidth;

    thingCard.classList.add("card-enter");
});


// =========================
// MUSIC
// =========================

musicBtn.addEventListener("click", () => {

    // Don't do anything until a music file is added
    if (!music.src || music.querySelector("source").getAttribute("src") === "") {
        return;
    }

    if (music.paused) {
        music.play();
        musicBtn.textContent = "♫";
        musicBtn.setAttribute("aria-label", "Pause music");
    } else {
        music.pause();
        musicBtn.textContent = "♪";
        musicBtn.setAttribute("aria-label", "Play music");
    }
});


// =========================
// KEYBOARD SUPPORT
// =========================

document.addEventListener("keydown", (event) => {

    if (listScreen.classList.contains("hidden")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextBtn.click();
    }

    if (event.key === "ArrowLeft") {
        prevBtn.click();
    }
});


// =========================
// INITIAL LOAD
// =========================

displayThing();
