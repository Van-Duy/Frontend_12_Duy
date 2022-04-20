let elmBox = document.getElementsByClassName("box");


let maxHeight = 0;
for (let i = 0; i < elmBox.length; i++) {
    let currentHeight = elmBox[i].offsetHeight ;
    maxHeight = (currentHeight >= maxHeight) ? currentHeight : maxHeight;

}

// console.log(maxHeight)

// for (let i = 0; i < elmBox.length; i++) {
// //     (i % 2 == 0) ? elmBox[i].style.backgroundColor = "red" : elmBox[i].style.backgroundColor = "yellow";
// }

