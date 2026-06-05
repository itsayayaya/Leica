const API_URL =
"https://script.google.com/macros/s/AKfycbxpFT3dzd6qFDjsZ0tvQ-FNA2f4PoQ_p6ruS1zCaKqKB0mHpgwcnazaX7I5QRCgD_9Q6A/exec";

async function loadGallery(){

const response =
await fetch(folderId);

const data =
await response.json();

document.getElementById("count")
.innerText =
`${data.count} Photos`;

const gallery =
document.getElementById("gallery");

gallery.innerHTML = "";

data.images.forEach(photo=>{

gallery.innerHTML += `

<div class="card">

<img
src="${photo.image}"
onclick="showImage('${photo.image}')">

<a
class="download"
href="${photo.download}">
Download
</a>

</div>

`;

});

}

function showImage(url){

document.getElementById("lightbox")
.style.display="flex";

document.getElementById("lightbox-img")
.src=url;
}

document.getElementById("close")
.onclick=()=>{

document.getElementById("lightbox")
.style.display="none";

};

loadGallery();

setInterval(loadGallery,60000);
