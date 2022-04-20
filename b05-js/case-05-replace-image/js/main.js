// let eleImages = document.getElementsByTagName('img');

// for (let i = 0; i < eleImages.length; i++) {
//     if (eleImages[i].getAttribute('src') == '') {
//         eleImages[i].setAttribute('src', 'images/default.jpg');
//     }
// }


let eleImageNull = document.querySelectorAll('img[src=""]');

eleImageNull.forEach(element => {
    element.setAttribute('src', 'images/default.jpg');
});