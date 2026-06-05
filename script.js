const API_URL =
"https://script.google.com/macros/s/AKfycbxA6EdGket65sAFpiQC1T2GecZBGQK-g8pyJsRuidM3KUm9ez4u4dQ5oVKbsKhit4K8cw/exec";

async function loadGallery(){

const response =
await fetch(https://script.google.com/macros/s/AKfycbxA6EdGket65sAFpiQC1T2GecZBGQK-g8pyJsRuidM3KUm9ez4u4dQ5oVKbsKhit4K8cw/exec);

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
