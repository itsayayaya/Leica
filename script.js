const API_URL =
"https://script.google.com/macros/s/AKfycby5AV0l_gZW1LGllAgLdb0FIKjudc4l6Rw0xxpv07VEOo-0v5UsfU85wPs5_CKOqxE0CQ/exec";

async function loadGallery() {

  try {

    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById("count").innerText =
      `${data.count} Photos`;

    const gallery =
      document.getElementById("gallery");

    gallery.innerHTML = "";

    data.images.forEach(photo => {

      gallery.innerHTML += `
        <div class="card">

          <img
            src="${photo.image}"
            loading="lazy"
            onclick="showImage('${photo.full}')">

          <a
            class="download"
            href="${photo.download}"
            target="_blank">
            Download
          </a>

        </div>
      `;

    });

  } catch (err) {

    console.error(err);

  }
}

function showImage(url) {

  document.getElementById("lightbox")
    .style.display = "flex";

  document.getElementById("lightbox-img")
    .src = url;
}

document.getElementById("close")
  .onclick = () => {

    document.getElementById("lightbox")
      .style.display = "none";
};

loadGallery();

setInterval(loadGallery, 30000);
