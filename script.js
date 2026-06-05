const API_URL =
"https://script.google.com/macros/s/AKfycby1q9tHssm3iVP2kjeysUqLwlMa2OBc7Uu504jB0st4g3tz8VijpVT3hrf54iK9X5pcUw/exec";

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
