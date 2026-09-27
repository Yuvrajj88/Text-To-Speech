const speech = new SpeechSynthesisUtterance();

const textArea = document.getElementById("textArea");
const voiceSelect = document.getElementById("voiceSelect");
const speakBtn = document.getElementById("speakBtn");
const btnText = document.querySelector(".btnText");
const charCount = document.getElementById("charCount");
const status = document.getElementById("status");

let voices = [];

/* =========================
LOAD AVAILABLE VOICES
========================= */

function loadVoices() {
voices = window.speechSynthesis.getVoices();


voiceSelect.innerHTML = "";

if (voices.length === 0) {
    const option = document.createElement("option");
    option.textContent = "No voices available";
    option.value = "";
    voiceSelect.appendChild(option);
    return;
}

voices.forEach((voice, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;

    voiceSelect.appendChild(option);
});

// Select an English voice by default if available
const englishVoiceIndex = voices.findIndex(voice =>
    voice.lang.startsWith("en")
);

const defaultIndex =
    englishVoiceIndex !== -1 ? englishVoiceIndex : 0;

voiceSelect.value = defaultIndex;
speech.voice = voices[defaultIndex];


}

loadVoices();

if ("onvoiceschanged" in window.speechSynthesis) {
window.speechSynthesis.addEventListener(
"voiceschanged",
loadVoices
);
}

/* =========================
VOICE SELECTION
========================= */

voiceSelect.addEventListener("change", () => {


const selectedVoice = voices[voiceSelect.value];

if (selectedVoice) {
    speech.voice = selectedVoice;

    status.textContent = `Voice: ${selectedVoice.name}`;
}


});

/* =========================
CHARACTER COUNTER
========================= */

textArea.addEventListener("input", () => {


const currentLength = textArea.value.length;

charCount.textContent = currentLength;

if (currentLength >= 900) {
    charCount.style.color = "#ff9f43";
} else {
    charCount.style.color = "";
}


});

/* =========================
SPEAK TEXT
========================= */

speakBtn.addEventListener("click", () => {


const text = textArea.value.trim();

// Don't speak empty text
if (!text) {
    status.textContent = "Please enter some text first.";
    textArea.focus();
    return;
}

// If speech is currently running, stop it
if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();

    status.textContent = "Speech stopped";
    btnText.textContent = "Listen";

    return;
}

speech.text = text;

speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);

btnText.textContent = "Stop";
status.textContent = "Speaking...";


});

/* =========================
SPEECH EVENTS
========================= */

speech.onstart = () => {


btnText.textContent = "Stop";
status.textContent = "Speaking...";


};

speech.onend = () => {


btnText.textContent = "Listen";
status.textContent = "Finished speaking";


};

speech.onerror = () => {


btnText.textContent = "Listen";
status.textContent =
    "Something went wrong. Please try again.";


};

/* =========================
KEYBOARD SHORTCUT
========================= */

// Ctrl + Enter = Speak
textArea.addEventListener("keydown", (event) => {


if (event.ctrlKey && event.key === "Enter") {
    speakBtn.click();
}


});
