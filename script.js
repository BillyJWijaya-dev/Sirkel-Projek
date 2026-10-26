const members = [
    {
        name: "Zen Auladi",
        username: "@zen_auladi",
        bio: "Bukan orang bener, tapi beneran orang.",
        role: "Exploring possibilities",
        image: "assets/images/Zen.jpeg",
        music: "Bintang 5 - Tenxi",
        audio: "assets/audio/zenxi.mp3"
    },
    {
        name: "Billy Jonas Wijaya",
        username: "@_zhao.yin",
        bio: "Aku bukan dipimpin, aku yang memimpin.",
        role: "Finding their own path",
        image: "assets/images/billy.jpeg",
        music: "Know Me - GEMINI",
        audio: "assets/audio/Know_me.mp3"
    },
    {
        name: "Pandu Satrio",
        username: "@pandstrio",
        bio: "Kejarlah cita-cita, jangan dia yang ngga cinta.",
        role: "Always curious",
        image: "assets/images/ndu.jpeg",
        music: "Soulmate - Kahitna",
        audio: "assets/audio/pandu.mp3"
    },
    {
        name: "M. Naufal Ariadiansyah",
        username: "@naufaards",
        bio: "A lot has changed, but I'm still here.",
        role: "Making memories",
        image: "assets/images/naufal.jpeg",
        music: "Can't Take My Eyes Off You - Lula Band",
        audio: "assets/audio/naufall.mp3"
    },
    {
        name: "M. Faris Nur Rizqi",
        username: "@kalryz",
        bio: "Try To Be Better.",
        role: "Learning every day",
        image: "assets/images/faris.jpeg",
        music: "Whatever - Oasis",
        audio: "assets/audio/faris.mp3"
    },
    {
        name: "Althafian Rizqullah Susilo",
        username: "@growtaf",
        bio: "Hidup itu sederhana, kita yang membuatnya rumit.",
        role: "Enjoying the journey",
        image: "assets/images/althaf.jpeg",
        music: "Haruka - Yoasobi",
        audio: "assets/audio/althaf.mp3"
    },
    {
        name: "Muhamad Kiram Albara",
        username: "@kirrrbara_",
        bio: "Ga perlu kata-kata, yang penting aksi nyata.",
        role: "Bringing new perspectives",
        image: "assets/images/kiram.jpeg",
        music: "Outside - Calvin Harris ft. Ellie Goulding",
        audio: "assets/audio/kiram.mp3"
    },
    {
        name: "Nazmy",
        username: "@mhiiiee_",
        bio: "Build with intention, refined over time.",
        role: "Thinking creatively",
        image: "assets/images/nazmy.jpeg",
        music: "Just Give Me A Reason - Pink",
        audio: "assets/audio/nazmy.mp3"
    },
    {
        name: "Member Nine",
        username: "@membernine",
        bio: "Every personality adds a different color to our story.",
        role: "Being themselves",
        image: "assets/images/member-09.jpg",
        music: "Soundtrack Nine",
        audio: "assets/audio/member-09.mp3"
    },
    {
        name: "Member Ten",
        username: "@memberten",
        bio: "Ten individuals, connected by one circle.",
        role: "Part of the story",
        image: "assets/images/member-10.jpg",
        music: "Soundtrack Ten",
        audio: "assets/audio/member-10.mp3"
    }
];

let currentIndex = 0;
let requestedAudioIndex = null;

const memberImage = document.getElementById("member-image");
const memberName = document.getElementById("member-name");
const memberUsername = document.getElementById("member-username");
const memberBio = document.getElementById("member-bio");
const memberRole = document.getElementById("member-role");

const memberCounter = document.getElementById("member-counter");
const progressBar = document.getElementById("slider-progress-bar");

const audio = document.getElementById("member-audio");
const musicTitle = document.getElementById("music-title");
const musicStatus = document.getElementById("music-status");
const musicToggle = document.getElementById("music-toggle");

const previousButton = document.getElementById("previous-member");
const nextButton = document.getElementById("next-member");


