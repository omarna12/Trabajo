
function openModal(src, index) {
    currentIndex = index;
    document.getElementById("img01").src = src;
    document.getElementById("caption").innerHTML = `Imagen ${index + 1} de ${images.length}`;
    document.getElementById("myModal").style.display = "flex"; 

    document.body.classList.add('no-scroll');

}

function closeModal() {
    document.getElementById("myModal").style.display = "none"; 
    document.body.classList.remove('no-scroll');

}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1; 
    if (currentIndex >= images.length) currentIndex = 0; 
    document.getElementById("img01").src = images[currentIndex];
    document.getElementById("caption").innerHTML = `Imagen ${currentIndex + 1} de ${images.length}`;
}


window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal(); 
    }
};