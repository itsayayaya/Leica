async function loadImages() {

    const response = await fetch(
        'images.json?t=' + Date.now()
    );

    const images = await response.json();

    const gallery =
        document.getElementById('gallery');

    gallery.innerHTML = '';

    images.reverse().forEach(url => {

        const img =
            document.createElement('img');

        img.src = url;

        gallery.appendChild(img);
    });
}

loadImages();

setInterval(loadImages, 5000);
