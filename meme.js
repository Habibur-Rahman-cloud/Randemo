const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");

let image;

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
});

topTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}

// Download Final Output

const downloadBtn = document.querySelector("#downloadBtn");

downloadBtn.addEventListener("click", () => {
  if (!canvas.toDataURL) return;

  const imageURI = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imageURI;
  link.download = "meme.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// clear your page

const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", () => {
  // Clear inputs
  topTextInput.value = "";
  bottomTextInput.value = "";
  imageFileInput.value = null;

  // Clear canvas
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Reset image reference
  image = null;
});


// show download and clear button after image uploadation

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );

      // Show the buttons
      document.querySelector("#downloadBtn").style.display = "inline-block";
      document.querySelector("#clearBtn").style.display = "inline-block";
    },
    { once: true }
  );
});

// hide button again after clear the page

clearBtn.addEventListener("click", () => {
  // Clear inputs
  topTextInput.value = "";
  bottomTextInput.value = "";
  imageFileInput.value = null;

  // Clear canvas
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Reset image reference
  image = null;

  // Hide the buttons again
  downloadBtn.style.display = "none";
  clearBtn.style.display = "none";
});