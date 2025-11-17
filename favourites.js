const favouritesList = document.getElementById('favourites-list');

function loadFavourites() {
    const stored = JSON.parse(localStorage.getItem('favourites')) || [];
    favouritesList.innerHTML = '';

    if (stored.length === 0) {
        favouritesList.innerHTML = '<p>No favourites saved.</p>';
        return;
    }

    stored.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('image-card');

        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}" class="image-card__img" />
            <h3 class="mission__title">${item.title}</h3>
            <p class="mission__text">${item.desc}</p>
            <p>${item.date}</p>
            <button data-index="${index}" class="remove-btn btn btn-warm">Remove</button>
        `;

        favouritesList.appendChild(card);
    });

    attachRemoveEvents();
}

function attachRemoveEvents() {
    const buttons = document.querySelectorAll('.remove-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            removeFavourite(btn.dataset.index);
        });
    });
}

function removeFavourite(index) {
    let stored = JSON.parse(localStorage.getItem('favourites')) || [];
    stored.splice(index, 1);
    localStorage.setItem('favourites', JSON.stringify(stored));
    loadFavourites();
}

loadFavourites();
