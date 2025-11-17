const dateInput = document.getElementById("pod-date");
const podSection = document.getElementById("pod-section");
const podImg = document.getElementById("photo");
const podTitle = document.getElementById("pod-title");
const podDesc = document.getElementById("description");
const selectedDate = document.getElementById("selected-date");
const saveFavBtn = document.getElementById("save-fav");

let currentImage = null;

// Reset the page when it loads
window.addEventListener("load", () => {
  podImg.src = "";
  podTitle.textContent = "Select a date to see the picture";
  podDesc.textContent = "";
  podSection.classList.add("hidden");
  if (saveFavBtn) saveFavBtn.textContent = "🤍";
});

// Event listener for date selection
dateInput.addEventListener("change", () => {
  const date = dateInput.value;
  if (!date) return;

  selectedDate.textContent = date;
  podSection.classList.remove("hidden");

  loadPicture(date);
});

async function loadPicture(date) {
  podTitle.textContent = "Loading...";
  podDesc.textContent = "";
  podImg.src = "";
  if (saveFavBtn) saveFavBtn.textContent = "🤍";

  const [year, month, day] = date.split("-");
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const image = data.image;

    if (!image) {
      podImg.alt = "No image available for this date";
      podTitle.textContent = "No image available";
      podDesc.textContent = "";
      currentImage = null;
      return;
    }

    // Get usable image source
    let src = image.image?.source || image.source || image.thumbnail?.source;
    if (!src) {
      podTitle.textContent = "Image URL not found";
      podDesc.textContent = "";
      currentImage = null;
      return;
    }
    if (src.startsWith("//")) src = "https:" + src;

    podImg.src = src;

    // FIX: Extract clean title from <span class="mw-page-title-main">...</span>
    let titleText = "No title available";
    if (image.title) {
      const spanMatch = image.title.match(/<span class="mw-page-title-main">(.*?)<\/span>/);
      titleText = spanMatch ? spanMatch[1] : image.title;
    } else if (data.tfa?.titles?.display) {
      titleText = data.tfa.titles.display;
    }
    podTitle.textContent = titleText;

    podDesc.textContent = image.description?.text || "No description available";

    currentImage = { date, title: titleText, desc: podDesc.textContent, url: src };

  } catch (err) {
    console.error("Fetch error:", err);
    podImg.src = "assets/placeholder.jpg";
    podTitle.textContent = "Error showing picture";
    podDesc.textContent = "Please try again later.";
    currentImage = null;
  }
}

// Save to favourites button
if (saveFavBtn) {
  saveFavBtn.addEventListener("click", () => {
    if (!currentImage) return;

    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!favs.some(f => f.date === currentImage.date && f.url === currentImage.url)) {
      favs.push(currentImage);
      localStorage.setItem("favourites", JSON.stringify(favs));
      saveFavBtn.textContent = "💛";
    }
  });
}
