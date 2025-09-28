let img = [
    `./img/cat-image-1.jpg`,
    `./img/houses-image-2.jpg`,
    `./img/asia-2818564_1280.jpg`,
    `./img/father-9140142_1280.jpg`,
    `./img/hawaii-3708568_1280.jpg`,
    `./img/hawaii-3708569_1280.jpg`,
    `./img/motorcycles-3045706_1280.jpg`,
    `./img/one-bunch-1745659_1280.jpg`,
    `./img/peacock-3080897_1280.jpg`,
    `./img/pictures-382007_1280.jpg`,
    `./img/woman-1403418_1280.jpg`,
    `./img/Fotogram Bilder/blossoms-765781_1280.jpg`,
    `./img/Fotogram Bilder/girl-2696947_1280.jpg`,
    `./img/Fotogram Bilder/hare-9457418_1280.jpg`,
    `./img/Fotogram Bilder/lama-4459193_1280.jpg`,
    `./img/Fotogram Bilder/man-4035612_1280.jpg`,
    `./img/Fotogram Bilder/painting-9433099_1280.jpg`,
    `./img/Fotogram Bilder/man-8547434_1280.jpg`,
    `./img/Fotogram Bilder/parakeets-9190236_1280.jpg`,
    `./img/Fotogram Bilder/rose-8006847_1280.webp`,
    `./img/Fotogram Bilder/woman-9452965_1280.jpg`

];


let imgNames = [];
let currentOverlayImageIndex = 0;
document.getElementById("img-title-text-overlay").textContent = imgNames.join(", ");


function getImageNames() {
    img.forEach((path) => {
        let name = path.split('/').pop();
        imgNames.push(name);
    });
}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let index = 0; index < img.length; index++) {
        contentRef.innerHTML += getImgTemplate(index);
    }
}


function getImgTemplate(index) {
    return `
        <img onclick="toggleOverlay(${index})" class="images_size" src="${img[index]}" alt="">
    `
}


window.onload = function () {
    getImageNames();
    render();
};


function toggleOverlay(index) {
    let refOverlay = document.getElementById('overlay-section');
    updateOverlayImage(index);
    
    refOverlay.classList.toggle('dialog-hidden');
}


function updateOverlayImage() {
    let overlay = document.getElementById('overlay-images')
    index = currentOverlayImageIndex;
    overlay.innerHTML = ``
    overlay.innerHTML += `
        <img id="overlayImg" src="${img[currentOverlayImageIndex]}" alt="images">
    `
    document.getElementById("img-title-text-overlay").textContent = imgNames[currentOverlayImageIndex];
}


function overlayStayOpen(event) {
    event.stopPropagation();
}


function previousOverlayImage() {
    currentOverlayImageIndex--;
    if (currentOverlayImageIndex < 0) {
        currentOverlayImageIndex = img.length - 1;
    }
    updateOverlayImage();
}


function nextOverlayImage() {
    currentOverlayImageIndex++;
    if (currentOverlayImageIndex >= img.length) {
        currentOverlayImageIndex = 0;
    }
    updateOverlayImage();
}

