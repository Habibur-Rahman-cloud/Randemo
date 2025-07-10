function generateRandom() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const resultBox = document.getElementById("result");

  if (isNaN(min) || isNaN(max)) {
    resultBox.textContent = "Enter valid numbers";
    return;
  }

  if (min > max) {
    resultBox.textContent = "Min > Max!";
    return;
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  resultBox.textContent = random;
}