// profil anggota
function renderMember(index) {
    const profileCard = document.querySelector(".profile-card");

    if (profileCard) {
        profileCard.classList.add("is-changing");

    }
    const member = members[index];

    memberImage.src = member.image;
    memberImage.alt = `Foto ${member.name}`;

    memberImage.onerror = () => {
        memberImage.onerror = null;
        memberImage.removeAttribute("src");
        memberImage.alt = "Foto anggota belum tersedia";
    };

    memberName.textContent = member.name;
    memberUsername.textContent = member.username;
    memberBio.textContent = member.bio;
    memberRole.lastChild.textContent = ` ${member.role}`;

    memberCounter.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`;

    progressBar.style.width =
        `${((index + 1) / members.length) * 100}%`;

    updateMusic(index);
    if (profileCard) {
        window.setTimeout(() => {
            profileCard.classList.remove("is-changing");
        }, 50);
    }
}


// swipe hp
renderMember(currentIndex);
const swipeCard = document.querySelector(".profile-card");

let touchStartX = 0;
let touchStartY = 0;

const swipeThreshold = 60;

if (swipeCard) {
    swipeCard.addEventListener(
        "touchstart",
        (event) => {
            const touch = event.changedTouches[0];

            touchStartX = touch.screenX;
            touchStartY = touch.screenY;
        },
        { passive: true }
    );

    swipeCard.addEventListener(
        "touchend",
        (event) => {
            const touch = event.changedTouches[0];

            const deltaX = touch.screenX - touchStartX;
            const deltaY = touch.screenY - touchStartY;

            if (Math.abs(deltaX) < swipeThreshold) return;
            if (Math.abs(deltaX) < Math.abs(deltaY)) return;

            const target = event.target;

            if (
                target.closest(
                    "button, a, audio, input, select, textarea"
                )
            ) {
                return;
            }

            if (deltaX < 0) {
                // Geser ke kiri
                nextButton.click();
            } else {
                // Geser ke kanan
                previousButton.click();
            }
        },
        { passive: true }
    );
}


// gunta ganti musik
function updateMusic(index) {
    const member = members[index];

    requestedAudioIndex = index;

    audio.pause();
    audio.onended = null;
    audio.onerror = null;

    audio.removeAttribute("src");
    audio.load();

    audio.src = member.audio;
    audio.load();

    musicTitle.textContent = member.music;
    musicStatus.textContent = "Soundtrack anggota";
    musicToggle.textContent = "▶";
    musicToggle.setAttribute("aria-label", "Putar musik");

    audio.onended = () => {
        musicToggle.textContent = "▶";
        musicStatus.textContent = "Selesai";
    };

    audio.onerror = () => {
        if (requestedAudioIndex !== index) return;

        musicStatus.textContent = "Audio belum tersedia";
        musicToggle.textContent = "▶";
    };

    // autoplay musik.
    const playAttempt = audio.play();

    if (playAttempt) {
        playAttempt
            .then(() => {
                if (requestedAudioIndex !== index) {
                    audio.pause();
                    return;
                }

                musicToggle.textContent = "Ⅱ";
                musicStatus.textContent = "Now playing";
            })
            .catch(() => {
                if (requestedAudioIndex !== index) return;

                musicToggle.textContent = "▶";
                musicStatus.textContent = "Tekan play untuk mendengarkan";
            });
    }
}


// Tombol play / pause
musicToggle.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();

            musicToggle.textContent = "Ⅱ";
            musicStatus.textContent = "Now playing";
        } catch (error) {
            musicStatus.textContent = "Musik tidak dapat diputar";
        }
    } else {
        audio.pause();

        musicToggle.textContent = "▶";
        musicStatus.textContent = "Paused";
    }
});


// Navigasi anggota
function changeMember(direction) {
    currentIndex =
        (currentIndex + direction + members.length) % members.length;

    renderMember(currentIndex);
}

previousButton.addEventListener("click", () => {
    changeMember(-1);
});

nextButton.addEventListener("click", () => {
    changeMember(1);
});


// keyboard kiri kanan
document.addEventListener("keydown", (event) => {
    if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
    ) {
        return;
    }

    if (event.key === "ArrowLeft") {
        changeMember(-1);
    }

    if (event.key === "ArrowRight") {
        changeMember(1);
    }
});


// Tahun footer
document.getElementById("current-year").textContent =
    new Date().getFullYear();


// Tampilkan anggota pertama
renderMember(currentIndex);