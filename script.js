// Login Page Logic
if (window.location.pathname.includes("login.html")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim().toLowerCase();
        const dob = document.getElementById("dob").value.trim();
        console.log(name);
        console.log(dob);
        const q1 = document.querySelector('input[name="q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="q2"]:checked')?.value;
        const q3 = document.querySelector('input[name="q3"]:checked')?.value;

        const correctAnswers = { q1: "Cutu", q2: "White", q3: "Youuu" };
        let score = 0;

        if (q1 === correctAnswers.q1) score++;
        if (q2 === correctAnswers.q2) score++;
        if (q3 === correctAnswers.q3) score++;
        console.log(score);
        console.log(q1);
        console.log(q2);
        console.log(q3);
        if (name === "barnali seal" && dob === "2005-03-01" && score >= 2) {
            window.location.href = "flashcards.html";
        } else if (score < 2) {
            const message = document.getElementById("message");
            message.innerHTML = `<div class='alert'>Nice try diddy, you are not my girlfriend ewwwww 🤮🤮<button onclick="location.reload()">OK</button></div>`;
        } else {
            const message = document.getElementById("message");
            message.innerHTML = `<div class='alert'>Fuck off whoever the fuck you are<button onclick="location.reload()">OK</button></div>`;
        }
    });
}

  
// Flashcards Logic
if (window.location.pathname.includes("flashcards.html")) {
    const cards = [
        { image: '1.png', message: "Hellllooooooooooooooooooooooooooooooooo, I love youuuuuuuuuuu. Yeah let's start with that. You are literally the best thing that could have ever happened to me. You love me, care for me, baby me, listen to me yap about anything and everything (willinglyyy)! I cannot believe how luckyyy I got" },
        { image: '2.png', message: "Everyday is hectic but then i remember this person is someone I can call my person and all of a sudden all of my worries (other than losing you) vanishesss. You are absolutely the best part of my day everydayyyy. Even with you being so far it feels so goood, I can't imagine how much better it can be when we get to come back home to each other hehehehe." },
        { image: '3.png', message: 'Look at thissss little girlllllllll. Loook at how happy she is. She thinks the world is all sunshine and rainbows. Never let her think otherwise. You are amazingggg. You deserve every good thing that happens to you. You are loved and cared for so chuppppp. I am proud of youuu. I am your number one fan. REMEMBER THAT' },
        { image: '4.png', message: 'Look at her. The most beautiful human being I have every seen. I have a hard time believing or rather accepting that someone as pretty as you can be insecure about anythinggggg. You are the type of woman that makes one want to work hard and be kind to become a genuinely good personnn. You motivate me everyday to becomme a better version of myself. ily <3' },
        { image: '5.png', message: "I am pretty retarded but no one has ever looked at me liked that. hehehehehhehe. I can't believe that you could have literally been with anyoneeeee yet you fell for me hehehehehe. You are the purest, kindest most joyful soul everrrrr and that soul loves me...... well and Hozier 🙄🙄. But I can live with that (will try)." },
        { image: '6.png', message: "I am tempted to say you are my better half but let's be honest you are my EVERYTHING!!! I love youuu sooo muchhhhhh. I didn't know I can love someone this much. Please biwi ban jao mera eventually 👏🏽👏🏽👏🏽. I love youuu ♥❤♥❤" },
        {image: '7.png', message: "I will always be there for you. Pinkyyy wala promiseee 💗💗"}
    ];
    let currentIndex = 0;

    const flashcard = document.getElementById("flashcard");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    function updateCard() {
        flashcard.style.backgroundImage = `url('${cards[currentIndex].image}')`;
        flashcard.textContent = cards[currentIndex].message;
        prev.textContent = currentIndex === 0 ? "💗" : "Previous";
        next.textContent = currentIndex === cards.length - 1? "End" : "Next";
    }

    next.addEventListener("click", function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            flashcard.classList.remove('fadeOut');
            flashcard.classList.add('fadeInCard');
            updateCard();
        } else {
            window.location.href = "video.html";
        }
    });

    prev.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            flashcard.classList.remove('fadeOut');
            flashcard.classList.add('fadeInCard');
            updateCard();
        }
    });

    updateCard();
}
