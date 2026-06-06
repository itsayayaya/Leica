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

gallery.innerHTML += `
<div class="card">
  <img
    src="${photo.image}"
    onclick="showImage('${photo.full}')">

  <a
    class="download"
    href="${photo.download}">
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

<a
  class="download"
  href="${photo.download}"
  target="_blank"
  title="Download">

<svg xmlns="http://www.w3.org/2000/svg"
     width="20"
     height="20"
     fill="currentColor"
     viewBox="0 0 16 16">

  <path d="M.5 9.9v4.6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.9h-1v4.6H1.5V9.9h-1z"/>

  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3-.708-.708L8.5 10.293V1h-1v9.293L5.354 8.146l-.708.708 3 3z"/>

</svg>

</a>
loadGallery();

setInterval(loadGallery, 30000);
