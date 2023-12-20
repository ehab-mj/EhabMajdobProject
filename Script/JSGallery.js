// Mock data for user registration and liked photos
let users = [];
let likedPhotos = {};

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user in local storage (for demo purposes)
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve users from local storage (for demo purposes)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Display photo gallery after successful login
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('photo-gallery').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function likePhoto(photo) {
    const username = document.getElementById('login-username').value;
    const photoSrc = photo.querySelector('img').src;

    if (!likedPhotos[username]) {
        likedPhotos[username] = [];
    }

    if (!likedPhotos[username].includes(photoSrc)) {
        likedPhotos[username].push(photoSrc);
        updateLikes(photo);
        // Store liked photos in local storage (for demo purposes)
        localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
    } else {
        alert('You already liked this photo');
    }
}

function updateLikes(photo) {
    const username = document.getElementById('login-username').value;
    const photoSrc = photo.querySelector('img').src;
    const likesElement = photo.querySelector('.likes');

    if (likedPhotos[username].includes(photoSrc)) {
        likesElement.textContent = likedPhotos[username].filter(p => p === photoSrc).length + ' Likes';
    }
}

// Retrieve liked photos from local storage on page load
window.onload = function () {
    likedPhotos = JSON.parse(localStorage.getItem('likedPhotos')) || {};
};
