function generateLetter() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * letters.length);
  const letter = letters[randomIndex];
  document.getElementById('letter').textContent = letter;
}

function copyLetter() {
  const letter = document.getElementById('letter').textContent;
  if (letter !== "--") {
    navigator.clipboard.writeText(letter)
      .then(() => alert("Letter copied: " + letter))
      .catch(err => alert("Failed to copy"));
  }
}

function generateLetter() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * letters.length);
  const letter = letters[randomIndex];
  document.getElementById('letter').textContent = letter;

  speakLetter(letter);
  utterance.text = letter.toUpperCase();
}
// --------Letter Speak Function-----------

function speakLetter(letter) {
  const utterance = new SpeechSynthesisUtterance(letter);
  utterance.lang = "en-US";
  utterance.rate = 0.8; // slower for clarity
  speechSynthesis.speak(utterance);
}

function copyLetter() {
  const letter = document.getElementById('letter').textContent;
  if (letter !== "--") {
    navigator.clipboard.writeText(letter)
      .then(() => alert("Letter copied: " + letter))
      .catch(err => alert("Failed to copy"));
  }
}
