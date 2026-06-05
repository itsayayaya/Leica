const API_URL =
"https://script.google.com/macros/s/AKfycbwO8YJ94G_wSQWn68Kq4vZzS6iklEIMiCV2O5kXQRMp7SLiZhce3QEHdRp1jdApEZ5B4A/exec";

async function loadGallery(){

const response =
await fetch(API_URL);

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
